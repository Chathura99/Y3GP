package com.ucsc.vwsbackend.controllers;

import com.ucsc.vwsbackend.entities.Announcement;
import com.ucsc.vwsbackend.repository.announcement.AnnouncementRepository;
import com.ucsc.vwsbackend.services.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class AnnouncementController {

    @Autowired
    AnnouncementService announcementService;

    @Autowired
    AnnouncementRepository announcementRepository;

    @GetMapping("/getAllAnnouncement")
    public List<Announcement> getAllAnnouncement() {
        return announcementService.getAllAnnouncement();
    }

    @GetMapping("/getAllAnnouncement/{category}")
    public List<Announcement> getByCategory(@PathVariable(value = "category") String category){
        return announcementService.getAnnouncementByCategory(category);
    }

    @PostMapping("/addAnnouncement")
    public long addAnnouncement(@RequestBody Announcement announcement){
//        {
//            "title": "New Project Proposal 1",
//                "content": "content",
//                "category": "all",
//                "date": "2022-07-07T06:40:00.000+00:00",
//                "projectCoordinator":{
//            "coordinatorId":1
//        }
        return announcementService.addAnnouncement(announcement);
    }

    @DeleteMapping("/deleteAnnouncement/{id}")
    public long deleteAnnouncement(@PathVariable Long id) {
        return announcementService.deleteAnnouncement(id);
    }

    @PutMapping("/editAnnouncement")
//    {
//        "annId": 6,
//            "title": "Update Announcement 1",
//            "content": "content",
//            "category": "guest",
//            "date": "2022-07-09T06:40:00.000+00:00"
//    }
    public long editAnnouncement(@RequestBody Announcement announcement){
        return announcementService.editAnnouncement(announcement);
    }
}
