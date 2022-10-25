package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.dto.*;
import com.ucsc.vwsbackend.entities.Announcement;
import com.ucsc.vwsbackend.entities.Event;
import com.ucsc.vwsbackend.entities.ProjectCoordinator;
import com.ucsc.vwsbackend.entities.EventProgress;
import com.ucsc.vwsbackend.repository.EventDao.EventJdbcRepository;
import com.ucsc.vwsbackend.repository.ProjectDao.ProjectJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
@Service
public class EventService {

    @Autowired
    EventJdbcRepository eventJdbcRepository;

    @Autowired
    ProjectJdbcRepository projectJdbcRepository;



    public  List<EventDetail> getUpcomingEvents() {
        return eventJdbcRepository.getUpcomingEvents();
    }

    public List<EventDetail> getPreviousEvents() {
//        ToDo : get progress of the event
        return eventJdbcRepository.getPreviousEvents();

    }

    // Volunteer

    public  List<EventDetail> getOngoingEvents() {
        return eventJdbcRepository.getOngoingEvents();
    }

    public  List<EventDetail> getCompletedEvents() {
        return eventJdbcRepository.getCompletedEvents();
    }

    public long addCoordinatedEvents(NewCoordinateEventDetail newCoordinateEventDetail){
        return eventJdbcRepository.addCoordinatedEvents(newCoordinateEventDetail);
    }

    public long editMyCoordinatedEvents(Event event) {
        return eventJdbcRepository.editMyCoordinatedEvents(event);
    }
    public  List<EventDetail> getCoordinatedEvents() {
        return eventJdbcRepository.getCoordinatedEvents();
    }

    public  List<EventDetail> getApprovedCoordinatedEvents() {
        return eventJdbcRepository.getApprovedCoordinatedEvents();
    }


//    public long updateCoordinatedEventStatus(Event event) {
//        return eventJdbcRepository.updateCoordinatedEventStatus(event);
//    }

    public Event getCoordinatedEventById(long id) {
        return eventJdbcRepository.getCoordinatedEventById(id);
    }

    public long participateToEvent(ParticipateEvent participateEvent) {
        return eventJdbcRepository.participateToEvent(participateEvent);
    }

    public  List<ParticipateEvent> joinedEvent() {
        return eventJdbcRepository.joinedEvent();
    }

    public int leaveEvent(ParticipateEvent participateEvent) {
        return eventJdbcRepository.leaveEvent(participateEvent);
    }



//Project Coordinator - Ravindu
    public  List<EventDetail> getJoinRequest() {
    return eventJdbcRepository.getJoinRequest();
    }
    public EventProgress getProgress(long id) {
        return eventJdbcRepository.getProgress(id);
    }

    public long makeGuestRequest(GuestUserRequest guestUserRequest) {
        return eventJdbcRepository.makeGuestRequest(guestUserRequest);
    }
    public  List<EventDetail> getMyNewUpcomingEvents() {
        return eventJdbcRepository.getMyNewUpcomingEvents();
    }


    public long deleteCoordinatedEvents(@PathVariable Long id) {
        return eventJdbcRepository.deleteCoordinatedEvents(id);
    }



    public long updateCoordinatedEventStatus(long id) {
        return eventJdbcRepository.updateCoordinatedEventStatus(id);
    }

    public long updateCoordinatedEventStatusReject(long id) {
        return eventJdbcRepository.updateCoordinatedEventStatusReject(id);
    }

    public long editEvent(ProjectDetail projectDetail) {
//        ToDO: with out edit pc check it
//      get new volunteer data
        VolunteerUpgrade volunteerUpgrade = projectJdbcRepository.getNewCoordinatorData(projectDetail.getCoordinatorId());
//      save to pc
        ProjectCoordinator projectCoordinator = new ProjectCoordinator();
        projectCoordinator.setAddress(volunteerUpgrade.getAddress());
        projectCoordinator.setDistrict(volunteerUpgrade.getDistrict());
        projectCoordinator.setUniversityCollege(volunteerUpgrade.getUniversityCollege());
        projectCoordinator.setFirstName(volunteerUpgrade.getFirstName());
        projectCoordinator.setLastName(volunteerUpgrade.getLastName());

        long newUserid = projectJdbcRepository.getUserIdOfNewVolunteer(projectDetail.getCoordinatorId());
        long oldUserid = projectJdbcRepository.getUserIdOfOldCoordinator(projectDetail.getProjectId());
//        insert new project coordinator
        projectJdbcRepository.saveData(projectCoordinator, newUserid);
//        remove from volunteer
        projectJdbcRepository.removeFromVolunteer(projectDetail.getCoordinatorId());
//        upgrade new user role
        projectJdbcRepository.upgradeNewUserRole(newUserid);
//        downgrade current user role
        projectJdbcRepository.downgradeNewUserRole(oldUserid);
//        set coordinator_or_not to 0
        projectJdbcRepository.setCoordinatorOrNotToZero(oldUserid);

        projectDetail.setCoordinatorId(projectJdbcRepository.getNewCoordinatorId(newUserid));
        long success =projectJdbcRepository.editProject(projectDetail);

//        remove current project coordinator
        projectJdbcRepository.removeCurrentProjectCoordinator(oldUserid);
        return success;
    }





}

