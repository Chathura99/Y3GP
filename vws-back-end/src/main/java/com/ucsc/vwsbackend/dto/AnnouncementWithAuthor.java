package com.ucsc.vwsbackend.dto;

public class AnnouncementWithAuthor {
    private long ann_id;

    long coordinator_id;

    private String category;

    private String content;

    private String title;

    private String first_name;

    private String last_name;


    public long getAnn_id() {
        return ann_id;
    }

    public void setAnn_id(long ann_id) {
        this.ann_id = ann_id;
    }

    public long getCoordinator_id() {
        return coordinator_id;
    }

    public void setCoordinator_id(long coordinator_id) {
        this.coordinator_id = coordinator_id;
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
}
