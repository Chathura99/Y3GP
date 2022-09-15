package com.ucsc.vwsbackend.controllers;

import com.ucsc.vwsbackend.dto.GuestUserFeedback;
import com.ucsc.vwsbackend.services.GuestUserFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

}
