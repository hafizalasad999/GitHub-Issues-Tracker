document.getElementById("signIN-btn").addEventListener("click", function () {
    const InputUserName = document.getElementById("input-userName");
    const userName = InputUserName.value;
    console.log(userName);
    const inputPassword = document.getElementById("input-password");
    const password = inputPassword.value;
    console.log(password);
    if (userName == "admin" & password == "admin123") {
        alert("Sign In Success")
        window.location.assign("/HomePage.html");
    }
    else {
        alert("Sign In Failed");
        return;
    }
});