package com.ucsc.vwsbackend.repository.EventDao;


import com.ucsc.vwsbackend.dto.EventDetail;
import com.ucsc.vwsbackend.entities.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EventJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<EventDetail> getUpcomingEvents() {
        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.start_date> CURDATE()";

        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }

    public List<EventDetail> getPreviousEvents() {
        System.out.println("bghfghcbnvnbvnbv-----vhgvhbvbjn");
        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.start_date< CURDATE()";

        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));

        return events;
    }






    //Volunteer

    public List<EventDetail> getOngoingEvents() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        String query ="SELECT * FROM event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=p.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "and e.status=1";

        List<EventDetail> events = jdbc.query(query,namedParameters,new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }


    public int addCoordinatedEvents(Event event) {

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query ="INSERT INTO event " +
                "(volunteer_id, place,start_date, end_date,no_of_volunteers, project_id) " +
                "values (:name, :place, :start_date, :end_date, :no_of_volunteers, :project_id )";



        namedParameters.addValue("name", event.getVolunteer());
        namedParameters.addValue("place", event.getPlace());
        namedParameters.addValue("start_date", event.getStartDate());
        namedParameters.addValue("end_date", event.getEndDate());
        namedParameters.addValue("no_of_volunteers", event.getNoOfVolunteers());
        namedParameters.addValue("project_id", event.getProject());

        int rowsAffected = jdbc.update(query, namedParameters);
        return rowsAffected;
    }

    // view coordinated events
    public List<EventDetail> getCoordinatedEvents() {

        String query ="SELECT * from event as e INNER JOIN project as p ON e.project_id=p.project_id" +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id" +
                "INNER JOIN user as u ON u.id=v.id where status=0";

        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }


    // view approved coordinated events
    public List<EventDetail> getApprovedCoordinatedEvents() {

        String query ="SELECT * from event as e INNER JOIN project as p ON e.project_id=p.project_id" +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id INNER JOIN user as u ON u.id=v.id where status=1";

        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }

    // approve coordinated events
    public int updateCoordinatedEventStatus(Event eventId){
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE event " +
                "SET status = 1 WHERE eventId = :reqId;";

        namedParameters.addValue("reqId", eventId);


        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }

    public Event getCoordinatedEventById(long id) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query ="SELECT * from event where ann_id = ?";

        Event event = (Event) jdbcTemplate.queryForObject(query, new Object[]{id}, new BeanPropertyRowMapper(Event.class));
        return event;
    }
}
