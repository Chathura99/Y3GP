package com.ucsc.vwsbackend.entities;

import javax.persistence.*;
import java.util.Date;

@Table(name = "handle_project")
@Entity
public class HandleProject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "coordinator_id")
    ProjectCoordinator projectCoordinator;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "project_id")
    Project project;

    public long getId() {
        return id;
    }

    public ProjectCoordinator getProjectCoordinator() {
        return projectCoordinator;
    }

    public Project getProject() {
        return project;
    }

    public Date getAssignedDate() {
        return assignedDate;
    }

    @Column(name = "assigned_date")
    private Date assignedDate;


}
