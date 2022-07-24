package com.ucsc.vwsbackend.repository.announcementDao;

import com.ucsc.vwsbackend.entities.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
}