package com.ucsc.vwsbackend.repository.EventDao;

import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.dto.EventDetail;
import com.ucsc.vwsbackend.entities.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EventJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<EventDetail> getUpcomingEvents() {
        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.start_date> CURDATE()";

        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }

    public List<EventDetail> getPreviousEvents() {
        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.start_date< CURDATE()";

        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }
}
