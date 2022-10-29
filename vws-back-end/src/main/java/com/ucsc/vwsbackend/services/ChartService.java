package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.dto.*;
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


    public List<UserSummary>  GetUserSummary() {
        return chartRepository.GetUserSummary();
    }

    public List<VolunteerProjectSummary> getVolunteerProjectSummary(){
        return  chartRepository.getVolunteerProjectSummary();
    }

    public List<VolunteerProjectSummary> getVolunteerCompletedEventSummary(){
        return  chartRepository.getVolunteerCompletedEventSummary();
    }

    public List<VolunteerProjectSummary> getVolunteerCoordinatedEventSummary(){
        return  chartRepository.getVolunteerCoordinatedEventSummary();
    }
}
