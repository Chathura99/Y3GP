package com.ucsc.vwsbackend.dto;

import java.util.Date;

public class AnnouncementWithAuthor {
    private long annId;

    private long userId;

    private String category;

    private String content;

    private String title;

    private String first_name;

    private String last_name;

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

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
