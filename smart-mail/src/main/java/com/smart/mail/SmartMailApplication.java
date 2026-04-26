package com.smart.mail;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import com.smart.mail.controller.SmartMailController;

@SpringBootApplication
public class SmartMailApplication {

	private static final Logger logger = LoggerFactory.getLogger(SmartMailController.class);

	public static void main(String[] args) {
		SpringApplication.run(SmartMailApplication.class, args);
		logger.info("Application started on port 8080");
	}

}
