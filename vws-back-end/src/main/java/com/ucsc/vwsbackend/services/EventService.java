package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.dto.EventDetail;
import com.ucsc.vwsbackend.dto.NewProjectDetail;
import com.ucsc.vwsbackend.dto.ProjectDetail;
import com.ucsc.vwsbackend.entities.Event;
import com.ucsc.vwsbackend.entities.ParticipateEvent;
import com.ucsc.vwsbackend.repository.EventDao.EventJdbcRepository;
import com.ucsc.vwsbackend.repository.participateEventDao.ParticipateEventJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EventService {

    @Autowired
    EventJdbcRepository eventJdbcRepository;

    @Autowired
    ParticipateEventJdbcRepository participateEventJdbcRepository;

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

    public long addCoordinatedEvents(Event event){
        return eventJdbcRepository.addCoordinatedEvents(event);
    }

    public  List<EventDetail> getCoordinatedEvents() {
        return eventJdbcRepository.getCoordinatedEvents();
    }

    public  List<EventDetail> getApprovedCoordinatedEvents() {
        return eventJdbcRepository.getApprovedCoordinatedEvents();
    }


    public long updateCoordinatedEventStatus(Event event) {
        return eventJdbcRepository.updateCoordinatedEventStatus(event);
    }

    public Event getCoordinatedEventById(long id) {
        return eventJdbcRepository.getCoordinatedEventById(id);
    }

    public long participateToEvent(ParticipateEvent participateEvent) {
        return participateEventJdbcRepository.participateToEvent(participateEvent);
    }

}
