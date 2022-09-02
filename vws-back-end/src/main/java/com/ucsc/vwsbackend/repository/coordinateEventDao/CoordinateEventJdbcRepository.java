package com.ucsc.vwsbackend.repository.coordinateEventDao;

import com.ucsc.vwsbackend.entities.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CoordinateEventJdbcRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    protected static NamedParameterJdbcTemplate jdbc;




    public static int addCoordinatedEvents(Event event) {

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query ="INSERT INTO event " +
                "(name, place,start_date, end_date,no_of_volunteers, project_id) " +
                "values (:name, :place, :start_date, :end_date, :no_of_volunteers, :project_id )";



        namedParameters.addValue("name", event.getName());
        namedParameters.addValue("place", event.getPlace());
        namedParameters.addValue("start_date", event.getStartDate());
        namedParameters.addValue("end_date", event.getEndDate());
        namedParameters.addValue("no_of_volunteers", event.getNoOfVolunteers());
        namedParameters.addValue("project_id", event.getProject());

        int rowsAffected = jdbc.update(query, namedParameters);
        return rowsAffected;
    }

    // view coordinated events
    public List<Event> getCoordinatedEvents() {

        String query ="SELECT * from event where status=0";

        List<Event> events = jdbc.query(query, new BeanPropertyRowMapper<Event>(Event.class));
        System.out.println(events.get(0).getStatus());
        return events;
    }

    // view approved coordinated events
    public List<Event> approvedCoordinatedEvents() {

        String query ="SELECT * from event where status=1";

        List<Event> events = jdbc.query(query, new BeanPropertyRowMapper<Event>(Event.class));
        System.out.println(events.get(1).getStatus());
        return events;
    }

    // approve coordinated events
    public static int updateCoordinatedEventStatus(Event eventId){
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE event " +
                "SET status = 1 WHERE eventId = :reqId;";

        namedParameters.addValue("reqId", eventId);


        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }
}
