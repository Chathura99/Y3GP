package com.ucsc.vwsbackend.controllers;

import com.ucsc.vwsbackend.dto.AnnouncementInfo;
import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.entities.Announcement;
import com.ucsc.vwsbackend.entities.Event;
import com.ucsc.vwsbackend.services.AnnouncementService;
import com.ucsc.vwsbackend.services.CoordinateEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("/api/v1")
//@CrossOrigin(origins = "http://localhost:3000")
public class CoordinateEventController {

    @Autowired
    CoordinateEventService coordinateEventService;

//    @GetMapping("/getAllAnnouncement/{category}")
//    public List<AnnouncementWithAuthor> getAllAnnouncement(@PathVariable(value = "category") String category) {
//        return announcementService.getAllAnnouncement(category);
//    }


    @PostMapping("/addCoordinatedEvents")
    public long addCoordinatedEvents(@RequestBody Event event){
        return CoordinateEventService.addCoordinatedEvents(event);
    }

//    @DeleteMapping("/deleteAnnouncement/{id}")
//    public long deleteAnnouncement(@PathVariable Long id) {
//        return announcementService.deleteAnnouncement(id);
//    }

    @PutMapping("/editAnnouncement")
//    {
//            "annId": 6,
//            "title": "Update Announcement 1",
//            "content": "content",
//            "category": "guest",
//            "date": "2022-07-09T06:40:00.000+00:00"
//    }
    public long updateCoordinatedEventStatus(@RequestBody Event event){
        return CoordinateEventService.updateCoordinatedEventStatus(event);
    }
}
