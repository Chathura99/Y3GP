package com.ucsc.vwsbackend.dto;

public class NewCoordinateEventDetail {

    private long volunteerId;

    private String place;

    private String startDate;

    public long getVolunteerId() {
        return volunteerId;
    }

    public void setVolunteerId(long volunteerId) {
        this.volunteerId = volunteerId;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }



    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

    private String endDate;

    private String noOfVolunteers;

    public String getNoOfVolunteers() {
        return noOfVolunteers;
    }

    public void setNoOfVolunteers(String noOfVolunteers) {
        this.noOfVolunteers = noOfVolunteers;
    }

    private long projectId;
}
