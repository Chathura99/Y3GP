package com.ucsc.vwsbackend.dto;
import java.util.Date;

public class VolunteerUpgrade {
    private long volunteerId;

    private String firstName;

    private String lastName;

    private String address;

    private String universityCollege;

    private String  district;

    private Date date;

    private long coordinatorOrNot;

    private long userId;

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

    public long getCoordinatorOrNot() {
        return coordinatorOrNot;
    }

    public void setCoordinatorOrNot(long coordinatorOrNot) {
        this.coordinatorOrNot = coordinatorOrNot;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long Id) {
        this.userId = Id;
    }
}

