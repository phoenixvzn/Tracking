<!DOCTYPE html>
<%@page import="com.app.web.tracker.constant.Constant"%>
<html >
  <head>
    <meta charset="UTF-8">
    <title>Tracker Verify</title>
    <%@include file="metaInfo.jsp" %>
  </head>

  <body>

    
<!-- Form Mixin-->
<!-- Pen Title-->
<div class="pen-title">
  
</div>
<!-- Form Module-->
<div class="module form-module">
  <div class="toggle"><i class="fa fa-times fa-pencil"></i>
    
  </div>
  <div class="form">
    <h2>One-Time Password</h2>
    <div class='errMessage'>${errMsg}</div></td>
    <form action='<%=Constant.MAIN_URI%>/app/verify' id='verifyForm' method="post">
      <input type="password" placeholder="Password" name="password"/>
      <button>Verify</button>
    </form>
  </div>
  <!--  div class="form">
    <h2>Create an account</h2>
    <form>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <input type="email" placeholder="Email Address"/>
      <input type="tel" placeholder="Phone Number"/>
      <button>Register</button>
    </form>
  </div-->
  <div class="cta"><a href="#"><u>Resend</u></a></div>
</div>
  </body>
</html>
