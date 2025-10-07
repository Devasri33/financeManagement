document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    const errorMsg = document.getElementById('error-msg');
  
    if (username === storedUsername && password === storedPassword) {
      // ✅ Successful login
      errorMsg.textContent = "";
      window.location.href = "index.html"; // change this to index.html if needed
    } else {
      // ❌ Incorrect credentials
      errorMsg.textContent = "Invalid username or password!";
      errorMsg.style.color = "red";
    }
  });
  