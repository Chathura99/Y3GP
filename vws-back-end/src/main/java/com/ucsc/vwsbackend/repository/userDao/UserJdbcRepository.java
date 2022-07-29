package com.ucsc.vwsbackend.repository.userDao;

import com.ucsc.vwsbackend.dto.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserJdbcRepository {

    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public int checkEmailExists(String email) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("email", email);

        String sql = "SELECT count(*) from user where email = ?";

        int count = jdbcTemplate.queryForObject(sql, new Object[] { email }, Integer.class);

        return count;
    }


    public String getRoleByUserId(Long id) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("id", id);
        String sql = "select role_code from authority where authority.id= (select authorities_id from user_authority where user_authority.user_id=?)";
        String role = jdbcTemplate.queryForObject(sql, new Object[] { id }, String.class);

        return role;
    }

    public Profile profile(Long id, String table) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("id", id);
//        namedParameters.addValue("table", table);
        String query = "select u.id,u.first_name,u.last_name,u.phone_number,u.email,r.address,r.district,r.university_college " +
                "from user as u, $table as r " +
                "where r.id=u.id and u.id=?";
//        add table name to query
        query =query.replace("$table",table);
//        get single row
        Profile profile = (Profile) jdbcTemplate.queryForObject(query, new Object[] {id}, new BeanPropertyRowMapper(Profile.class));
        System.out.println(profile.getFirstName());




        return profile;
    }
}
