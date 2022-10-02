package com.ucsc.vwsbackend.repository.userDao;

import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.dto.Profile;
import com.ucsc.vwsbackend.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

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


        String query = "select u.id,u.first_name,u.last_name,u.phone_number,u.email,r.address,r.district,r.university_college,u.user_key " +
                "from user as u, $table as r " +
                "where r.id=u.id and u.id=?";

//        add table name to query
        query =query.replace("$table",table);
//        get single row
        Profile profile = (Profile) jdbcTemplate.queryForObject(query, new Object[] {id}, new BeanPropertyRowMapper(Profile.class));

        return profile;
    }

    public long updateProfile(Profile profile, String role) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        //         change this queries

        String update1 = "UPDATE user " +
                "SET first_name = :firstName, last_name = :lastName, phone_number= :phoneNumber, email = :email  WHERE id = :id;";

        String update2="";

        namedParameters.addValue("id", profile.getId());
        namedParameters.addValue("firstName", profile.getFirstName());
        namedParameters.addValue("lastName", profile.getLastName());
        namedParameters.addValue("phoneNumber", profile.getPhoneNumber());

        namedParameters.addValue("address", profile.getAddress());
        namedParameters.addValue("email", profile.getEmail());
        namedParameters.addValue("universityCollege", profile.getUniversityCollege());
        namedParameters.addValue("district", profile.getDistrict());
        namedParameters.addValue("role", role);

//add query to update both user and other user character table

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

        int table1 = jdbc.update(update1, namedParameters);
        int table2 = jdbc.update(update2, namedParameters);
        return table1+table2;
    }

    public long changePassword(String newPassword,long id) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE user " +
                "SET user_key = :newPassword WHERE id = :id;";
        namedParameters.addValue("newPassword", newPassword);
        namedParameters.addValue("id", id);

        int rowAffected = jdbc.update(update, namedParameters);
        return rowAffected;
    }

    public String getUserKey(long id) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        namedParameters.addValue("id", id);
        String sql = "select user_key from user where id=?";
        String key = jdbcTemplate.queryForObject(sql, new Object[] { id }, String.class);

        return key;
    }

    public List<User> findAllActiveUser() {
        String query ="SELECT * from user where enabled=1";

        List<User> users = jdbc.query(query,new BeanPropertyRowMapper<User>(User.class));
        return users;
    }

    public long deactivateUser(Long id) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update1 = "UPDATE user " +
                "SET enabled = 0 WHERE id = :id;";
        namedParameters.addValue("id", id);
        return  jdbc.update(update1, namedParameters);
    }
}
