package com.ucsc.vwsbackend.controllers;


import com.ucsc.vwsbackend.dto.EventDetail;
import com.ucsc.vwsbackend.entities.Event;
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

    @GetMapping("/getPreviousEvents")
    public List<EventDetail> getPreviousEvents() {
        return eventService.getPreviousEvents();
    }



    //Volunteer

    @GetMapping("/getCoordinatedEventById/{id}")
    public Event getCoordinatedEventById(@PathVariable(value = "id") long id) {
        return eventService.getCoordinatedEventById(id);
    }
    @PostMapping("/addCoordinatedEvents")
    public long addCoordinatedEvents(@RequestBody Event event){
        return eventService.addCoordinatedEvents(event);
    }

    @GetMapping("/getCoordinatedEvents")
    public List<EventDetail> getCoordinatedEvents() {
        return eventService.getCoordinatedEvents();
    }

    @GetMapping("/getApprovedCoordinatedEvents")
    public List<EventDetail> getApprovedCoordinatedEvents() {
        return eventService.getApprovedCoordinatedEvents();
    }
    @PutMapping("/updateCoordinatedEventStatus")
    public long updateCoordinatedEventStatus(@RequestBody Event event){
        return eventService.updateCoordinatedEventStatus(event);
    }
}
