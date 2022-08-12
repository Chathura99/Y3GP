package com.ucsc.vwsbackend.entities;

import javax.persistence.*;
import java.util.Date;

@Table(name = "event")
@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Long eventId;

    @Column(name = "name")
    private String name;

    @Column(name = "no_of_volunteers")
    private Integer noOfVolunteers;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    public Long getEventId() {
        return eventId;
    }

    public String getName() {
        return name;
    }

    public Integer getNoOfVolunteers() {
        return noOfVolunteers;
    }

    public Date getStartDate() {
        return startDate;
    }

    public Date getEndDate() {
        return endDate;
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

    @Column(name = "status")
    private Integer status;

    @Column(name = "place")
    private String place;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "project_id")
    Project project;





}
