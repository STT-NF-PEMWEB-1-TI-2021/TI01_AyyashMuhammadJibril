function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "mire" && password == "ti") {
      alert("Welcome back, Mire!");
    } else {
      alert("Login Failed");
      return false;
    }
  }

function hint() {
  alert("The Username/Password are as follows: mire/ti")
}