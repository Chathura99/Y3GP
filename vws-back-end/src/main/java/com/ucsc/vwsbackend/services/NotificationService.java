package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.entities.Notification;
import com.ucsc.vwsbackend.repository.notificationDao.NotificationJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NotificationService {

    @Autowired
    NotificationJdbcRepository notificationJdbcRepository;
    public List<Notification> getUserNotification(long id) {
        return notificationJdbcRepository.getUserNotification(id);
    }
}
