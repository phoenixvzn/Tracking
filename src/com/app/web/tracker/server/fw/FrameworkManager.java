package com.app.web.tracker.server.fw;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.app.web.tracker.beans.User;

public class FrameworkManager {
	
    private static FrameworkManager instance;
    private SpringContext springContext; 
	private FrameworkManager(){
		springContext = new SpringContext();
	}
	
	public void initialize(){
		springContext.init();
	}
	
	public static FrameworkManager getInstance(){
		if(instance == null){
			instance = new FrameworkManager();
		}
		return instance;
	}
	
	public NativeService process(String action,Map<String, String[]> map,User user,HttpServletRequest request,
							HttpServletResponse response,HttpSession session){
		
		return (NativeService)springContext.getBean(action); 
	}
	
}	
