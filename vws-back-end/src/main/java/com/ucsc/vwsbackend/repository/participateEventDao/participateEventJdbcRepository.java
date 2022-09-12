package com.ucsc.vwsbackend.repository.participateEventDao;


import com.ucsc.vwsbackend.dto.NewProjectDetail;
import com.ucsc.vwsbackend.entities.ParticipateEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class participateEventJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public long participateEvent(ParticipateEvent participateEvent) {


        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO participate_event " +
                "(event_id,volunteer_id ) " +
                "values (:event_id, :volunteer_id)";

        namedParameters.addValue("name", participateEvent.getEvent());
        namedParameters.addValue("description", participateEvent.getVolunteer());



        int rowsAffected = jdbc.update(query , namedParameters);
        return rowsAffected;

    }

}
