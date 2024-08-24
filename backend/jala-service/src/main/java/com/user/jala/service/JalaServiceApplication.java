package com.user.jala.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class JalaServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(JalaServiceApplication.class, args);
	}


//	@GetMapping("/")
//	public String getAll(){
//
//		return "jala-service";
//	}
}