package com.ucsc.vwsbackend.entities;

import javax.persistence.*;
import java.util.Date;

@Table(name = "announcement")
@Entity
public class Announcement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ann_id")
    private long annId;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;


    @Column(name = "category")
    private String category;

    @Column(name = "date")
    private Date date;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "coordinator_id")
    ProjectCoordinator projectCoordinator;


    public long getAnnId() {
        return annId;
    }

    public void setAnnId(long annId) {
        this.annId = annId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public ProjectCoordinator getProjectCoordinator() {
        return projectCoordinator;
    }

    public void setProjectCoordinator(ProjectCoordinator projectCoordinator) {
        this.projectCoordinator = projectCoordinator;
    }


}
