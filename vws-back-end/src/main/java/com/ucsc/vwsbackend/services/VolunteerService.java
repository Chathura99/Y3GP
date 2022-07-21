package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.entities.Authority;
import com.ucsc.vwsbackend.entities.JoinRequest;
import com.ucsc.vwsbackend.entities.User;
import com.ucsc.vwsbackend.repository.joinRequestDao.JoinRequestJdbcRepository;
import com.ucsc.vwsbackend.repository.joinRequestDao.JoinRequestRepository;
import com.ucsc.vwsbackend.repository.userDao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class VolunteerService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JoinRequestJdbcRepository joinRequestJdbcRepository;
    public User registerUser(Long id) {

        JoinRequest joinRequest = joinRequestJdbcRepository.getData(id);
        List<Authority> authorityList=new ArrayList<>();

        authorityList.add(createAuthority("VOLUNTEER","Volunteer role"));

        User user=new User();

        user.setFirstName(joinRequest.getFirstName());
        user.setLastName(joinRequest.getLastName());
        user.setUserName(joinRequest.getFirstName()+joinRequest.getLastName());
        user.setEmail(joinRequest.getEmail());
        user.setPhoneNumber(joinRequest.getPhoneNumber());
        user.setCreatedAt(new Date());
        user.setPassword(passwordEncoder.encode("123456789"));
        user.setEnabled(true);
        user.setAuthorities(authorityList);
        return userRepository.save(user);
    }

    private Authority createAuthority(String roleCode,String roleDescription) {
        Authority authority=new Authority();
        authority.setRoleCode(roleCode);
        authority.setRoleDescription(roleDescription);
        return authority;
    }



}
