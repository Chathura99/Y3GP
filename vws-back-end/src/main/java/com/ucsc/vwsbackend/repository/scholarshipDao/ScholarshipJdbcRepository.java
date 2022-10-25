package com.ucsc.vwsbackend.repository.scholarshipDao;

import com.ucsc.vwsbackend.entities.Scholarship;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ScholarshipJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<Scholarship> getScholarship() {
        String query ="SELECT * from scholarship";

        List<Scholarship> scholarships = jdbc.query(query, new BeanPropertyRowMapper<Scholarship>(Scholarship.class));
        return scholarships;
    }

    public int updateStatus(long id, Scholarship scholarship) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE scholarship " +
                "SET status = 1,description=:description,meeting_link=:link WHERE id = :id;";

        namedParameters.addValue("id", id);
        namedParameters.addValue("description", scholarship.getDescription());
        namedParameters.addValue("link", scholarship.getMeetingLink());

        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }
}
