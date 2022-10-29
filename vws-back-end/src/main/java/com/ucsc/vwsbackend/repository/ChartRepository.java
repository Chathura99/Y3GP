package com.ucsc.vwsbackend.repository;

import com.ucsc.vwsbackend.dto.*;
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

        String sql5 = "SELECT count(*) from project where status=1 ";
        adminHomeSummary.setCurrentProjectCount(jdbcTemplate.queryForObject(sql5, Integer.class));

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

        String sql1 = "SELECT count(*) from event where (start_date > curdate() and  status!=0)";
        volunteerHomeSummary.setUpcomingEventsCount(jdbcTemplate.queryForObject(sql1, Integer.class));

        String sql2 = "SELECT count(*) from event as e INNER JOIN participate_event as pe ON pe.volunteer_id=e.volunteer_id AND pe.event_id=e.event_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "where e.status=1 and v.volunteer_id=1 and e.end_date<curdate()";
        volunteerHomeSummary.setCompletedEventsCount(jdbcTemplate.queryForObject(sql2, Integer.class));

        String sql3 = "SELECT COUNT(*) FROM poll ";
        volunteerHomeSummary.setNewPollsCount(jdbcTemplate.queryForObject(sql3, Integer.class));

        String sql4 = "SELECT count(*) from project where (status=1)";
        volunteerHomeSummary.setMyProjectsCount(jdbcTemplate.queryForObject(sql4, Integer.class));

//        ToDO : query for compared to last month
        return volunteerHomeSummary;
    }

    public List<UserSummary>  GetUserSummary() {
        String sql = "SELECT role_code as name,count(*) as count FROM `authority` group by role_code";

        List<UserSummary> userSummaries = jdbc.query(sql, new BeanPropertyRowMapper<UserSummary>(UserSummary.class));

        return  userSummaries;
    }
    public List<VolunteerProjectSummary> getVolunteerProjectSummary(){
        String sql ="SELECT count(*) as count,p.name FROM event as e INNER JOIN project as p " +
                "ON p.project_id=e.project_id GROUP BY e.project_id";
        List<VolunteerProjectSummary> summary = jdbc.query(sql, new BeanPropertyRowMapper<VolunteerProjectSummary>(VolunteerProjectSummary.class));
        return summary;
    }

    public List<VolunteerProjectSummary> getVolunteerCompletedEventSummary(){
        String sql ="SELECT count(*) as count,p.name FROM event as e INNER JOIN project as p ON p.project_id=e.project_id INNER JOIN participate_event as pe ON e.volunteer_id=pe.volunteer_id " +
                "WHERE e.volunteer_id=1 AND e.end_date<curdate() AND e.status=1 GROUP BY e.event_id";
        List<VolunteerProjectSummary> summary = jdbc.query(sql, new BeanPropertyRowMapper<VolunteerProjectSummary>(VolunteerProjectSummary.class));
        return summary;
    }


    public List<VolunteerProjectSummary> getVolunteerCoordinatedEventSummary(){
        String sql ="SELECT count(*) as count,p.name from event as e INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id where e.status=0 and v.volunteer_id=1 GROUP BY e.project_id";
        List<VolunteerProjectSummary> summary = jdbc.query(sql, new BeanPropertyRowMapper<VolunteerProjectSummary>(VolunteerProjectSummary.class));
        return summary;
    }
}
