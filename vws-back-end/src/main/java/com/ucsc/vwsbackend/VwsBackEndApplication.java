package com.ucsc.vwsbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VwsBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(VwsBackEndApplication.class, args);
		System.out.println("Hello,Running Successfully!");
	}

}
