document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");
    var errorMessage = document.getElementById("errorMessage");
  
    document.getElementById("switchToSignUp").addEventListener("click", function(event) {
      event.preventDefault();
      loginForm.style.display = "none";
      signupForm.style.display = "block";
      errorMessage.style.display = "none";
    });
  
    document.getElementById("switchToLogin").addEventListener("click", function(event) {
      event.preventDefault();
      loginForm.style.display = "block";
      signupForm.style.display = "none";
      errorMessage.style.display = "none";
    });
  
    document.getElementById("login").addEventListener("submit", function(event) {
      event.preventDefault();
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      // Perform login logic here
      // For demonstration purposes, I'll just display an error message
      errorMessage.textContent = "Invalid username or password.";
      errorMessage.style.display = "block";
    });
  
    document.getElementById("signup").addEventListener("submit", function(event) {
      event.preventDefault();
      var newUsername = document.getElementById("newUsername").value;
      var newPassword = document.getElementById("newPassword").value;
      // Perform sign up logic here
      // For demonstration purposes, I'll just display an error message
      errorMessage.textContent = "Failed to sign up.";
      errorMessage.style.display = "block";
    });
  });
  
  
  
  
  document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simulated authentication logic (replace with actual authentication logic)
    if (username === "user" && password === "password") {
      // Redirect to dashboard or perform other actions upon successful sign-in
      alert("Sign in successful!");
    } 
  });
  