package com.ucsc.vwsbackend.controllers;

import com.ucsc.vwsbackend.dto.AdminHomeSummary;
import com.ucsc.vwsbackend.dto.AdminProjectSummary;
import com.ucsc.vwsbackend.services.ChartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class ChartController {

    @Autowired
    ChartService chartService;

    @GetMapping("/getAdminHomeSummary")
    public AdminHomeSummary getAdminHomeSummary(){
        return chartService.getAdminHomeSummary();
    }

    @GetMapping("/getProjectSummary")
    public List<AdminProjectSummary> getProjectSummary(){
        return chartService.getProjectSummary();
    }
}
