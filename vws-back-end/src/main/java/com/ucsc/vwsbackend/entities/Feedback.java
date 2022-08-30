package com.ucsc.vwsbackend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Table(name = "feedback")
@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feedback_id")
    private long feedback_id;

    @Column(name = "feedback")
    private String feedback;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "event_id")
    Event event;

    public Event getEvent() {
        return event;
    }

    public long getFeedback_id() {
        return feedback_id;
    }

    public String getFeedback() {
        return feedback;
    }

    public String getReply() {
        return reply;
    }

    public LocalDateTime getDate() {
        return date;
    }

    @Column(name = "reply")
    private String reply;

    @Column(name = "date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime date;

}
