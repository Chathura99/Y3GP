package com.ucsc.vwsbackend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
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

    public LocalDateTime getAssignedDate() {
        return assignedDate;
    }

    @Column(name = "assigned_date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime assignedDate;


}
