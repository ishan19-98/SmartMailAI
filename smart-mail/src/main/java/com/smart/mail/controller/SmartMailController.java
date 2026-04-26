package com.smart.mail.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smart.mail.domain.EmailResponse;
import com.smart.mail.domain.SmartMailRequest;
import com.smart.mail.service.SmartMailService;
import com.smart.mail.service.exceptionhandling.GeminiResponseException;

@RestController
@RequestMapping("mail")
public class SmartMailController {

	private SmartMailService smartMailService;
	
	public SmartMailController(SmartMailService smartMailService) {
		this.smartMailService = smartMailService;
	}

	@PostMapping(value = "")
	public EmailResponse generateEmail(@RequestBody SmartMailRequest smartMailRequest) throws GeminiResponseException {
		return smartMailService.generateEmail(smartMailRequest);
	}

}
