package com.ucsc.vwsbackend.repository.joinRequestDao;

import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.entities.JoinRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class JoinRequestJdbcRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;


    public JoinRequest getData(Long id) {

        String query ="SELECT * FROM join_request WHERE id = ?";

        return (JoinRequest) jdbcTemplate.queryForObject(query, new Object[]{id}, new BeanPropertyRowMapper(JoinRequest.class));
    }

    public int checkEmailExists(String email) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("email", email);

        String sql = "SELECT count(*) from join_request where email = ?";

        int count = jdbcTemplate.queryForObject(sql, new Object[] { email }, Integer.class);

        return count;
    }

    public List<JoinRequest> getNewRequest() {

        String query ="SELECT * from join_request where status=0";

        List<JoinRequest> joinRequests = jdbc.query(query, new BeanPropertyRowMapper<JoinRequest>(JoinRequest.class));
        System.out.println(joinRequests.get(0).getDate());
        return joinRequests;
    }
}
