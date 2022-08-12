package com.ucsc.vwsbackend.entities;

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
    private Date startDate;

    @Column(name = "description")
    private String description;

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

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "volunteer_id")
    Volunteer volunteer;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "president_id")
    Admin admin;
}
