package com.ucsc.vwsbackend.controllers;


import com.ucsc.vwsbackend.dto.ForumInfo;
import com.ucsc.vwsbackend.dto.ProjectDetail;
import com.ucsc.vwsbackend.services.ForumService;
import com.ucsc.vwsbackend.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class ForumController {
    @Autowired
    ForumService forumService;

    @GetMapping("/getForumInfo")
    public List<ForumInfo> getForumInfo() {
        return forumService.getForumInfo();
    }
}
