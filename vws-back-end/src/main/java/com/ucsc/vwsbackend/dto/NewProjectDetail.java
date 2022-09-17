package com.ucsc.vwsbackend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;


public class NewProjectDetail {

    private String name;

//    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private String startDate;


    private String description;

    private String status;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

//    public Date getStartDate() {
//        return startDate;
//    }
//
//    public void setStartDate(Date startDate) {
//        this.startDate = startDate;
//    }


    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getEventPerYear() {
        return eventPerYear;
    }

    public void setEventPerYear(String eventPerYear) {
        this.eventPerYear = eventPerYear;
    }

    public long getVolunteerId() {
        return volunteerId;
    }

    public void setVolunteerId(long volunteerId) {
        this.volunteerId = volunteerId;
    }

    private String eventPerYear;


    private long volunteerId;

}
