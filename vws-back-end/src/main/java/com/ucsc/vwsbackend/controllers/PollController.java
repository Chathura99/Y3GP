package com.ucsc.vwsbackend.controllers;

import com.ucsc.vwsbackend.dto.ForumInfo;
import com.ucsc.vwsbackend.dto.PollInfo;
import com.ucsc.vwsbackend.services.ForumService;
import com.ucsc.vwsbackend.services.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class PollController {
    @Autowired
    PollService pollService;

    @GetMapping("/getPollInfo")
    public List<PollInfo> getPollInfo() {
        return pollService.getPollInfo();
    }

    @PostMapping("/addNewPoll")
    public long addNewPoll(@RequestBody PollInfo pollInfo){
        return pollService.addNewPoll(pollInfo);
    }
}
