package com.ucsc.vwsbackend.controllers;

import com.ucsc.vwsbackend.entities.User;
import com.ucsc.vwsbackend.repository.UserRepository;
import com.ucsc.vwsbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService customUserService;

    @GetMapping("/test")
    public String test(){
        return "Test from UserController!";
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){

        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public Optional<User> getUserById(@PathVariable Long id){

        return userRepository.findById(id);
    }
}
