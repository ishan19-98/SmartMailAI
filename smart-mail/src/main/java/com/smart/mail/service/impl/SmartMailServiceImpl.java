package com.smart.mail.service.impl;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.smart.mail.controller.SmartMailController;
import com.smart.mail.domain.Candidate;
import com.smart.mail.domain.Content;
import com.smart.mail.domain.EmailResponse;
import com.smart.mail.domain.GeminiAPIRequest;
import com.smart.mail.domain.GeminiApiRestResponse;
import com.smart.mail.domain.Part;
import com.smart.mail.domain.SmartMailRequest;
import com.smart.mail.service.SmartMailService;
import com.smart.mail.service.exceptionhandling.GeminiResponseException;

import tools.jackson.databind.ObjectMapper;

@Service
public class SmartMailServiceImpl implements SmartMailService{

	@Value("${com.external.geminiai.api.endpoint}")
	private String uri;

	@Value("${com.external.geminiai.api.key}")
	private String API_KEY;
	
	private final RestTemplate restTemplate;
	
	private static final Logger logger = LoggerFactory.getLogger(SmartMailServiceImpl.class);

	
	@Autowired
	public SmartMailServiceImpl(RestTemplate restTemplate) 
	{
		this.restTemplate=restTemplate;
	}

	public EmailResponse generateEmail(SmartMailRequest smartMailRequest) throws GeminiResponseException {

		EmailResponse mappedResponse = null;

		String prompt = buildPrompt(smartMailRequest);
		
		//URI
		String urlWithKey = uri+"?key="+API_KEY;
		
		HttpEntity<GeminiAPIRequest> requestAndHeaders = buildRequest(prompt);

		ResponseEntity<GeminiApiRestResponse> response = restTemplate.exchange(urlWithKey, HttpMethod.POST, requestAndHeaders, GeminiApiRestResponse.class);
		
		GeminiApiRestResponse geminiApiRestResponse = response.getBody();

		String mailResponse = geminiApiRestResponse.getCandidates().stream().findFirst().get().getContent().getParts()
				.get(0).getText();

		if (mailResponse != null) {
			mailResponse = mailResponse.replace("```json", "").replace("```", "");
		} else {
			logger.error("Error occured while fetching data from Gemini AI API");
			throw new GeminiResponseException("Error occured while fetching data from Gemini AI API");
		}

		ObjectMapper mapper = new ObjectMapper();
		
		try {
			mappedResponse = mapper.readValue(mailResponse, EmailResponse.class);
		} catch (Exception e) {
			logger.error("Error occured while mapping data received from Gemini AI API");
		}
		
	    return mappedResponse; 
	}

	private HttpEntity<GeminiAPIRequest> buildRequest(String prompt) {
		
		        //Headers
				HttpHeaders httpHeaders = new HttpHeaders();
				httpHeaders.add("Content-Type", "application/json");

				//Request Body 
				GeminiAPIRequest geminiAPIRequest = new GeminiAPIRequest();
				Content content = new Content();
				Part part = new Part();
				
				part.setText(prompt);
				content.setParts(Arrays.asList(part));
				geminiAPIRequest.setContents(Arrays.asList(content));
				
				
				HttpEntity<GeminiAPIRequest> requestAndHeaders = new HttpEntity<>(geminiAPIRequest, httpHeaders);
				
				return requestAndHeaders;
	}

	private String buildPrompt(SmartMailRequest smartMailRequest) {
		String prompt = "Generate a complete email  as a professional email writer based on the details below:\r\n"
				+ "\r\n"
				+ "- Sender Name: "+ smartMailRequest.getSenderName()+"\r\n"
				+ "- Receiver Name:"+ smartMailRequest.getReceiverName()+"\r\n"
				+ "- Subject Hint:" + smartMailRequest.getSubject()+"\r\n"
				+ "- Context:" + smartMailRequest.getContext()+"\r\n"
				+ "- Tone:" + smartMailRequest.getTone()+"\r\n"
				+ "\r\n"
				+ "Instructions:\r\n"
				+ "- Generate a proper subject line\r\n"
				+ "- Write a well-structured email\r\n"
				+ "- Keep it concise and professional\r\n"
				+ "- Do not add unnecessary information\r\n"
				+ "\r\n"
				+ "Return output strictly in JSON format:\r\n"
				+ "{\r\n"
				+ "  \"subject\": \"...\",\r\n"
				+ "  \"body\": \"...\"\r\n"
				+ "} ";
		
		return prompt;
	}
}
