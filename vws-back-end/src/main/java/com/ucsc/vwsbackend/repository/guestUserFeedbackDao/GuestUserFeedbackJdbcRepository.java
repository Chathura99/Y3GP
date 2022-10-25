package com.ucsc.vwsbackend.repository.guestUserFeedbackDao;

import com.ucsc.vwsbackend.dto.AnnouncementInfo;
import com.ucsc.vwsbackend.dto.ConsiderFeedbackNotification;
import com.ucsc.vwsbackend.dto.GuestUserFeedback;
import com.ucsc.vwsbackend.entities.Announcement;
import com.ucsc.vwsbackend.entities.Event;
import com.ucsc.vwsbackend.entities.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public class GuestUserFeedbackJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public long addFeedback(GuestUserFeedback guestUserFeedback) {    //dto name

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query ="INSERT INTO guest_user_feedback " +
                "(feedback_id, feedback,date) " +
                "values (:feedback_id, :feedback,curdate() )";

        namedParameters.addValue("feedback_id", guestUserFeedback.getFeedbackId());
        namedParameters.addValue("feedback", guestUserFeedback.getFeedback());

        int rowsAffected = jdbc.update(query, namedParameters);
        return rowsAffected;
    }


    public List<GuestUserFeedback> getfeedback() {
        String query ="SELECT * from guest_user_feedback where consider is NULL";

        List<GuestUserFeedback> guestUserFeedbacks = jdbc.query(query, new BeanPropertyRowMapper<GuestUserFeedback>(GuestUserFeedback.class));
        return guestUserFeedbacks;

    }

    public long considerFeedback(long id, ConsiderFeedbackNotification notification) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query ="INSERT INTO notification " +
                "(description, view,date,heading,user_id) " +
                "values (:description,0,CURRENT_TIMESTAMP,:heading,:userId )";
        namedParameters.addValue("description", notification.getDescription());
        namedParameters.addValue("userId", notification.getUserId());
        namedParameters.addValue("heading", notification.getHeading());

        int rowsAffected = jdbc.update(query, namedParameters);
        return rowsAffected;
    }
    public long consider(long id) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE guest_user_feedback " +
                "SET consider = 1 WHERE feedback_id = :id;";

        namedParameters.addValue("id", id);

        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;

    }
}
