package com.ucsc.vwsbackend.controllers;

import com.ucsc.vwsbackend.entities.JoinRequest;
import com.ucsc.vwsbackend.services.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class SignUpController {

    @Autowired
    SignUpService signUpService;


    @PostMapping("/signUp")
    public String signUp(@RequestBody JoinRequest joinRequest){
        return signUpService.signUp(joinRequest);
    }

    @GetMapping("/joinRequests")
    public List<JoinRequest> getJoinRequest(){
        return signUpService.getJoinRequest();

    }

    @GetMapping("/getJoinRequestData/{id}")
    public JoinRequest getJoinRequestData(@PathVariable Long id){
        return signUpService.getJoinRequestData(id);
    }
    @PostMapping("/signUpApproved")
    public String signUpApproved(@RequestBody JoinRequest joinRequest)
    {
        String status = signUpService.signUpApproved(joinRequest);
        return status;
    }

    @DeleteMapping("/deleteRequest/{id}")
    public int deleteRequest(@PathVariable Long id)
    {
        int status = signUpService.deleteRequest(id);
        return status;
    }



}
