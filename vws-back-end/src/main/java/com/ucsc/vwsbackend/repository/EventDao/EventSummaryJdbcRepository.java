package com.ucsc.vwsbackend.repository.EventDao;


import com.ucsc.vwsbackend.dto.EventDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EventSummaryJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<EventDetail> getAllEvents() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name FROM event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=p.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.start_date< CURDATE() AND CURDATE() < e.end_date AND e.status=1";

        List<EventDetail> events = jdbc.query(query,namedParameters,new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }
}
