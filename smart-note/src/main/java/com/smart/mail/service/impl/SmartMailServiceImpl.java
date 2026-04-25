package com.smart.mail.service.impl;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.smart.mail.domain.Content;
import com.smart.mail.domain.EmailResponse;
import com.smart.mail.domain.GeminiAPIRequest;
import com.smart.mail.domain.GeminiApiRestResponse;
import com.smart.mail.domain.Part;
import com.smart.mail.domain.SmartMailRequest;
import com.smart.mail.service.SmartMailService;

import tools.jackson.databind.ObjectMapper;

@Service
public class SmartMailServiceImpl implements SmartMailService{

	@Value("${com.external.geminiai.api.endpoint}")
	private String uri;

	@Value("${com.external.geminiai.api.key}")
	private String API_KEY;
	
	private final RestTemplate restTemplate;
	
	@Autowired
	public SmartMailServiceImpl(RestTemplate restTemplate) 
	{
		this.restTemplate=restTemplate;
	}

	public EmailResponse generateEmail(SmartMailRequest smartMailRequest) {

		EmailResponse mappedResponse = null;

		String prompt = buildPrompt(smartMailRequest);
		
		//URI
		String urlWithKey = uri+"?key="+API_KEY;
		
		HttpEntity requestAndHeaders = buildRequest(prompt);

		ResponseEntity<GeminiApiRestResponse> response = restTemplate.exchange(urlWithKey, HttpMethod.POST, requestAndHeaders, GeminiApiRestResponse.class);
		
		GeminiApiRestResponse geminiApiRestResponse = response.getBody();

		String mailResponse = geminiApiRestResponse.getCandidates().get(0).getContent().getParts().get(0).getText();
				
		mailResponse=mailResponse.replace("```json", "").replace("```","");
				
			ObjectMapper mapper = new ObjectMapper();
			try {
		    mappedResponse = mapper.readValue(mailResponse, EmailResponse.class);
		} catch (Exception e) {
		    //return new EmailResponse("Generated Email", aiText); // fallback
		}
		
	    return mappedResponse; // fallback
	}

	private HttpEntity buildRequest(String prompt) {
		
				HttpHeaders httpHeaders = new HttpHeaders();
				httpHeaders.add("Content-Type", "application/json");

				//Request Body 
				GeminiAPIRequest geminiAPIRequest = new GeminiAPIRequest();
				Content content = new Content();
				Part part = new Part();
				
				part.setText(prompt);
				content.setParts(Arrays.asList(part));
				geminiAPIRequest.setContents(Arrays.asList(content));
				
				
				HttpEntity requestAndHeaders = new HttpEntity(geminiAPIRequest, httpHeaders);
				
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
