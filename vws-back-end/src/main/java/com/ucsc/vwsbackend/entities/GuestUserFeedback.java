package com.ucsc.vwsbackend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

@Table(name="guest_user_feedback")
@Entity

public class GuestUserFeedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feedback_id")
    private long feedbackId;

    @Column(name = "feedback")
    private String feedback;

    @Column(name = "date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime date;

    public long getFeedbackId() {
        return feedbackId;
    }

    public String getFeedback() {
        return feedback;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setFeedbackId(long feedbackId) {
        this.feedbackId = feedbackId;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
