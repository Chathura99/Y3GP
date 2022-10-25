package com.ucsc.vwsbackend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Table(name="scholarship")
@Entity

public class Scholarship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nic")
    private String nic;

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "address")
    private String address;

    @Column(name = "district")
    private String  district;

    @Column(name = "other")
    private String  other;

    @Column(name = "universityCollege")
    private String  universityCollege;

    @Column(name = "result_sheet")
    private String  resultSheet;

    @Column(name = "income_certificate")
    private String  incomeCertificate;

    @Column(name = "requested_date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @CreationTimestamp
    private LocalDateTime requestedDate;

    @Column(name="scholarship_type")
    private int scholarshipType;

    @Column(name="status")
    private int status;

    @Column(name="meeting_link")
    private String meetingLink;

    @Column(name="description")
    private String description;

    public String getMeetingLink() {
        return meetingLink;
    }

    public void setMeetingLink(String meetingLink) {
        this.meetingLink = meetingLink;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public String getDistrict() {
        return district;
    }

    public String getOther() {
        return other;
    }

    public String getUniversityCollege() {
        return universityCollege;
    }

    public String getResultSheet() {
        return resultSheet;
    }

    public String getIncomeCertificate() {
        return incomeCertificate;
    }

    public int getScholarshipType() {
        return scholarshipType;
    }

    public int getStatus() {
        return status;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public void setOther(String other) {
        this.other = other;
    }

    public void setUniversityCollege(String universityCollege) {
        this.universityCollege = universityCollege;
    }

    public void setResultSheet(String resultSheet) {
        this.resultSheet = resultSheet;
    }

    public void setIncomeCertificate(String incomeCertificate) {
        this.incomeCertificate = incomeCertificate;
    }

    public void setScholarshipType(int scholarshipType) {
        this.scholarshipType = scholarshipType;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public LocalDateTime getRequestedDate() {
        return requestedDate;
    }

    public void setRequestedDate(LocalDateTime requestedDate) {
        this.requestedDate = requestedDate;
    }
}
