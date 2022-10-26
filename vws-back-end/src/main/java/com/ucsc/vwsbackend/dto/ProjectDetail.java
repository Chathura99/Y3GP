package com.ucsc.vwsbackend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;


public class ProjectDetail {
    private Long projectId;

    private String name;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date startDate;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date proposedDate;

    private String description;

    private String status;

    private String phoneNumber;

    private long coordinatorId;

    private String lastName;

    private String firstName;

    private Long eventPerYear;

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public Long getEventPerYear() {
        return eventPerYear;
    }

    public void setEventPerYear(Long eventPerYear) {
        this.eventPerYear = eventPerYear;
    }

    public Date getProposedDate() {
        return proposedDate;
    }

    public void setProposedDate(Date proposedDate) {
        this.proposedDate = proposedDate;
    }

    public long getCoordinatorId() {
        return coordinatorId;
    }

    public void setCoordinatorId(long coordinatorId) {
        this.coordinatorId = coordinatorId;
    }

    //    Ravindu - PC Homepage
    private String fullName;

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

}
