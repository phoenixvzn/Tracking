<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8">
    <title>Tracker Login</title>
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
    <h2>Login to your account</h2>
    <div class='errMessage'>${errMsg}</div></td>
    <form action="login" method="post" id="loginForm">
      <input type="text" name="name" placeholder="Username"/>
      <input type="password" name="pwd" placeholder="Password"/>
      <button>Login</button>
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
  <div class="cta"><a href="http://andytran.me">Forgot your password?</a></div>
</div>
    <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

        <script src="js/index.js"></script>

    
    
    
  </body>
</html>
