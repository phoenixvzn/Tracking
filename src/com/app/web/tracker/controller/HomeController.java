package com.app.web.tracker.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.app.web.tracker.beans.User;


@Controller
public class HomeController {
	
	private static final Logger log = Logger.getLogger(HomeController.class);

	
	@RequestMapping(value="welcome", method = RequestMethod.GET)
	public ModelAndView process(ModelMap models, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		User user = (User)session.getAttribute("User");
		
		log.info(user.getUsername()+" Welcome to home controller");
		ModelAndView model = new ModelAndView();
	
		model.addObject("name", user.getUsername());
		//model.setViewName("mainLayout");
		model.setViewName("deviceTrackingApp");
		return model;
	}
}
