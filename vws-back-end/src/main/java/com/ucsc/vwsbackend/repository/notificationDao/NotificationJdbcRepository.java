package com.ucsc.vwsbackend.repository.notificationDao;

import com.ucsc.vwsbackend.entities.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class NotificationJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<Notification> getUserNotification(long id) {

            MapSqlParameterSource namedParameters = new MapSqlParameterSource();

            namedParameters.addValue("id", id);

            String query ="SELECT * from notification where user_id=:id and view=0";

            List<Notification> notifications = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<Notification>(Notification.class));
            return notifications;


    }
}
