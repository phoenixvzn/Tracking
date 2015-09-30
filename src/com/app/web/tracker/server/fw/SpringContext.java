package com.app.web.tracker.server.fw;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringContext {
	private ClassPathXmlApplicationContext springContext;	
	
	public void init(){
		springContext = new ClassPathXmlApplicationContext("classpath:/../../WEB-INF/dispatcher-servlet.xml");
	}
	
	public NativeService getBean(String action){
		return (NativeService)springContext.getBean(action);
	}
	
}
