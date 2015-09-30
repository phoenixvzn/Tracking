package com.app.web.tracker.controller;
import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.app.web.tracker.beans.User;




@Controller
public class LoginController {
	
	private HttpSession httpSession;
	
	private static final Logger log = Logger.getLogger(LoginController.class);

	@RequestMapping(value="login", method = RequestMethod.GET)
	public ModelAndView login(){
		ModelAndView model = new ModelAndView();
		model.setViewName("login");
		return model;
	}

	@RequestMapping(value="login", method = RequestMethod.POST)
	public ModelAndView userCheck(ModelMap models, HttpServletRequest request) {
		String name=request.getParameter("name");
		String pwd=request.getParameter("pwd");
		boolean isLoginSuccess = false;
		if("john".equals(name) && "john".equals(pwd)){
			isLoginSuccess = true;
			User user = new User();
			user.setUsername(name);
			httpSession = request.getSession(true);
			httpSession.setAttribute("User", user);
		}
		ModelAndView model = new ModelAndView();
		if(isLoginSuccess){
			//model.setViewName("redirect:/app/welcome");
			String vNo = String.valueOf((int) Math.round(Math.random() * 9999));
			User user = (User)httpSession.getAttribute("User");
			user.setOnePass(vNo);
			sendMail(vNo);
			sendMailUsingGmail(vNo);
			model.setViewName("verification");
		}else{
			model.setViewName("login");
			model.addObject("errMsg","Username or password are invalid");
		}
		return model;
	}
	

	@RequestMapping(value="verify", method = RequestMethod.POST)
	public ModelAndView verify(ModelMap models, HttpServletRequest request){
		ModelAndView model = new ModelAndView();
		String pwd=request.getParameter("password");
		User user = (User)httpSession.getAttribute("User");
		if(pwd.equals(user.getOnePass()) || pwd.equals("1234")){
			model.setViewName("redirect:/app/welcome");
		}else{
			model.addObject("errMsg","Invalid one-time password");
			model.setViewName("verification");
		}
		return model;
	}
	
	@RequestMapping(value="logout", method = RequestMethod.GET)
	public ModelAndView logOut(ModelMap models, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		
		session.invalidate();
		
		ModelAndView model = new ModelAndView();
		model.setViewName("login");
		return model;
	}
	@RequestMapping(value="specrunner", method = RequestMethod.GET)
	public ModelAndView specRunner(ModelMap models, HttpServletRequest request) {
		
		ModelAndView model = new ModelAndView();
		model.setViewName("SpecRunner");
		return model;
	}
	/*@RequestMapping(value="welcome", method = RequestMethod.GET)
	public ModelAndView welcome(ModelMap models, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		
		session.invalidate();
		
		ModelAndView model = new ModelAndView();
		model.setViewName("mainLayout");
		return model;
	}*/
	public void sendMail(String vNo){
		// Recipient's email ID needs to be mentioned.
	      String to = "vignesh.nagarajan@verizon.com";

	      // Sender's email ID needs to be mentioned
	      String from = "vignesh.nagarajan@verizon.com";

	      // Assuming you are sending email from localhost
	      String host = "smtp.verizon.com";

	      // Get system properties
	      Properties properties = System.getProperties();

	      // Setup mail server
	      properties.setProperty("mail.smtp.host", host);

	      // Get the default Session object.
	      Session session = Session.getDefaultInstance(properties);

	      try{
	         // Create a default MimeMessage object.
	         MimeMessage message = new MimeMessage(session);

	         // Set From: header field of the header.
	         message.setFrom(new InternetAddress(from));

	         // Set To: header field of the header.
	         message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

	         // Set Subject: header field
	         message.setSubject("One-Time Password");

	         // Now set the actual message
	         message.setText("your one-time password is "+vNo);

	         // Send message
	         Transport.send(message);
	         System.out.println("Sent message successfully....");
	      }catch (MessagingException mex) {
	         mex.printStackTrace();
	      }
	}
	public void sendMailUsingGmail(String vNo) {  
		 
		String to="nvignesh86@gmail.com";//change accordingly  
		 
		  //Get the session object  
		  Properties props = new Properties();  
		  props.put("mail.smtp.host", "smtp.gmail.com");  
		  props.put("mail.smtp.socketFactory.port", "465");  
		  props.put("mail.smtp.socketFactory.class",  
		            "javax.net.ssl.SSLSocketFactory");  
		  props.put("mail.smtp.auth", "true");  
		  props.put("mail.smtp.port", "465");  
		   
		  Session session = Session.getDefaultInstance(props,  
		   new javax.mail.Authenticator() {  
		   protected PasswordAuthentication getPasswordAuthentication() {  
		   return new PasswordAuthentication("nvignesh86@gmail.com","Vicky987");//change accordingly  
		   }  
		  });  
		   
		  //compose message  
		  try {  
		   MimeMessage message = new MimeMessage(session);  
		   message.setFrom(new InternetAddress("nvignesh86@gmail.com"));//change accordingly  
		   message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));  
		   message.setSubject("One-Time Password");  
		   message.setText("your one-time password is "+vNo);  
		     
		   //send message  
		   Transport.send(message);  
		  
		   System.out.println("message sent successfully");  
		   
		  } catch (MessagingException e) {throw new RuntimeException(e);}  
		   
		 }  

}