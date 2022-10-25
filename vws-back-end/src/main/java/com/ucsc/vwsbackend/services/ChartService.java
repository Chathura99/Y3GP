package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.dto.AdminHomeSummary;
import com.ucsc.vwsbackend.dto.AdminProjectSummary;
import com.ucsc.vwsbackend.dto.UserSummary;
import com.ucsc.vwsbackend.dto.VolunteerHomeSummary;
import com.ucsc.vwsbackend.repository.ChartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChartService {

    @Autowired
    ChartRepository chartRepository;
    public AdminHomeSummary getAdminHomeSummary() {
        return chartRepository.getAdminHomeSummary();
    }

    public List<AdminProjectSummary> getProjectSummary(){
        return  chartRepository.getProjectSummary();
    }


    //Volunteer-Malik

    public VolunteerHomeSummary getVolunteerHomeSummary() {
        return chartRepository.getVolunteerHomeSummary();
    }


    public UserSummary GetUserSummary() {
        return chartRepository.GetUserSummary();
    }
}
