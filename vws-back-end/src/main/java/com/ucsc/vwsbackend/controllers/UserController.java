package com.ucsc.vwsbackend.controllers;

import com.ucsc.vwsbackend.dto.Profile;
import com.ucsc.vwsbackend.dto.userPassword;
import com.ucsc.vwsbackend.entities.User;
import com.ucsc.vwsbackend.repository.userDao.UserRepository;
import com.ucsc.vwsbackend.services.PasswordService;
import com.ucsc.vwsbackend.services.VolunteerService;
import com.ucsc.vwsbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VolunteerService volunteerService;

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordService passwordService;

    @GetMapping("/test")
    public String test(){
        return "Test from UserController!";
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public Profile getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @PostMapping("/registerUser/{id}")
    public User registerUser(@PathVariable Long id){
        return volunteerService.registerUser(id);
    }

    @PutMapping("/updateProfile/{role}")
    public long updateProfile(@RequestBody Profile profile,@PathVariable String role){
        return userService.updateProfile(profile,role);
    }
    @PutMapping("/changePassword/{id}")
    public long changePassword(@RequestBody userPassword userPassword,@PathVariable Long id){
        return passwordService.changePassword(userPassword,id);
    }

    @PutMapping("/deactivateUser/{id}")
    public long deactivateUser(@PathVariable Long id){
        return passwordService.deactivateUser(id);
    }


}
