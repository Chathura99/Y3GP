package com.ucsc.vwsbackend.controllers;

import com.ucsc.vwsbackend.dto.AnnouncementInfo;
import com.ucsc.vwsbackend.dto.AnnouncementWithAuthor;
import com.ucsc.vwsbackend.dto.NewProjectDetail;
import com.ucsc.vwsbackend.dto.ProjectDetail;
import com.ucsc.vwsbackend.entities.Project;
import com.ucsc.vwsbackend.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {


    @Autowired
    ProjectService projectService;

    @GetMapping("/getOngoingProjects")
    public List<ProjectDetail> getOngoingProjects() {
        return projectService.getOngoingProjects();
    }

    @GetMapping("/getProposedProjects")
    public List<ProjectDetail> getProposedProjects() {
        return projectService.getProposedProjects();
    }

    @PostMapping("/addProposedProjects")
    public long addProposedProjects(@RequestBody NewProjectDetail newProjectDetail){
        return projectService.addProposedProjects(newProjectDetail);
    }
}
