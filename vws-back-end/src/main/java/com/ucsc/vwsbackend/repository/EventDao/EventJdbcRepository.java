package com.ucsc.vwsbackend.repository.EventDao;


import com.ucsc.vwsbackend.dto.EventDetail;
import com.ucsc.vwsbackend.dto.GuestUserRequest;
import com.ucsc.vwsbackend.dto.NewCoordinateEventDetail;
import com.ucsc.vwsbackend.dto.ParticipateEvent;
import com.ucsc.vwsbackend.dto.ProjectDetail;
import com.ucsc.vwsbackend.entities.Announcement;
import com.ucsc.vwsbackend.entities.Event;
import com.ucsc.vwsbackend.entities.EventProgress;
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
        String query = "SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name," +
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
        String query = "SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.end_date< CURDATE() and e.status=1";


        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));

        return events;
    }


    //Volunteer

    public List<EventDetail> getOngoingEvents() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        String query = "SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name FROM event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=p.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.start_date> CURDATE() and e.status=1 ";

        List<EventDetail> events = jdbc.query(query, namedParameters, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }


    public long addCoordinatedEvents(NewCoordinateEventDetail newCoordinateEventDetail) {

        LocalDate sdate = LocalDate.parse(newCoordinateEventDetail.getStartDate());
        LocalDate edate = LocalDate.parse(newCoordinateEventDetail.getEndDate());

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query = "INSERT INTO event " +
                "(volunteer_id, place,start_date, end_date,no_of_volunteers, project_id,status) " +
                "values (:volunteer_id, :place, :start_date, :end_date, :no_of_volunteers, :project_id,0 )";


        namedParameters.addValue("volunteer_id", newCoordinateEventDetail.getVolunteerId());
        namedParameters.addValue("place", newCoordinateEventDetail.getPlace());
        namedParameters.addValue("start_date", sdate);
        namedParameters.addValue("end_date", edate);
        namedParameters.addValue("no_of_volunteers", newCoordinateEventDetail.getNoOfVolunteers());
        namedParameters.addValue("project_id", newCoordinateEventDetail.getProjectId());

        int rowsAffected = jdbc.update(query, namedParameters);
        return rowsAffected;
    }

    // view coordinated events
    public List<EventDetail> getCoordinatedEvents() {

        String query = "SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.status=0 and v.volunteer_id=1";

        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }

    public long deleteCoordinatedEvents(Long id) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id", id);

        String query = "Delete FROM event where event = :id;";



        return jdbc.update(query, namedParameters);

    }

    // view approved coordinated events
    public List<EventDetail> getApprovedCoordinatedEvents() {

        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query = "SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.start_date< CURDATE() AND CURDATE() < e.end_date AND e.status=1";
//        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name FROM event as e " +
//                "INNER JOIN project as p ON e.project_id=p.project_id " +
//                "INNER JOIN volunteer as v ON v.volunteer_id=p.volunteer_id " +
//                "INNER JOIN user as u ON u.id=v.id " +
//                "where e.start_date< CURDATE() AND CURDATE() < e.end_date AND e.status=1";


        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }

    //view my Completed events(volunteer's)
    public List<EventDetail> getCompletedEvents() {

//        String query ="SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
//                "INNER JOIN project as p ON e.project_id=p.project_id " +
//                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
//                "INNER JOIN user as u ON u.id=v.id " +
//                "where e.status=1";

        String query = "SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name,v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN participate_event as pe ON pe.volunteer_id=e.volunteer_id AND pe.event_id=e.event_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "where e.status=1 and v.volunteer_id=1 and e.end_date<curdate()";

        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }

    //update my coordinated events(volunteer's)
    public long editMyCoordinatedEvents(Event event) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
System.out.println("vjbfjbj"+event.getEventId());

        String query = "Update event " +
                "SET description = :description, participated_volunteers_Count = :participated_volunteers_Count,actual_days = :actual_days  WHERE event_id = :id;";

        namedParameters.addValue("id", event.getEventId());
        namedParameters.addValue("description", event.getDescription());
        namedParameters.addValue("participated_volunteers_Count", event.getParticipatedVolunteersCount());
        namedParameters.addValue("actual_days", event.getActualDays());
//        namedParameters.addValue("category", announcement.getCategory());
//        namedParameters.addValue("date", announcement.getDate());
//        namedParameters.addValue("id", announcement.getAnnId());

        int rowsAffected = jdbc.update(query, namedParameters);
        return rowsAffected;

    }

    // approve coordinated events
