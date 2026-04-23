package com.smart.note.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.smart.note.domain.OpenAPIRequest;
import com.smart.note.domain.SmartNoteRequest;
import com.smart.note.service.SmartNoteService;

@Service
public class SmartNoteServiceImpl implements SmartNoteService{

	@Value("${com.external.openapi.endpoint}")
	private final String uri = "";

	@Value("${com.external.openapi.key}")
	private final String API_KEY = "";
	
	private final RestTemplate restTemplate;
	
	@Autowired
	public SmartNoteServiceImpl(RestTemplate restTemplate)
	{
		this.restTemplate=restTemplate;
	}

	public String getRefinedNoteService(SmartNoteRequest smartNoteRequest) {

		String prompt = buildPrompt(smartNoteRequest);

		// Http Headers
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.add("Content-Type", "application/json");
		httpHeaders.add("Authorization", "Bearer" + API_KEY);

		// Request Body 
		OpenAPIRequest openAPIRequest = new OpenAPIRequest();
		openAPIRequest.setModel("gpt-4.1-mini");
		openAPIRequest.setInput(prompt);
		
		HttpEntity<Map<String, Object>> request = new HttpEntity(openAPIRequest, httpHeaders);
		
		ResponseEntity<Map> response = restTemplate.postForEntity(uri, request, Map.class);

		return null;
	}

	private String buildPrompt(SmartNoteRequest smartNoteRequest) {
		String prompt = "Enhance and generate a better polished version of the following note by fixing the spelling mistakes and grammatical error.\n"
				+ "Note: " + smartNoteRequest.getNote();
		return prompt;
	}
}
