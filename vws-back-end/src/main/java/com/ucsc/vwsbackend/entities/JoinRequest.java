package com.ucsc.vwsbackend.entities;


import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;


@Table(name="join_request")
@Entity
public class JoinRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nic")
    private String nic;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "address")
    private String address;

    @Column(name = "university_college")
    private String universityCollege;

    @Column(name = " district")
    private String  district;

    @Column(name = " protential")
    private String  protential;

    @Column(name = " qualification")
    private String  qualification;

    @Column(name = " qa1")
    private String  qa1;
    @Column(name = " qa2")
    private String  qa2;
    @Column(name = " qa3")
    private String  qa3;
    @Column(name = " qa4")
    private String  qa4;
    @Column(name = " qa5")
    private String  qa5;


    @Column(name = "requested_date")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @CreationTimestamp
    private Date requestedDate;

    @Column(name="status")
    private int status;

    public JoinRequest() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
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


    public void setRequestedDate(Date requestedDate) {
        this.requestedDate = requestedDate;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getNic() {
        return nic;
    }

    public Date getRequestedDate() {
        return requestedDate;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getProtential() {
        return protential;
    }

    public void setProtential(String protential) {
        this.protential = protential;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getQa1() {
        return qa1;
    }

    public void setQa1(String qa1) {
        this.qa1 = qa1;
    }

    public String getQa2() {
        return qa2;
    }

    public void setQa2(String qa2) {
        this.qa2 = qa2;
    }

    public String getQa3() {
        return qa3;
    }

    public void setQa3(String qa3) {
        this.qa3 = qa3;
    }

    public String getQa4() {
        return qa4;
    }

    public void setQa4(String qa4) {
        this.qa4 = qa4;
    }

    public String getQa5() {
        return qa5;
    }

    public void setQa5(String qa5) {
        this.qa5 = qa5;
    }
}
