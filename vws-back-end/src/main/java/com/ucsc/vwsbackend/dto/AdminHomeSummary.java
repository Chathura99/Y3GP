package com.ucsc.vwsbackend.dto;

public class AdminHomeSummary {
    private long eventCount;
    private long volunteerCount;
    private long projectCount;
    private long newRequestCount;

    private  long currentProjectCount;

    public long getCurrentProjectCount() {
        return currentProjectCount;
    }

    public void setCurrentProjectCount(long currentProjectCount) {
        this.currentProjectCount = currentProjectCount;
    }

    public long getEventCount() {
        return eventCount;
    }

    public void setEventCount(long eventCount) {
        this.eventCount = eventCount;
    }

    public long getVolunteerCount() {
        return volunteerCount;
    }

    public void setVolunteerCount(long volunteerCount) {
        this.volunteerCount = volunteerCount;
    }

    public long getProjectCount() {
        return projectCount;
    }

    public void setProjectCount(long projectCount) {
        this.projectCount = projectCount;
    }

    public long getNewRequestCount() {
        return newRequestCount;
    }

    public void setNewRequestCount(long newRequestCount) {
        this.newRequestCount = newRequestCount;
    }
}
