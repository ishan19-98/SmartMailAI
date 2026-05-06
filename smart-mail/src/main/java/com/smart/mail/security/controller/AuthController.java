package com.smart.mail.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smart.mail.security.JwtUtil;
import com.smart.mail.security.bean.AuthRequest;

@RestController
@RequestMapping("auth")
public class AuthController {
	
	private AuthenticationManager authenticationManager;
	
	private JwtUtil jwtUtil;
	
	@Autowired
	public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil)
	{
		this.authenticationManager=authenticationManager;
		this.jwtUtil=jwtUtil;
	}
	
	@PostMapping("/login")
	public String generateToken(@RequestBody AuthRequest authRequest)
	{
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));
		
		return jwtUtil.generateToken(authRequest.getUserName());
	}
	

}
