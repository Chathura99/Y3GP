package com.ucsc.vwsbackend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class GuestUserRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String district;
    private String address;
    private String Profession;
    private String nic;
    private String phoneNumber;

    private Integer noOfVolunteers;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date startDate;
    private String place;
    private String other;
    private String projectId;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getProfession() {
        return Profession;
    }

    public void setProfession(String profession) {
        Profession = profession;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Integer getNoOfVolunteers() {
        return noOfVolunteers;
    }

    public void setNoOfVolunteers(Integer noOfVolunteers) {
        this.noOfVolunteers = noOfVolunteers;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getOther() {
        return other;
    }

    public void setOther(String other) {
        this.other = other;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }
}
