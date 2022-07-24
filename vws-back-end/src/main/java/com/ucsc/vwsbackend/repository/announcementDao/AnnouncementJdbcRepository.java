package com.ucsc.vwsbackend.repository.announcementDao;

import com.ucsc.vwsbackend.dto.AnnouncementInfo;
import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.entities.Announcement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AnnouncementJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

//    NamedParameterJdbcTemplate
    public List<AnnouncementWithAuthor> getAllWithAuthor(String category) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        namedParameters.addValue("category", category);



        String query = "SELECT a.*,p.address,u.first_name,u.last_name " +
                "FROM announcement as a,project_coordinator as p,user as u " +
                "where category= :category and a.coordinator_id=p.coordinator_id and u.id=p.id";

        List<AnnouncementWithAuthor> announcementWithAuthor = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<AnnouncementWithAuthor>(AnnouncementWithAuthor.class));
        return announcementWithAuthor;

    }


    public long deleteAnnouncement(Long id) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id", id);

        String query = "Delete FROM announcement where ann_id = :id;";



        return jdbc.update(query, namedParameters);

    }

    public long addAnnouncement(AnnouncementInfo announcementInfo) {

        long coordinator_id = announcementInfo.getCoordinatorId();
        System.out.println(":ID" + announcementInfo.getCoordinatorId());
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO announcement " +
                "(category, content,date, title,coordinator_id) " +
                "values (:category, :content, :date, :title, :coordinator_id )";

        namedParameters.addValue("category", announcementInfo.getCategory());
        namedParameters.addValue("content", announcementInfo.getContent());
        namedParameters.addValue("date", announcementInfo.getDate());
        namedParameters.addValue("title", announcementInfo.getTitle());
        namedParameters.addValue("coordinator_id", announcementInfo.getCoordinatorId());

        int rowsAffected = jdbc.update(query , namedParameters);
        return rowsAffected;

    }

    public long editAnnouncement(Announcement announcement) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE announcement " +
                "SET title = :title, content = :content, category= :category, date= :date WHERE ann_id = :id;";

        namedParameters.addValue("title", announcement.getTitle());
        namedParameters.addValue("content", announcement.getContent());
        namedParameters.addValue("category", announcement.getCategory());
        namedParameters.addValue("date", announcement.getDate());
        namedParameters.addValue("id", announcement.getAnnId());

        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;

    }
}







