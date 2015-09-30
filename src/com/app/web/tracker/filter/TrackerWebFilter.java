package com.app.web.tracker.filter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.app.web.tracker.constant.Constant;

public class TrackerWebFilter implements Filter {
	 public void  init(FilterConfig config) 
             throws ServletException{
		 
	 }
	 public void  doFilter(ServletRequest request, 
             ServletResponse response,
             FilterChain chain) 
             throws java.io.IOException, ServletException {
		 
		 HttpServletRequest httpRequest = (HttpServletRequest) request;
		 HttpSession httpSession = httpRequest.getSession(false);
		 HttpServletResponse httpResponse = (HttpServletResponse) response;

		 String requestURI = httpRequest.getRequestURI();
		 
		 if(httpSession != null && httpSession.getAttribute("User") != null){
			 chain.doFilter(request, response);
		 }
		 else if(requestURI.contains(Constant.CLIENT_URI)){
			 chain.doFilter(request, response);
		 }
		 else if(requestURI.endsWith(Constant.Login_URI)){
			 chain.doFilter(request, response);
		 } 
		 else{
			 httpResponse.sendRedirect(Constant.MAIN_URI+Constant.Login_URI);
		 }
	 }
	 public void destroy( ){
	      /* Called before the Filter instance is removed 
	      from service by the web container*/
	 }
}
