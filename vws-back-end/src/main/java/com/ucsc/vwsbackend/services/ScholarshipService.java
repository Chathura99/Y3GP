package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.entities.Scholarship;
import com.ucsc.vwsbackend.repository.scholarshipDao.ScholarshipJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScholarshipService {
    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    ScholarshipJdbcRepository scholarshipJdbcRepository;
    public List<Scholarship> getScholarship() {
        return  scholarshipJdbcRepository.getScholarship();
    }

    public long sendMeeting(Scholarship scholarship) {
        SimpleMailMessage message=new SimpleMailMessage();
        message.setFrom("vws.org2022@gmail.com");
        message.setTo(scholarship.getEmail());

        String content="Your application has considered! please join with the following meeting link\nLink : ";

        message.setText("Welcome : "+scholarship.getFullName()+"\n"+ content + " " +scholarship.getMeetingLink()
        +"\nNote: "+scholarship.getDescription());
        message.setSubject("Welcome to the VWS!");
        mailSender.send(message);

        scholarshipJdbcRepository.updateStatus(scholarship.getId(),scholarship);
        return  1;
    }
}
