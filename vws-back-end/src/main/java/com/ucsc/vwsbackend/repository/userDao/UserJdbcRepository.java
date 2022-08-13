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

    public long updateProfile(Profile profile, String role) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update1 = "UPDATE user " +
                "SET first_name = :firstName, last_name = :lastName, phone_number= :phoneNumber, email = :email  WHERE id = :id;";
        String update2="";
        if(role.equals("ADMIN")){
            update2 = "UPDATE admin " +
                    "SET first_name = :firstName, last_name = :lastName, district= :district, university_college = :universityCollege, address=:address  WHERE id = :id;";
        }else if(role.equals("VOLUNTEER")){
            update2 = "UPDATE volunteer " +
                    "SET first_name = :firstName, last_name = :lastName, district= :district, university_college = :universityCollege, address=:address  WHERE id = :id;";
        }else{
            update2 = "UPDATE project_coordinator " +
                    "SET first_name = :firstName, last_name = :lastName, district= :district, university_college = :universityCollege, address=:address  WHERE id = :id;";
        }

        namedParameters.addValue("id", profile.getId());
        namedParameters.addValue("firstName", profile.getFirstName());
        namedParameters.addValue("lastName", profile.getLastName());
        namedParameters.addValue("phoneNumber", profile.getPhoneNumber());

        namedParameters.addValue("address", profile.getAddress());
        namedParameters.addValue("email", profile.getEmail());
        namedParameters.addValue("universityCollege", profile.getUniversityCollege());
        namedParameters.addValue("district", profile.getDistrict());
        namedParameters.addValue("role", role);

        int table1 = jdbc.update(update1, namedParameters);

        int table2 = jdbc.update(update2, namedParameters);
        return table1+table2;
    }

    public String changePassword(String newPassword) {
        return "Password Changed!";
    }
}
