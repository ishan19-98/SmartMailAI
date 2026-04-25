package com.smart.mail.service;

import com.smart.mail.domain.EmailResponse;
import com.smart.mail.domain.SmartMailRequest;

public interface SmartMailService {

	EmailResponse generateEmail(SmartMailRequest smartMailRequest);

}
