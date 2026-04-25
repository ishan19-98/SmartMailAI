package com.smart.note.service.impl;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.smart.note.domain.Content;
import com.smart.note.domain.GeminiAPIRequest;
import com.smart.note.domain.Part;
import com.smart.note.domain.SmartNoteRequest;
import com.smart.note.service.SmartNoteService;

@Service
public class SmartNoteServiceImpl implements SmartNoteService{

	@Value("${com.external.geminiai.api.endpoint}")
	private String uri;

	@Value("${com.external.geminiai.api.key}")
	private String API_KEY;
	
	private final RestTemplate restTemplate;
	
	@Autowired
	public SmartNoteServiceImpl(RestTemplate restTemplate) 
	{
		this.restTemplate=restTemplate;
	}

	public String getRefinedNoteService(SmartNoteRequest smartNoteRequest) {

		String prompt = buildPrompt(smartNoteRequest);

		//Http Headers
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.add("Content-Type", "application/json");
		
		//URI
		String urlWithKey = uri+"?key="+API_KEY;

		// Request Body 
		GeminiAPIRequest geminiAPIRequest = new GeminiAPIRequest();
		Content content = new Content();
		Part part = new Part();
		
		part.setText(prompt);
		content.setParts(Arrays.asList(part));
		geminiAPIRequest.setContents(Arrays.asList(content));
		
		
		HttpEntity requestAndHeaders = new HttpEntity(geminiAPIRequest, httpHeaders);
		
		ResponseEntity<Map> response = restTemplate.exchange(urlWithKey, HttpMethod.POST, requestAndHeaders, Map.class);

		return null;
	}

	private String buildPrompt(SmartNoteRequest smartNoteRequest) {
		String prompt = "Enhance and generate a better polished version of the following note by fixing the spelling mistakes and grammatical errors.\n"
				+ "Note: " + smartNoteRequest.getNote();
		return prompt;
	}
}
