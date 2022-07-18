package com.ucsc.vwsbackend.services;


import com.ucsc.vwsbackend.entities.Announcement;
import com.ucsc.vwsbackend.repository.announcementDao.AnnouncementRepository;
import com.ucsc.vwsbackend.repository.announcementDao.AnnouncementJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class AnnouncementService {

    @Autowired
    AnnouncementRepository announcementRepository;

    @Autowired
    AnnouncementJdbcRepository announcementJdbcRepository;

    public List<Announcement> getAllAnnouncement() {
        List<Announcement> announcement = announcementRepository.findAll();
//          List<Announcement> announcement = announcementJdbcRepository.getAllWithAuthor();
        return announcement;
    }
//  get announcement by view category
    public List<Announcement> getAnnouncementByCategory(String category){
        List<Announcement> announcement = announcementJdbcRepository.getByCategory(category);
        return announcement;
    }
     public long addAnnouncement(Announcement announcement){
        return announcementJdbcRepository.addAnnouncement(announcement);
     }

    public long deleteAnnouncement(@PathVariable Long id) {
        return announcementJdbcRepository.deleteAnnouncement(id);
    }


    public long editAnnouncement(Announcement announcement) {
        return announcementJdbcRepository.editAnnouncement(announcement);
    }
}
