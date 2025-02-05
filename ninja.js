
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password);

    alert("Login successful! ✅(Samidoh Tech Academy✅✅✅✅✅)");
});

