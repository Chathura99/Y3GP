package com.ucsc.vwsbackend.repository;

import com.ucsc.vwsbackend.dto.AdminHomeSummary;
import com.ucsc.vwsbackend.dto.AdminProjectSummary;
import com.ucsc.vwsbackend.dto.VolunteerHomeSummary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ChartRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public AdminHomeSummary getAdminHomeSummary() {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        AdminHomeSummary adminHomeSummary= new AdminHomeSummary();

        String sql1 = "SELECT count(*) from volunteer ";
        adminHomeSummary.setVolunteerCount(jdbcTemplate.queryForObject(sql1, Integer.class));

        String sql2 = "SELECT count(*) from event where MONTH(start_date) = MONTH(CURRENT_DATE()) " +
                "AND YEAR(start_date) = YEAR(CURRENT_DATE())";
        adminHomeSummary.setEventCount(jdbcTemplate.queryForObject(sql2, Integer.class));

        String sql3 = "SELECT count(*) from join_request where status=0 AND MONTH(requested_date) = MONTH(CURRENT_DATE()) " +
                "AND YEAR(requested_date) = YEAR(CURRENT_DATE())";
        adminHomeSummary.setNewRequestCount(jdbcTemplate.queryForObject(sql3, Integer.class));

        String sql4 = "SELECT count(*) from project where status=1 AND MONTH(start_date) = MONTH(CURRENT_DATE()) " +
                "AND YEAR(start_date) = YEAR(CURRENT_DATE())";
        adminHomeSummary.setProjectCount(jdbcTemplate.queryForObject(sql4, Integer.class));

//        ToDO : query for compared to last month
        return adminHomeSummary;
    }

    public List<AdminProjectSummary> getProjectSummary(){
        String sql ="SELECT count(*) as count,p.name FROM event as e INNER JOIN project as p " +
                "ON p.project_id=e.project_id GROUP BY e.project_id";
        List<AdminProjectSummary> summary = jdbc.query(sql, new BeanPropertyRowMapper<AdminProjectSummary>(AdminProjectSummary.class));
        return summary;
    }

    // Volunteer-Malik
    public VolunteerHomeSummary getVolunteerHomeSummary() {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        VolunteerHomeSummary volunteerHomeSummary= new VolunteerHomeSummary();

        String sql1 = "SELECT count(*) from event where (start_date > curdate()) ";
        volunteerHomeSummary.setUpcomingEventsCount(jdbcTemplate.queryForObject(sql1, Integer.class));

        String sql2 = "SELECT count(*) from event where (end_date < curdate())";
        volunteerHomeSummary.setCompletedEventsCount(jdbcTemplate.queryForObject(sql2, Integer.class));

        String sql3 = "SELECT count(*) from event where start_date > curdate()";
        volunteerHomeSummary.setNewPollsCount(jdbcTemplate.queryForObject(sql3, Integer.class));

        String sql4 = "SELECT count(*) from project where (status=1)";
        volunteerHomeSummary.setMyProjectsCount(jdbcTemplate.queryForObject(sql4, Integer.class));

//        ToDO : query for compared to last month
        return volunteerHomeSummary;
    }
}
