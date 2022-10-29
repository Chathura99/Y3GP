package com.ucsc.vwsbackend.repository.pollDao;

import com.ucsc.vwsbackend.dto.ForumInfo;
import com.ucsc.vwsbackend.dto.PollInfo;
import com.ucsc.vwsbackend.entities.ReactToPoll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public class PollJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<PollInfo> getPollInfo() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

//        String query ="SELECT *  " +
//                "FROM forum as p " +
//                "INNER JOIN project_coordinator as pc ON p.coordinator_id = pc.coordinator_id " +
//                "INNER JOIN user as u ON u.id = pc.id " +
//                "and p.status=1";
        String query = "SELECT * from poll";


        List<PollInfo> pollInfo = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<PollInfo>(PollInfo.class));
        return pollInfo;
    }

    public long addNewPoll(PollInfo pollInfo) {
        LocalDate edate = LocalDate.parse(pollInfo.getEndDate());

//        System.out.println(":ID" + newProjectDetail.getProjectId());
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO poll " +
                "(start_date,end_date,description,option1,option2,title) " +
                "values (CURDATE(), :end_date, :description, :option1,:option2, :title)";

        namedParameters.addValue("title", pollInfo.getTitle());
        namedParameters.addValue("description", pollInfo.getDescription());
//        namedParameters.addValue("start_date",sdate);
        namedParameters.addValue("end_date", edate);
        namedParameters.addValue("option1", pollInfo.getOption1());
        namedParameters.addValue("option2", pollInfo.getOption2());


        int rowsAffected = jdbc.update(query , namedParameters);
        return rowsAffected;

    }


    public long addReactToPoll(ReactToPoll reactToPoll) {
//        LocalDate edate = LocalDate.parse(pollInfo.getEndDate());

//        System.out.println(":ID" + newProjectDetail.getProjectId());
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO react_to_poll " +
                "(id,option1,option2,volunteer_id) " +
                "values (:poll_id, :option1, :option2,1)";

        namedParameters.addValue("poll_id", reactToPoll.getId());
//        namedParameters.addValue("description", pollInfo.getDescription());
//        namedParameters.addValue("start_date",sdate);
//        namedParameters.addValue("end_date", edate);
        namedParameters.addValue("option1", reactToPoll.getOption1());
        namedParameters.addValue("option2", reactToPoll.getOption2());


        int rowsAffected = jdbc.update(query , namedParameters);
        return rowsAffected;

    }
}
