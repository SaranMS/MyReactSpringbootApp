package com.example.restfulwebservices.basicauth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.restfulwebservices.model.AuthBean;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BasicAuthController {

	@GetMapping(value="/basicAuth")
	public AuthBean basicAuthentication() {
		return new AuthBean("Hello...");
	}
	
}
