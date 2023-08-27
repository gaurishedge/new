document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-button");
    const tournamentsSection = document.getElementById("tournaments-section");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Perform authentication logic here
        const username = /* Get the username value */admin;
        const password = /* Get the password value */1234;

        // Simulate authentication for demonstration
        if (username === "admin" && password ===1234) {
            // Hide login section and show tournaments section
            document.querySelector(".login-section").style.display = home.html;
            tournamentsSection.style.display = "block";
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
