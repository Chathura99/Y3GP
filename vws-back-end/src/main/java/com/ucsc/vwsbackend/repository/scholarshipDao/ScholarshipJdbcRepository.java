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

    public long ApplyScholar(Scholarship scholarship) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
//to event table
        String query1 = "INSERT INTO scholarship " +
                "( address,requested_date,district,email,nic,phone_number,scholarship_type,full_name,income_certificate,other,result_sheet,university_college,status) " +
                "values (:address,curdate(), :district,:email,:nic,:phone_number,:scholarship_type,:full_name,:income_certificate,:other,:result_sheet,:university_college,:status)";
        namedParameters.addValue("address", scholarship.getAddress());
        namedParameters.addValue("district",scholarship.getDistrict() );
        namedParameters.addValue("email", scholarship.getEmail());
        namedParameters.addValue("phone_number",scholarship.getPhoneNumber() );
        namedParameters.addValue("scholarship_type", scholarship.getScholarshipType());
        namedParameters.addValue("full_name", scholarship.getFullName());
        namedParameters.addValue("income_certificate",scholarship.getIncomeCertificate() );
        namedParameters.addValue("other", scholarship.getOther());
        namedParameters.addValue("nic", scholarship.getNic());
        namedParameters.addValue("result_sheet",scholarship.getResultSheet());
        namedParameters.addValue("university_college", scholarship.getUniversityCollege());
        namedParameters.addValue("status",0 );


        int rowsAffected1 = jdbc.update(query1, namedParameters);
        return rowsAffected1;
    }
}
