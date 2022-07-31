package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.dto.Profile;
import com.ucsc.vwsbackend.entities.User;
import com.ucsc.vwsbackend.repository.userDao.UserJdbcRepository;
import com.ucsc.vwsbackend.repository.userDao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService implements UserDetailsService {
    //link userRepository with UserDetailsService interface
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserJdbcRepository userJdbcRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user=userRepository.findByUserName(username);

        if(null==user) {
            throw new UsernameNotFoundException("User Not Found with userName "+username);
        }
        return user;
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Profile getUserById(Long id) {
//        get user role by id
        String role = userJdbcRepository.getRoleByUserId(id);
//        System.out.println(role);
//        get profile data using that role
        if(role.equals("ADMIN")){
            return userJdbcRepository.profile(id,"admin");
        }else if(role.equals("VOLUNTEER")){
            return userJdbcRepository.profile(id,"volunteer");
        }else if(role.equals("PROJECT_COORDINATOR")){
            System.out.println(role);
            return userJdbcRepository.profile(id,"project_coordinator");
        }


        return null;
    }
}

