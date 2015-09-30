<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<html>
<head>
<title>Tracker</title>
<%@include file="metaInfo.jsp" %>
</head>
<body>

<div class='header'>
	Tracker<br>
	<div style='float:right;margin-right:20px'>${name}</div>
	<div style='clear:both'></div>
</div>

<div class="menuContainer">

 <form:form action="login" method="post">
 <table align="center">
  <tr>  <td align='right' colspan="3"><div>${errMsg}</div></td></tr>
   <tr><td>User name</td>
   <td> : </td>
   <td><input type="text" name="name"> </td></tr>
   <tr><td>Password</td>
   <td> : </td> <td><input type="password" name="pwd"/></td></tr>
   <tr><td align="center" colspan="3"><input type="submit"></td></tr>
  </table> 
  </form:form>
  
</div>	
</body>
</html>