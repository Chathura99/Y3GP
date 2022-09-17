package com.ucsc.vwsbackend.repository.guestUserFeedbackDao;

import com.ucsc.vwsbackend.dto.AnnouncementInfo;
import com.ucsc.vwsbackend.dto.GuestUserFeedback;
import com.ucsc.vwsbackend.entities.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

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



}
