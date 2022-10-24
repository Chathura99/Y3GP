package com.ucsc.vwsbackend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

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
    private String  result;

    @Column(name = "income_certificate")
    private String  income;

    @Column(name = "requested_date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime date;

    @Column(name="scholarship_type")
    private int scholarshipType;

    @Column(name="status")
    private int status;


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

    public String getResult() {
        return result;
    }

    public String getIncome() {
        return income;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public int getScholarshipType() {
        return scholarshipType;
    }

    public int getStatus() {
        return status;
    }
}
