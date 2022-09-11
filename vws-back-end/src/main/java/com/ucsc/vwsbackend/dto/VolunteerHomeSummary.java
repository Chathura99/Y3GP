package com.ucsc.vwsbackend.dto;

public class VolunteerHomeSummary {

    private long upcomingEventsCount;

    private long completedEventsCount;

    private long newPollsCount;

    public long getUpcomingEventsCount() {
        return upcomingEventsCount;
    }

    public void setUpcomingEventsCount(long upcomingEventsCount) {
        this.upcomingEventsCount = upcomingEventsCount;
    }

    public long getCompletedEventsCount() {
        return completedEventsCount;
    }

    public void setCompletedEventsCount(long completedEventsCount) {
        this.completedEventsCount = completedEventsCount;
    }

    public long getNewPollsCount() {
        return newPollsCount;
    }

    public void setNewPollsCount(long newPollsCount) {
        this.newPollsCount = newPollsCount;
    }

    public long getMyProjectsCount() {
        return myProjectsCount;
    }

    public void setMyProjectsCount(long myProjectsCount) {
        this.myProjectsCount = myProjectsCount;
    }

    private long myProjectsCount;
}
