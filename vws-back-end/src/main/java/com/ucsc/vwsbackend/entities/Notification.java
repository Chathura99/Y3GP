package com.ucsc.vwsbackend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Table(name = "notification")
@Entity
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notification_id")
    private Long notificationId;

    @Column(name = "description")
    private String description;

    @Column(name = "view")
    private String view;

    @Column(name = "date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime date;

    @Column(name = "view_group")
    private String viewGroup;

    public Long getNotificationId() {
        return notificationId;
    }

    public String getDescription() {
        return description;
    }

    public String getView() {
        return view;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public String getViewGroup() {
        return viewGroup;
    }

    public Integer getStatus() {
        return status;
    }

    public User getUser() {
        return user;
    }

    @Column(name = "status")
    private Integer status;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    User user;

    public Notification() {
    }

}
