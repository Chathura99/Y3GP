package com.ucsc.vwsbackend.dto;

import java.time.LocalDateTime;

public class GuestUserFeedback {

    private long feedbackId;

    private String feedback;

    public long getFeedbackId() {
        return feedbackId;
    }

    public void setFeedbackId(long feedbackId) {
        this.feedbackId = feedbackId;
    }

    private LocalDateTime date;



    public String getFeedback() {
        return feedback;
    }

    public LocalDateTime getDate() {
        return date;
    }



    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
