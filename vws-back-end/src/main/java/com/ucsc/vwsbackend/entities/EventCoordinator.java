package com.ucsc.vwsbackend.entities;
import javax.persistence.*;
import java.util.Date;

@Table(name = "event_coordinator")
@Entity
public class EventCoordinator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "coordinator_id")
    private long coordinatorId;

    @Column(name = "requested_date")
    private Date date;

    public long getCoordinatorId() {
        return coordinatorId;
    }

    public void setCoordinatorId(long coordinatorId) {
        this.coordinatorId = coordinatorId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id")
    User user;

}
