package com.ucsc.vwsbackend.entities;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Table(name = "volunteer")
@Entity
public class Volunteer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "volunteer_id")
    private long volunteerId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "university_college")
    private String universityCollege;


    @Column(name = " district")
    private String  district;


    @Column(name = "requested_date")
    private Date date;

    @Column(name = "coordinator_or_not")
    @ColumnDefault("0")
    private long coordinatorOrNot;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id")
    User user;

    @OneToMany(mappedBy = "volunteer")
    Set<ParticipateEvent> participations;


    public Volunteer() {

    }

    public long getVolunteerId() {
        return volunteerId;
    }

    public void setVolunteerId(long volunteerId) {
        this.volunteerId = volunteerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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

    public long getCoordinatorOrNot() {
        return coordinatorOrNot;
    }

    public void setCoordinatorOrNot(long coordinatorOrNot) {
        this.coordinatorOrNot = coordinatorOrNot;
    }

    public Set<ParticipateEvent> getParticipations() {
        return participations;
    }

    public void setParticipations(Set<ParticipateEvent> participations) {
        this.participations = participations;
    }
}
