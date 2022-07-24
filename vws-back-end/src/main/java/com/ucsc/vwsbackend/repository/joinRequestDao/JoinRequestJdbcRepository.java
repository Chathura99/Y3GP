package com.ucsc.vwsbackend.repository.joinRequestDao;

import com.ucsc.vwsbackend.entities.JoinRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JoinRequestJdbcRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;


    public JoinRequest getData(Long id) {

        String query ="SELECT * FROM join_request WHERE id = ?";

        return (JoinRequest) jdbcTemplate.queryForObject(query, new Object[]{id}, new BeanPropertyRowMapper(JoinRequest.class));
    }
}
