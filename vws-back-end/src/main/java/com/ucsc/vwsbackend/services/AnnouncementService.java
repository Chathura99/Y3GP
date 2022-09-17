package com.ucsc.vwsbackend.services;


import com.ucsc.vwsbackend.dto.AnnouncementInfo;
import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.entities.Announcement;
import com.ucsc.vwsbackend.repository.announcementDao.AnnouncementRepository;
import com.ucsc.vwsbackend.repository.announcementDao.AnnouncementJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class AnnouncementService{

    @Autowired
    AnnouncementRepository announcementRepository;

    @Autowired
    AnnouncementJdbcRepository announcementJdbcRepository;

    public List<AnnouncementWithAuthor> getAllAnnouncement(String category) {
        List<AnnouncementWithAuthor> announcementWithAuthors;
        if(category.equals("all") || category.equals("guest")){
            announcementWithAuthors = announcementJdbcRepository.getWithAuthor(category);
        }else{
            announcementWithAuthors = announcementJdbcRepository.getAllWithAuthor();
        }
        return announcementWithAuthors;

    }

     public long addAnnouncement(AnnouncementInfo announcementInfo){
        return announcementJdbcRepository.addAnnouncement(announcementInfo);
     }

    public long deleteAnnouncement(@PathVariable Long id) {
        return announcementJdbcRepository.deleteAnnouncement(id);
    }


    public long editAnnouncement(Announcement announcement) {
        return announcementJdbcRepository.editAnnouncement(announcement);
    }

    public AnnouncementWithAuthor getAnnouncementById(long id) {
        return announcementJdbcRepository.getAnnouncementById(id);
    }
}
