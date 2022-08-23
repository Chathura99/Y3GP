package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.entities.Authority;
import com.ucsc.vwsbackend.entities.JoinRequest;
import com.ucsc.vwsbackend.entities.User;
import com.ucsc.vwsbackend.entities.Volunteer;
import com.ucsc.vwsbackend.repository.joinRequestDao.JoinRequestJdbcRepository;
import com.ucsc.vwsbackend.repository.joinRequestDao.JoinRequestRepository;
import com.ucsc.vwsbackend.repository.userDao.UserJdbcRepository;
import com.ucsc.vwsbackend.repository.userDao.UserRepository;
import com.ucsc.vwsbackend.repository.volunteerDao.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SignUpService {

    @Autowired
    JoinRequestRepository joinRequestRepository;

    @Autowired
    JoinRequestJdbcRepository joinRequestJdbcRepository;

    @Autowired
    UserJdbcRepository userJdbcRepository;

    @Autowired
    VolunteerRepository volunteerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    public String signUp(JoinRequest joinRequest) {
//      check email is exists in user
//      check in requests also
        int rowCount1 = userJdbcRepository.checkEmailExists(joinRequest.getEmail());
        int rowCount2 = joinRequestJdbcRepository.checkEmailExists(joinRequest.getEmail());
        joinRequest.setDate(LocalDateTime.now());
        if(rowCount1>0){
            return "You have already an account!";
        }else if(rowCount2>0){
            return "You have already pending request!";
        }else{
            JoinRequest success=joinRequestRepository.save(joinRequest);
            return "Your request sent successfully!";
        }
    }

    public List<JoinRequest> getJoinRequest() {

        return joinRequestJdbcRepository.getNewRequest();
    }

    public String signUpApproved(JoinRequest joinRequest){
        SimpleMailMessage message=new SimpleMailMessage();
        message.setFrom("vws.org2022@gmail.com");
        message.setTo(joinRequest.getEmail());
        String pw=generateRandomPassword(8, 97, 122);

        String content="Your sign up request approved.\n" +
                "Welcome to the vws platform!\n" +
                "Your initial auto generated password attached with here.\n" +
                "Please change it into your own password\nPassword : ";

        message.setText(content + pw + "\n" + "Username : "+joinRequest.getFirstName()+joinRequest.getId());
        message.setSubject("Welcome to the VWS!");
        //Update User
        List<Authority> authorityList=new ArrayList<>();

        authorityList.add(createAuthority("VOLUNTEER","Volunteer role"));

        User user=new User();
        user.setUserName(joinRequest.getFirstName()+joinRequest.getId());
        user.setFirstName(joinRequest.getFirstName());
        user.setLastName(joinRequest.getLastName());
        user.setEmail(joinRequest.getEmail());
        user.setPhoneNumber(joinRequest.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(pw));
        user.setEnabled(true);
        user.setAuthorities(authorityList);

        //Update volunteer

        Volunteer volunteer=new Volunteer();

        volunteer.setAddress(joinRequest.getAddress());
        volunteer.setDate(joinRequest.getDate());
        volunteer.setDistrict(joinRequest.getDistrict());
        volunteer.setUniversityCollege(joinRequest.getUniversityCollege());
//        set user in here
        volunteer.setUser(user);
        volunteer.setFirstName(joinRequest.getFirstName());
        volunteer.setLastName(joinRequest.getLastName());

        volunteerRepository.save(volunteer);
        joinRequestJdbcRepository.updateStatus(joinRequest.getId());

        mailSender.send(message);
        //Update join Request status



        return "Send Authentication details Successfully!";

    }

    public static String generateRandomPassword(int len, int randNumOrigin, int randNumBound)
    {
        SecureRandom random = new SecureRandom();
        return random.ints(len, randNumOrigin, randNumBound + 1)
                .mapToObj(i -> String.valueOf((char)i))
                .collect(Collectors.joining());
    }

    private Authority createAuthority(String roleCode,String roleDescription) {
        Authority authority=new Authority();
        authority.setRoleCode(roleCode);
        authority.setRoleDescription(roleDescription);
        return authority;
    }
}
