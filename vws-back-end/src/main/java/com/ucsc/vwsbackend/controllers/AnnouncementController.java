package com.ucsc.vwsbackend.controllers;

import com.ucsc.vwsbackend.dto.AnnouncementInfo;
import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.entities.Announcement;
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

    @GetMapping("/getAllAnnouncement/{category}")
    public List<AnnouncementWithAuthor> getAllAnnouncement(@PathVariable(value = "category") String category) {
        return announcementService.getAllAnnouncement(category);
    }
    @GetMapping("/getAnnouncementById/{id}")
    public AnnouncementWithAuthor getAnnouncementById(@PathVariable(value = "id") long id) {
        return announcementService.getAnnouncementById(id);
    }



    @PostMapping("/addAnnouncement")
    public long addAnnouncement(@RequestBody AnnouncementInfo announcementInfo){
        return announcementService.addAnnouncement(announcementInfo);
    }

    @DeleteMapping("/deleteAnnouncement/{id}")
    public long deleteAnnouncement(@PathVariable Long id) {
        return announcementService.deleteAnnouncement(id);
    }

    @PutMapping("/editAnnouncement")
//    {
//            "annId": 6,
//            "title": "Update Announcement 1",
//            "content": "content",
//            "category": "guest",
//            "date": "2022-07-09T06:40:00.000+00:00"
//    }
    public long editAnnouncement(@RequestBody Announcement announcement){
        return announcementService.editAnnouncement(announcement);
    }
}
