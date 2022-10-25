package com.ucsc.vwsbackend.controllers;


import com.ucsc.vwsbackend.dto.*;
import com.ucsc.vwsbackend.services.ForumService;
import com.ucsc.vwsbackend.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getViewForumInfo")
    public List<ForumWithDiscussionTopic> getViewForumInfo() {
        return forumService.getViewForumInfo();
    }

    @GetMapping("/getReplyToForum")
    public List<DiscssionTopicWithReply> getReplyToForum() {
        return forumService.getReplyToForum();
    }

    @PostMapping("/addNewForum")
    public long addNewForum(@RequestBody ForumInfo forumInfo){
        return forumService.addNewForum(forumInfo);
    }

}
