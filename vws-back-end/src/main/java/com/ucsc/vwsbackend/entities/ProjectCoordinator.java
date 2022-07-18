package com.ucsc.vwsbackend.entities;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Table(name = "project_coordinator")
@Entity
public class ProjectCoordinator {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "coordinator_id")
    private long coordinatorId;

    @Column(name = "address")
    private String address;

    @Column(name = "university_college")
    private String universityCollege;


    @Column(name = " district")
    private String  district;

    @Column(name = "requested_date")
    private Date date;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id")
    User user;

    public long getCoordinatorId() {
        return coordinatorId;
    }

    public void setCoordinatorId(long coordinatorId) {
        this.coordinatorId = coordinatorId;
    }

    public void setVolunteerId(long volunteerId) {
        this.coordinatorId = volunteerId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getUniversityCollege() {
        return universityCollege;
    }

    public void setUniversityCollege(String universityCollege) {
        this.universityCollege = universityCollege;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
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
}
