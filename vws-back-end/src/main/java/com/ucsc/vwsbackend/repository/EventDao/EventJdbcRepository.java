package com.ucsc.vwsbackend.repository.EventDao;


import com.ucsc.vwsbackend.dto.EventDetail;
import com.ucsc.vwsbackend.dto.NewCoordinateEventDetail;
import com.ucsc.vwsbackend.dto.ParticipateEvent;
import com.ucsc.vwsbackend.entities.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public class EventJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<EventDetail> getUpcomingEvents() {
        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name," +
                "v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.start_date> CURDATE()";

        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }

    public List<EventDetail> getPreviousEvents() {
//        System.out.println("bghfghcbnvnbvnbv-----vhgvhbvbjn");
        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.start_date< CURDATE() and e.end_date< CURDATE()";

        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));

        return events;
    }






    //Volunteer

    public List<EventDetail> getOngoingEvents() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name FROM event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=p.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.start_date< CURDATE() AND CURDATE() < e.end_date AND e.status=1";

        List<EventDetail> events = jdbc.query(query,namedParameters,new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }


    public long addCoordinatedEvents(NewCoordinateEventDetail newCoordinateEventDetail) {

        LocalDate sdate = LocalDate.parse(newCoordinateEventDetail.getStartDate());
        LocalDate edate = LocalDate.parse(newCoordinateEventDetail.getEndDate());

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query ="INSERT INTO event " +
                "(volunteer_id, place,start_date, end_date,no_of_volunteers, project_id,status) " +
                "values (:volunteer_id, :place, :start_date, :end_date, :no_of_volunteers, :project_id,0 )";



        namedParameters.addValue("volunteer_id", newCoordinateEventDetail.getVolunteerId());
        namedParameters.addValue("place", newCoordinateEventDetail.getPlace());
        namedParameters.addValue("start_date",sdate);
        namedParameters.addValue("end_date",edate);
        namedParameters.addValue("no_of_volunteers", newCoordinateEventDetail.getNoOfVolunteers());
        namedParameters.addValue("project_id", newCoordinateEventDetail.getProjectId());

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

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.start_date< CURDATE() AND CURDATE() < e.end_date AND e.status=1";
//        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name FROM event as e " +
//                "INNER JOIN project as p ON e.project_id=p.project_id " +
//                "INNER JOIN volunteer as v ON v.volunteer_id=p.volunteer_id " +
//                "INNER JOIN user as u ON u.id=v.id " +
//                "where e.start_date< CURDATE() AND CURDATE() < e.end_date AND e.status=1";


        List<EventDetail> events = jdbc.query(query,namedParameters,new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }

    //view my Completed events(volunteer's)
    public List<EventDetail> getCompletedEvents() {

//        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
//                "INNER JOIN project as p ON e.project_id=p.project_id " +
//                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
//                "INNER JOIN user as u ON u.id=v.id " +
//                "where e.status=1";

        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN participate_event as pe ON pe.volunteer_id=e.volunteer_id AND pe.event_id=e.event_id" +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.status=2";

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

    public long participateToEvent(ParticipateEvent participateEvent) {

        String sql = "SELECT count(*) from participate_event where volunteer_id = ? and event_id=?";

        int count = jdbcTemplate.queryForObject(sql, new Object[] { participateEvent.getVolunteerId(),participateEvent.getEventId() }, Integer.class);

       if(count==1){
           return 2;
       }



        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query = "INSERT INTO participate_event " +
                "(event_id,volunteer_id,status) " +
                "values (:event_id, :volunteer_id,0)";

        namedParameters.addValue("event_id", participateEvent.getEventId());
        namedParameters.addValue("volunteer_id", participateEvent.getVolunteerId());




        int rowsAffected = jdbc.update(query , namedParameters);
        return rowsAffected;

    }

    public List<ParticipateEvent> joinedEvent() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        String query ="select * from participate_event where volunteer_id=!null";

        List<ParticipateEvent> events = jdbc.query(query,namedParameters,new BeanPropertyRowMapper<ParticipateEvent>(ParticipateEvent.class));
        return events;
    }

    public int leaveEvent(ParticipateEvent participateEvent) {

        String sql = "SELECT count(*) from participate_event where volunteer_id = ? and event_id=?";

        int count = jdbcTemplate.queryForObject(sql, new Object[] { participateEvent.getVolunteerId(),participateEvent.getEventId() }, Integer.class);

        if(count==0){
            return 2;
        }
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String delete = "DELETE FROM participate_event WHERE volunteer_id = :volunteer_id  and event_id = :event_id;";



        namedParameters.addValue("event_id", participateEvent.getEventId());
        namedParameters.addValue("volunteer_id", participateEvent.getVolunteerId());

        return jdbc.update(delete, namedParameters);
    }

}
