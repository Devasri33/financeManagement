document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
  
    // Simple validation
    if (username.trim() === "" || password.trim() === "") {
      document.getElementById('register-msg').textContent = "Please fill out all fields!";
      document.getElementById('register-msg').style.color = "red";
      return;
    }
  
    // Store credentials
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  
    document.getElementById('register-msg').textContent = "Registered successfully!";
    document.getElementById('register-msg').style.color = "green";
  
    // Optional: redirect to login after few seconds
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
  