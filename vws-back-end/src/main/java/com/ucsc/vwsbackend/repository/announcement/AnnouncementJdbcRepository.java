package com.ucsc.vwsbackend.repository.announcement;

import com.ucsc.vwsbackend.entities.Announcement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.ucsc.vwsbackend.VwsBackEndApplication.GLOBAL_TIME;

@Repository
public class AnnouncementJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

//    NamedParameterJdbcTemplate
    public List<Announcement> getAllWithAuthor() {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "SELECT a.*,p.address FROM announcement as a,project_coordinator as p";
        List<Announcement> announcement = jdbc.query(query, namedParameters,
                new BeanPropertyRowMapper<Announcement>(Announcement.class));
        return announcement;
    }

    public List<Announcement> getByCategory(String category) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "SELECT * FROM announcement where  category = :category";
        namedParameters.addValue("category",category);
        List<Announcement> announcement = jdbc.query(query, namedParameters,
                new BeanPropertyRowMapper<Announcement>(Announcement.class));
        return announcement;
    }

    public long deleteAnnouncement(Long id) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "Delete FROM announcement where ann_id = :id;";

        namedParameters.addValue("id", id);

        return jdbc.update(query, namedParameters);

    }

    public long addAnnouncement(Announcement announcement) {

        long coordinator_id = announcement.getProjectCoordinator().getCoordinatorId();
        System.out.println("coordinator_id " +coordinator_id);
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO announcement (category, content,date, title,coordinator_id) values (:category, :content, :date, :title, :coordinator_id )";

        namedParameters.addValue("category", announcement.getCategory());
        namedParameters.addValue("content", announcement.getContent());
        namedParameters.addValue("date", announcement.getDate());
        namedParameters.addValue("title", announcement.getTitle());
        namedParameters.addValue("coordinator_id", coordinator_id);

        int rowsAffected = jdbc.update(query , namedParameters);
        return rowsAffected;

    }

    public long editAnnouncement(Announcement announcement) {
//        System.out.println("Today: " + GLOBAL_TIME);
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE announcement SET title = :title, content = :content, category= :category, date= :date WHERE ann_id = :id;";

        namedParameters.addValue("title", announcement.getTitle());
        namedParameters.addValue("content", announcement.getContent());
        namedParameters.addValue("category", announcement.getCategory());
        namedParameters.addValue("date", announcement.getDate());
        namedParameters.addValue("id", announcement.getAnnId());
        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;

    }
}







