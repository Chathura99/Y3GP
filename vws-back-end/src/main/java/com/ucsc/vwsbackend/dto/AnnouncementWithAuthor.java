package com.ucsc.vwsbackend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class AnnouncementWithAuthor {
    private long annId;

    private long userId;

    private String category;

    private String content;

    private String title;

    private String firstName;

    private String lastName;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date date;

    private String role;


    public long getAnnId() {
        return annId;
    }

    public void setAnnId(long annId) {
        this.annId = annId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserID(long userId) {
        this.userId = userId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
