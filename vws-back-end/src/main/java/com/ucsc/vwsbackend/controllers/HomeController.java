package com.ucsc.vwsbackend.controllers;

import com.ucsc.vwsbackend.dto.ConsiderFeedbackNotification;
import com.ucsc.vwsbackend.dto.GuestUserFeedback;
import com.ucsc.vwsbackend.entities.Notification;
import com.ucsc.vwsbackend.services.GuestUserFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController  {
    @GetMapping("/vws-home")
    public String home(){
        return "Welcome to VWS!";
    }

    @Autowired
    GuestUserFeedbackService guestUserFeedbackService;

    @PostMapping("/addFeedback")
    public long addFeedback(@RequestBody GuestUserFeedback guestUserFeedback){
        return guestUserFeedbackService.addFeedback(guestUserFeedback);
    }



//    Chathura
    @GetMapping("/getFeedback")
    public List<GuestUserFeedback> getFeedback(){
        return guestUserFeedbackService.getFeedback();
    }

    @PutMapping("/consider/{id}")
    public long considerFeedback(@PathVariable(value = "id") long id,@RequestBody ConsiderFeedbackNotification notification){
        return guestUserFeedbackService.considerFeedback(id,notification);
    }
}
