package com.ucsc.vwsbackend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class AppController {
    @GetMapping
    public String testApp() {
        return "Hello Spring Security!";
    }

    @GetMapping("/test1")
    public String TestApp() {
        return "Test 1";
    }

}
