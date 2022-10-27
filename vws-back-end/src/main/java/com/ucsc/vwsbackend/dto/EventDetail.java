package com.ucsc.vwsbackend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ucsc.vwsbackend.entities.ParticipateEvent;
import com.ucsc.vwsbackend.entities.Project;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

public class EventDetail {
    private Long eventId;

    private Integer noOfVolunteers;

    private String first_Name;

    private String last_Name;
    public Integer getParticipatedVolunteersCount() {
        return participatedVolunteersCount;
    }

    public void setParticipatedVolunteersCount(Integer participatedVolunteersCount) {
        this.participatedVolunteersCount = participatedVolunteersCount;
    }

    private Integer participatedVolunteersCount;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date startDate;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date endDate;

    private Integer status;

    private String place;

    private String description;

    private Integer actualDays;

    public Integer getActualDays() {
        return actualDays;
    }

    public void setActualDays(Integer actualDays) {
        this.actualDays = actualDays;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    private String category;

    private String name;

    private String phoneNumber;

    private String criteria1;

    private String criteria2;

    private String criteria3;

    public String getCriteria1() {
        return criteria1;
    }

    public void setCriteria1(String criteria1) {
        this.criteria1 = criteria1;
    }

    public String getCriteria2() {
        return criteria2;
    }

    public void setCriteria2(String criteria2) {
        this.criteria2 = criteria2;
    }

    public String getCriteria3() {
        return criteria3;
    }

    public void setCriteria3(String criteria3) {
        this.criteria3 = criteria3;
    }

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public Integer getNoOfVolunteers() {
        return noOfVolunteers;
    }

    public void setNoOfVolunteers(Integer noOfVolunteers) {
        this.noOfVolunteers = noOfVolunteers;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getFirst_Name() {
        return first_Name;
    }

    public void setFirst_Name(String first_Name) {
        this.first_Name = first_Name;
    }

    public String getLast_Name() {
        return last_Name;
    }

    public void setLast_Name(String last_Name) {
        this.last_Name = last_Name;
    }


    private String fullname;

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUniversity_collage() {
        return university_collage;
    }

    public void setUniversity_collage(String university_collage) {
        this.university_collage = university_collage;
    }

    public Date getRequested_date() {
        return requested_date;
    }

    public void setRequested_date(Date requested_date) {
        this.requested_date = requested_date;
    }

    private String address;

    private String phone_number;

    private String email;

    private String university_collage;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date requested_date;

}
