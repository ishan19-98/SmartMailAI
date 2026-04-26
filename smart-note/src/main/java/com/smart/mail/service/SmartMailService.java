package com.smart.mail.service;

import com.smart.mail.domain.EmailResponse;
import com.smart.mail.domain.SmartMailRequest;
import com.smart.mail.service.exceptionhandling.GeminiResponseException;

public interface SmartMailService {

	EmailResponse generateEmail(SmartMailRequest smartMailRequest) throws GeminiResponseException;

}
