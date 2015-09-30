package com.app.web.tracker.servlet;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.app.web.tracker.constant.Constant;
import com.app.web.tracker.server.fw.FrameworkManager;

@WebServlet(value="/TrackerServlet",loadOnStartup=1)
public class TrackerServlet extends HttpServlet {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static final Logger log = Logger.getLogger(TrackerServlet.class);
	
	@Override 
	public void init(){
		log.info("---Framework Initialize Start-----");
		FrameworkManager.getInstance().initialize();
		log.info("---Framework Initialize End-----");
	}
    @Override
    public void doGet(HttpServletRequest request,HttpServletResponse response){
    	try{
    		doProcess(request,response);
    	}catch(Exception e){e.printStackTrace();}
    }

    @Override
    public void doPost(HttpServletRequest request,HttpServletResponse response){
    	try{
    		doProcess(request,response);
    	}catch(Exception e){e.printStackTrace();}
    }
    
    private void doProcess(HttpServletRequest request,HttpServletResponse response)throws Exception{
    	response.sendRedirect(Constant.MAIN_URI+Constant.HOME_URI);
    }
}
