package com.ucsc.vwsbackend.controllers;


import com.ucsc.vwsbackend.dto.*;
import com.ucsc.vwsbackend.entities.Event;
import com.ucsc.vwsbackend.entities.EventProgress;
import com.ucsc.vwsbackend.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {
    @Autowired
    EventService eventService;

    @GetMapping("/getUpcomingEvents")
    public List<EventDetail> getUpcomingEvents() {
        return eventService.getUpcomingEvents();
    }

    @GetMapping("/getUpcomingEventsLimit")
    public List<EventDetail> getUpcomingEventsLimit() {
        return eventService.getUpcomingEventsLimit();
    }

    @GetMapping("/getPreviousEvents")
    public List<EventDetail> getPreviousEvents() {
        return eventService.getPreviousEvents();
    }

    @GetMapping("/getProgress/{id}")
    public EventProgress getProgress(@PathVariable(value = "id") long id) {
        return eventService.getProgress(id);
    }



    //Volunteer

    @GetMapping("/getOngoingEvents")
    public List<EventDetail> getOngoingEvents() {
        return eventService.getOngoingEvents();
    }

    @GetMapping("/getCompletedEvents")
    public List<EventDetail> getCompletedEvents() {
        return eventService.getCompletedEvents();
    }

    @GetMapping("/getCoordinatedEventById/{id}")
    public Event getCoordinatedEventById(@PathVariable(value = "id") long id) {
        return eventService.getCoordinatedEventById(id);
    }
    @PostMapping("/addCoordinatedEvents")
    public long addCoordinatedEvents(@RequestBody NewCoordinateEventDetail newCoordinateEventDetail){
        return eventService.addCoordinatedEvents(newCoordinateEventDetail);
    }

    @GetMapping("/getCoordinatedEvents")
    public List<EventDetail> getCoordinatedEvents() {
        return eventService.getCoordinatedEvents();
    }

    @GetMapping("/getApprovedCoordinatedEvents")
    public List<EventDetail> getApprovedCoordinatedEvents() {
        return eventService.getApprovedCoordinatedEvents();
    }

//      @PutMapping("/updateCoordinatedEventStatus")
//      public long updateCoordinatedEventStatus(@RequestBody Event event){
//        return eventService.updateCoordinatedEventStatus(event);
//    }


    @PutMapping("/editMyCoordinatedEvents")
    public long editMyCoordinatedEvents(@RequestBody Event event){
        return eventService.editMyCoordinatedEvents(event);
    }

    // @PutMapping("/updateCoordinatedEventStatus")
    // public long updateCoordinatedEventStatus(@RequestBody Event event){
    //     return eventService.updateCoordinatedEventStatus(event);
    // }

    @PostMapping("/participateToEvent")
    public long participateToEvent(@RequestBody ParticipateEvent participateEvent) {
        return eventService.participateToEvent(participateEvent);
    }

    @DeleteMapping("/leaveEvent")
    public long leaveEvent(@RequestBody ParticipateEvent participateEvent) {
        return eventService.leaveEvent(participateEvent);
    }

//    @DeleteMapping("/leaveEvent/{volunteer_id}")
////    public int leaveEvent(@PathVariable Long volunteer_id)
////    {
////        int status = eventService.leaveEvent(volunteer_id);
////        return status;
////    }

    @GetMapping("/joinedEvent")
    public List<ParticipateEvent> joinedEvent() {
        return eventService.joinedEvent();
    }

//    @DeleteMapping("/leaveEvent/{volunteer_id}")
//    public int leaveEvent(@PathVariable Long volunteer_id)
//    {
//        int status = eventService.leaveEvent(volunteer_id);
//        return status;
//    }


//Project Coordinator - Ravindu

    @GetMapping("/getJoinRequest")
    public List<EventDetail> getJoinRequest() {
        System.out.println("vgfgh");
        return eventService.getJoinRequest();}

    @PutMapping("/updateCoordinatedEventStatus/{id}")
    public long updateCoordinatedEventStatus(@PathVariable(value = "id") long id){
        return eventService.updateCoordinatedEventStatus(id);
    }

    @PutMapping("/updateCoordinatedEventStatusReject/{id}")
    public long updateCoordinatedEventStatusReject(@PathVariable(value = "id") long id){
        return eventService.updateCoordinatedEventStatusReject(id);
    }

    @PutMapping("/editEvent")
    public long editEvent(@RequestBody ProjectDetail projectDetail) {
        return eventService.editEvent(projectDetail);
    }

    @PostMapping("/makeGuestRequest")
    public long makeGuestRequest(@RequestBody GuestUserRequest guestUserRequest) {
        return eventService.makeGuestRequest(guestUserRequest);
    }
    @GetMapping("/getMyNewUpcomingEvents")
    public List<EventDetail> getMyNewUpcomingEvents() {
        return eventService.getMyNewUpcomingEvents();
    }

    @DeleteMapping("/deleteCoordinatedEvents/{id}")
    public long deleteCoordinatedEvents(@PathVariable Long id) {
        return eventService.deleteCoordinatedEvents(id);
    }
}
