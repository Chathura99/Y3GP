package com.ucsc.vwsbackend.controllers;

import com.ucsc.vwsbackend.entities.Notification;
import com.ucsc.vwsbackend.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class NotificationController {
    @Autowired
    NotificationService notificationService;

    @GetMapping("/getUserNotification/{id}")
    public List<Notification> getUserNotification(@PathVariable(value = "id") long id){
        return notificationService.getUserNotification(id);
    }
}
