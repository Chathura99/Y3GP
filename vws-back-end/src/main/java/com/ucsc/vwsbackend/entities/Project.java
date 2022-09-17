package com.ucsc.vwsbackend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Table(name = "project")
@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private Long projectId;

    @Column(name = "name")
    private String name;

    @Column(name = "start_date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date startDate;

    @Column(name = "proposed_date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date proposedDate;

    @Column(name = "description")
    private String description;

    @Column(name="status")
    private String status;

    @Column(name = "event_per_year")
    private Long eventPerYear;

    public Long getProjectId() {
        return projectId;
    }

    public String getName() {
        return name;
    }

    public Date getStartDate() {
        return startDate;
    }

    public String getDescription() {
        return description;
    }

    public Volunteer getVolunteer() {
        return volunteer;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
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

    public void setVolunteer(Volunteer volunteer) {
        this.volunteer = volunteer;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public ProjectCoordinator getProjectCoordinator() {
        return projectCoordinator;
    }

    public void setProjectCoordinator(ProjectCoordinator projectCoordinator) {
        this.projectCoordinator = projectCoordinator;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "volunteer_id")
    Volunteer volunteer;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "president_id")
    Admin admin;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "coordinator_id")
    ProjectCoordinator projectCoordinator;
}
