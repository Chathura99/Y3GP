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
    @JoinColumn(name = "volunteer_id")
    Volunteer volunteer;

    public Volunteer getVolunteer() {
        return volunteer;
    }

    @Column(name = "no_of_volunteers")
    private Integer noOfVolunteers;

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

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "event_coordinator_id")
    ProjectCoordinator projectCoordinator;

    public ProjectCoordinator getProjectCoordinator() {
        return projectCoordinator;
    }

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
