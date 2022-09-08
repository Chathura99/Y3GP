package com.ucsc.vwsbackend.repository.announcementDao;

import com.ucsc.vwsbackend.dto.AnnouncementInfo;
import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.entities.Announcement;
import com.ucsc.vwsbackend.entities.JoinRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public class AnnouncementJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<AnnouncementWithAuthor> getWithAuthor(String category) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        namedParameters.addValue("category", category);

        String query ="SELECT a.*,u.first_name,u.last_name,auth.role_code as role " +
                "FROM announcement as a " +
                "INNER JOIN user as u ON a.user_id = u.id " +
                "INNER JOIN user_authority as ua ON u.id = ua.user_id " +
                "INNER JOIN authority as auth ON auth.id = ua.user_id " +
                "and a.category=:category";

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

        long coordinator_id = announcementInfo.getUserId();
        System.out.println(":ID" + announcementInfo.getUserId());
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO announcement " +
                "(category, content,date, title,user_id) " +
                "values (:category, :content, :date, :title, :user_id )";

        namedParameters.addValue("category", announcementInfo.getCategory());
        namedParameters.addValue("content", announcementInfo.getContent());
        namedParameters.addValue("date", LocalDateTime.now());
        namedParameters.addValue("title", announcementInfo.getTitle());
        namedParameters.addValue("user_id", announcementInfo.getUserId());

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

    public List<AnnouncementWithAuthor> getAllWithAuthor() {
        String query ="SELECT a.*,u.first_name,u.last_name,auth.role_code as role " +
                "FROM announcement as a " +
                "INNER JOIN user as u ON a.user_id = u.id " +
                "INNER JOIN user_authority as ua ON u.id = ua.user_id " +
                "INNER JOIN authority as auth ON auth.id = ua.user_id ORDER BY date DESC";

        List<AnnouncementWithAuthor> announcementWithAuthor = jdbc.query(query, new BeanPropertyRowMapper<AnnouncementWithAuthor>(AnnouncementWithAuthor.class));
        return announcementWithAuthor;
    }

    public AnnouncementWithAuthor getAnnouncementById(long id) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query ="SELECT a.*,u.first_name,u.last_name,auth.role_code as role " +
                "FROM announcement as a " +
                "INNER JOIN user as u ON a.user_id = u.id " +
                "INNER JOIN user_authority as ua ON u.id = ua.user_id " +
                "INNER JOIN authority as auth ON auth.id = ua.user_id where ann_id = ? ORDER BY date DESC";

        AnnouncementWithAuthor ann = (AnnouncementWithAuthor) jdbcTemplate.queryForObject(query, new Object[]{id}, new BeanPropertyRowMapper(AnnouncementWithAuthor.class));
        return ann;
    }
}







