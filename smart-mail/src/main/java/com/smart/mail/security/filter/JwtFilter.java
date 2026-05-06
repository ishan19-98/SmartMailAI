package com.smart.mail.security.filter;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.smart.mail.security.JwtUtil;
import com.smart.mail.security.service.CustomUserDetailService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilter extends OncePerRequestFilter{
	
	@Autowired
	private CustomUserDetailService userDetailService;
	
	@Autowired
	private JwtUtil jwtUtil;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		String authHeader = request.getHeader("Authorization");
		
		String token = "";
		String userName = "";
		
		
		if(authHeader != null && authHeader.startsWith("Bearer "))
		{
			 token = authHeader.substring(7);
			 userName = jwtUtil.extractUsername(token);
		}
		
		if(userName!=null && !userName.trim().isEmpty()
		        && SecurityContextHolder.getContext().getAuthentication() == null)
		{
			UserDetails userDetail = userDetailService.loadUserByUsername(userName);
			
			if(jwtUtil.validateToken(token, userDetail.getUsername()))
			{
				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetail,null,userDetail.getAuthorities());
				
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}
		}
		
		filterChain.doFilter(request, response);
		
	}
	
	

}
