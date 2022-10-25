package com.ucsc.vwsbackend.dto;

public class UserSummary {
    private long adminCount;
    private long volunteerCount;
    private long pcCount;

    public long getAdminCount() {
        return adminCount;
    }

    public void setAdminCount(long adminCount) {
        this.adminCount = adminCount;
    }

    public long getVolunteerCount() {
        return volunteerCount;
    }

    public void setVolunteerCount(long volunteerCount) {
        this.volunteerCount = volunteerCount;
    }

    public long getPcCount() {
        return pcCount;
    }

    public void setPcCount(long pcCount) {
        this.pcCount = pcCount;
    }
}