//    public int updateCoordinatedEventStatus(Event eventId){
//        MapSqlParameterSource namedParameters =
//                new MapSqlParameterSource();
//        String update = "UPDATE event " +
//                "SET status = 1 WHERE eventId = :reqId;";
//
//        namedParameters.addValue("reqId", eventId);
//
//
//        int rowsAffected = jdbc.update(update, namedParameters);
//        return rowsAffected;
//    }
    public int updateCoordinatedEventStatus(Event eventId) {
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

        String query = "SELECT * from event where ann_id = ?";

        Event event = (Event) jdbcTemplate.queryForObject(query, new Object[]{id}, new BeanPropertyRowMapper(Event.class));
        return event;
    }

    public long participateToEvent(ParticipateEvent participateEvent) {

        String sql = "SELECT count(*) from participate_event where volunteer_id = ? and event_id=?";

        int count = jdbcTemplate.queryForObject(sql, new Object[]{participateEvent.getVolunteerId(), participateEvent.getEventId()}, Integer.class);

       if (count == 1) {
            return 2;
        }


//        String sql2 = "SELECT count(*) from participate_event where volunteer_id = ? and event_id=?";

//        String sql2 = "SELECT count(*) from event inner join participate_event as pe ON e.event_id=pe.event_id " +
//                "where ";
//
//        int counts = jdbcTemplate.queryForObject(sql2, new Object[] { participateEvent.getVolunteerId(),participateEvent.getEventId() }, Integer.class);
//
//        if(counts==1){
//            return 2;
//        }


       


        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();

        String query = "INSERT INTO participate_event " +
                "(event_id,volunteer_id,status) " +
                "values (:event_id, :volunteer_id,0)";

        namedParameters.addValue("event_id", participateEvent.getEventId());
        namedParameters.addValue("volunteer_id", participateEvent.getVolunteerId());


        int rowsAffected = jdbc.update(query, namedParameters);
        return rowsAffected;

    }

    public List<ParticipateEvent> joinedEvent() {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        String query = "select * from participate_event where volunteer_id=!null";

        List<ParticipateEvent> events = jdbc.query(query, namedParameters, new BeanPropertyRowMapper<ParticipateEvent>(ParticipateEvent.class));
        return events;
    }

    public int leaveEvent(ParticipateEvent participateEvent) {

        String sql = "SELECT count(*) from participate_event where volunteer_id = ? and event_id=?";

        int count = jdbcTemplate.queryForObject(sql, new Object[]{participateEvent.getVolunteerId(), participateEvent.getEventId()}, Integer.class);

        if (count == 0) {
            return 2;
        }
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String delete = "DELETE FROM participate_event WHERE volunteer_id = :volunteer_id  and event_id = :event_id;";


        namedParameters.addValue("event_id", participateEvent.getEventId());
        namedParameters.addValue("volunteer_id", participateEvent.getVolunteerId());

        return jdbc.update(delete, namedParameters);
    }



//Project Coordinator - Ravindu
public List<EventDetail> getJoinRequest() {
    System.out.println("vgfgh");
    MapSqlParameterSource namedParameters = new MapSqlParameterSource();

    String query =  "select pc.name, e.*, v.* " +
                    "FROM event as e " +
                    "INNER JOIN project as pc ON e.project_id = pc.project_id " +
                    "INNER JOIN volunteer as v ON v.volunteer_id = e.volunteer_id " +
                    "WHERE pc.project_id = '2' && e.status = '0'";
    List<EventDetail> eventrequests = jdbc.query(query,namedParameters,new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
    System.out.println("vgfgh"+eventrequests.get(0).getName());
    return eventrequests;
}

    public int updateCoordinatedEventStatus(long eventId){
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE event " +
                "SET status = 1 WHERE event_id = :eventId;";

        namedParameters.addValue("eventId", eventId);


        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }

    public int updateCoordinatedEventStatusReject(long eventId){
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE event " +
                "SET status = 2 WHERE event_id = :eventId;";

        namedParameters.addValue("eventId", eventId);


        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }

    public long editEvent(ProjectDetail projectDetail) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE project " +
                "SET name = :name, description = :description, event_per_year= :event_per_year, coordinator_id= :coordinator_id WHERE project_id = :id;";

        namedParameters.addValue("name", projectDetail.getName());
        namedParameters.addValue("description", projectDetail.getDescription());
        namedParameters.addValue("coordinator_id", projectDetail.getCoordinatorId());
        namedParameters.addValue("event_per_year", projectDetail.getEventPerYear());
        namedParameters.addValue("id", projectDetail.getProjectId());

        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }

//     public List<EventDetail> getJoinRequest() {
//         System.out.println("vgfgh");
//         MapSqlParameterSource namedParameters = new MapSqlParameterSource();

