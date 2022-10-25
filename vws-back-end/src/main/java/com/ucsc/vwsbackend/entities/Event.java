package com.ucsc.vwsbackend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Set;

@Table(name = "event")
@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Long eventId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "event_coordinator_id")
    Volunteer volunteer;

    public Volunteer getVolunteer() {
        return volunteer;
    }


    //Guset User

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    GuestUserData guest_user_data;

    public GuestUserData getGuestUserData() {
        return guest_user_data;
    }


    @Column(name = "no_of_volunteers")
    private Integer noOfVolunteers;

    public Integer getParticipatedVolunteersCount() {
        return participatedVolunteersCount;
    }

    public void setParticipatedVolunteersCount(Integer participatedVolunteersCount) {
        this.participatedVolunteersCount = participatedVolunteersCount;
    }

    @Column(name = "participated_volunteers_Count")
    private Integer participatedVolunteersCount;

    @Column(name = "actual_days")
    private Integer actualDays;

    public Integer getActualDays() {
        return actualDays;
    }

    public void setActualDays(Integer actualDays) {
        this.actualDays = actualDays;
    }

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

    @Column(name = "start_date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date startDate;

    @Column(name = "end_date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date endDate;

    @Column(name = "status")
    private Integer status;

    @Column(name = "place")
    private String place;

    @Column(name = "description")
    private String description;

    @Column(name = "criteria1")
    private String criteria1;

    @Column(name = "criteria2")
    private String criteria2;

    @Column(name = "criteria3")
    private String criteria3;



    public void setVolunteer(Volunteer volunteer) {
        this.volunteer = volunteer;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCoordinate(String coordinate) {
        this.coordinate = coordinate;
    }

    public String getCoordinate() {
        return coordinate;
    }

    @Column(name = "coordinate")
    private String coordinate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "project_id")
    Project project;

    @OneToMany(mappedBy = "event")
    Set<ParticipateEvent> participations;



    public Long getEventId() {
        return eventId;
    }



    public Integer getNoOfVolunteers() {
        return noOfVolunteers;
    }


    public Integer getStatus() {
        return status;
    }

    public String getPlace() {
        return place;
    }

    public Project getProject() {
        return project;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
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

    public void setStatus(Integer status) {
        this.status = status;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Set<ParticipateEvent> getParticipations() {
        return participations;
    }

    public void setParticipations(Set<ParticipateEvent> participations) {
        this.participations = participations;
    }

}
