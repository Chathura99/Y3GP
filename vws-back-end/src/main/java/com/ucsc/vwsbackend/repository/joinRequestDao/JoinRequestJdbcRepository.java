package com.ucsc.vwsbackend.repository.joinRequestDao;

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
        System.out.println("->"+joinRequests.get(0).getDate()+joinRequests.get(0).getEmail());
        return joinRequests;
    }

    public int updateStatus(long id){
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE join_request " +
                "SET status = 1 WHERE id = :reqId;";

        namedParameters.addValue("reqId", id);


        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }

    public int deleteRequest(Long id) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String delete = "DELETE FROM join_request WHERE id = :id;";

        namedParameters.addValue("id", id);

        return jdbc.update(delete, namedParameters);
    }
}