//         String query =  "select pc.name, e.*, v.* " +
//                 "FROM event as e " +
//                 "INNER JOIN project as pc ON e.project_id = pc.project_id " +
//                 "INNER JOIN volunteer as v ON v.volunteer_id = e.volunteer_id " +
//                 "WHERE pc.project_id = '2' && e.status = '0'";
//         List<EventDetail> eventrequests = jdbc.query(query,namedParameters,new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
//         System.out.println("vgfgh"+eventrequests.get(0).getName());
//         return eventrequests;
//     }

    public EventProgress getProgress(long id) {

        String query = "select * from event_progress where event_id=?";
        EventProgress eventProgress = (EventProgress) jdbcTemplate.queryForObject(query, new Object[]{id}, new BeanPropertyRowMapper(EventProgress.class));
        return eventProgress;
    }

    public long makeGuestRequest(GuestUserRequest guestUserRequest) {
        System.out.println(guestUserRequest.getFirstName());
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
//to event table
        String query1 = "INSERT INTO event " +
                "( project_id,participated_volunteers_Count,place,start_date) " +
                "values (:projectId,:noOfVolunteers , :place,:startDate)";
//to guest data table
        String query2 = "INSERT INTO guest_user_data " +
                "(event_id,volunteer_id,status) " +
                "values (:event_id, :volunteer_id,0,:place)";

//        user_id	address	district	email	first_name	last_name	nic	other	phone_number	profession

//        event_id end_date no_of_volunteers place start_date status project_id volunteer_id name coordinate event_coordinator_id description participated_volunteers_count user_id

        namedParameters.addValue("firstName", guestUserRequest.getFirstName());
        namedParameters.addValue("lastName", guestUserRequest.getLastName());
        namedParameters.addValue("email", guestUserRequest.getEmail());
        namedParameters.addValue("phoneNumber", guestUserRequest.getPhoneNumber());
        namedParameters.addValue("address", guestUserRequest.getAddress());
        namedParameters.addValue("district", guestUserRequest.getDistrict());
        namedParameters.addValue("profession", guestUserRequest.getProfession());
        namedParameters.addValue("nic", guestUserRequest.getNic());
        namedParameters.addValue("noOfVolunteers", guestUserRequest.getNoOfVolunteers());
        namedParameters.addValue("projectId", guestUserRequest.getProjectId());
        namedParameters.addValue("startDate", guestUserRequest.getStartDate());
        namedParameters.addValue("place", guestUserRequest.getPlace());


        int rowsAffected1 = jdbc.update(query1, namedParameters);
//        int rowsAffected2 =jdbc.update(query2 , namedParameters);
//        if(rowsAffected1+rowsAffected2 == 2){
//            return rowsAffected1;
//        }else{
//            return 0;
//        }
        return 1;

    }


//    public int cancelCoordinatedEvent(EventDetail eventDetail) {
//
//        String sql = "SELECT count(*) from participate_event where volunteer_id = ? and event_id=?";
//
//        int count = jdbcTemplate.queryForObject(sql, new Object[] { participateEvent.getVolunteerId(),participateEvent.getEventId() }, Integer.class);
//
//        if(count==0){
//            return 2;
//        }
//        MapSqlParameterSource namedParameters =
//                new MapSqlParameterSource();
//        String delete = "DELETE FROM participate_event WHERE volunteer_id = :volunteer_id  and event_id = :event_id;";
//
//
//
//        namedParameters.addValue("event_id", participateEvent.getEventId());
//        namedParameters.addValue("volunteer_id", participateEvent.getVolunteerId());
//
//        return jdbc.update(delete, namedParameters);
//    }

    public List<EventDetail> getMyNewUpcomingEvents() {
        String query = "SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name," +
                "v.volunteer_id,u.phone_number from event as e " +
                "INNER JOIN project as p ON e.project_id=p.project_id " +
                "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                "INNER JOIN user as u ON u.id=v.id " +
                "INNER JOIN participate_event as pe ON pe.event_id=e.event_id " +
                "where e.start_date> CURDATE() and pe.event_id=e.event_id";

        List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
        return events;
    }

    public List<EventDetail> getUpcomingEventsLimit() {
            String query = "SELECT e.*,p.name as category,concat(v.first_name,\" \",v.last_name) as name," +
                    "v.volunteer_id,u.phone_number from event as e " +
                    "INNER JOIN project as p ON e.project_id=p.project_id " +
                    "INNER JOIN volunteer as v ON v.volunteer_id=e.volunteer_id " +
                    "INNER JOIN user as u ON u.id=v.id " +
                    "INNER JOIN participate_event as pe ON pe.event_id=e.event_id " +
                    "where e.start_date> CURDATE() and pe.event_id=e.event_id LIMIT 3";

            List<EventDetail> events = jdbc.query(query, new BeanPropertyRowMapper<EventDetail>(EventDetail.class));
            return events;

    }
}

