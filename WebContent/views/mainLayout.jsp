<%@page import="com.app.web.tracker.constant.Constant"%>
<html>
<head>
<title>Tracker</title>
<%@include file="metaInfo.jsp" %>
<script type="text/javascript" src="../client/deviceTrackingApp.js"></script>
</head>
<body>
<div class='header'>
	<div style='float:left'>Tracker</div>
	<div style='float:right;margin-right:20px'><a href="<%=Constant.MAIN_URI%>/app/logout">Logout</a></div>
	<div style='float:right;margin-right:20px'>${name}</div>
	<div style='clear:both'></div>
</div>
<div class="menuContainer">
<ul class="solidblockmenu">
	<li><a href="#" >UnAnswers</a></li>
	<li><a href="#" >Users</a></li>
	<li><a href="#" >Tags</a></li>
	<li><a href="#">Questions</a></li>
	<li><a class='current' href="#">Home</a></li>
	</ul>
</div>	
<div id='mainForm'></div>
</body>
</html>