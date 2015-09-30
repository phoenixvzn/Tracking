<%@page import="com.app.web.tracker.constant.Constant"%>
<%@page import="com.app.web.tracker.beans.User"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<% 

HttpSession httpSession = request.getSession();
User user = (User)httpSession.getAttribute("User");
String userName = user.getUsername();

%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Tracker</title>
</head>
<script type="text/javascript" src="../client/extjs/build/ext-all.js">

</script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3&sensor=false"></script>
<script type="text/javascript" src="../client/extjs/build/packages/ext-aria/build/ext-aria.js"></script>
<link rel="stylesheet" href="../client/extjs/build/packages/ext-theme-neptune/build/resources/ext-theme-neptune-all.css"/>
<script type="text/javascript" src="../client/deviceTrackingApp.js"></script>

<script type="text/javascript">
	var userName = "<%=userName%>";
	var MAIN_URI = "<%=Constant.MAIN_URI%>";
</script>

<body>
</body>
</html>