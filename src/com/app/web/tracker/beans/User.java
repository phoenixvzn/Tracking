package com.app.web.tracker.beans;

public class User {
	private int id;
	private String username;
	private String password;
	private String email;
	private String onePass;
	

	public String getOnePass() {
		return onePass;
	}

	public void setOnePass(String onePass) {
		this.onePass = onePass;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
    
 
}