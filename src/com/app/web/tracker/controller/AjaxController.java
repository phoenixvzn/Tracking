package com.app.web.tracker.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.app.web.tracker.beans.User;
import com.app.web.tracker.server.fw.FrameworkManager;
import com.app.web.tracker.server.fw.NativeService;


@Controller
public class AjaxController {

	@RequestMapping(value="process/{action}", method = RequestMethod.GET)
	public ModelAndView process(ModelMap models, HttpServletRequest request, HttpServletResponse response,@PathVariable String action)throws Exception {
		HttpSession session = request.getSession(false);
		User user = (User)session.getAttribute("User");
		Map<String, String[]> map = request.getParameterMap();
		
		Map<Object, Object> outputMap = (HashMap<Object, Object>)((NativeService)FrameworkManager.getInstance().process(action, map, user, request, response, session)).process(map, user, request, response, session);
		
		ModelAndView model = new ModelAndView();
		model.setView(new MappingJackson2JsonView());
		model.addObject("resp",outputMap);
		return model;
	}
}
