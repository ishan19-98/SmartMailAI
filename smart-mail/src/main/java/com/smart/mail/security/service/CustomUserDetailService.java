package com.smart.mail.security.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	    @Override
	    public UserDetails loadUserByUsername(String username) {
	    	String encodedPassword=passwordEncoder.encode("root123");
	        return new User(username, encodedPassword, new ArrayList<>());
	    }
}
