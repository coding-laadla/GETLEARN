// REGISTER USER
function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (!name || !email || !password || !role) {
        alert("Please fill all fields");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("User already exists");
        return;
    }

    const user = { name, email, password, role };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Registration successful!");
    window.location.href = "login.html";
}

// LOGIN USER
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
        alert("User not found");
        return;
    }

    const user = JSON.parse(storedUser);

    if (user.password === password) {
        alert("Welcome " + user.name + " 🎉");
        window.location.href = "index.html";
    } else {
        alert("Incorrect password");
    }
}

// Open topic page
function openTopic(page) {
    window.location.href = page;
}

// Start Learning popup
function startLearning() {
    alert("Welcome to GETLEARN 😊\nKindly Register to continue learning.");
}

function toggleMenu() {
    const menu = document.getElementById("menuDropdown");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Close menu if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('span')) {
        const menu = document.getElementById("menuDropdown");
        if (menu) {
            menu.style.display = "none";
        }
    }
}

function changePassword() {
    const current = document.getElementById("currentPassword").value;
    const newPass = document.getElementById("newPassword").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (!current || !newPass || !confirm) {
        alert("Please fill all fields.");
        return;
    }

    if (newPass !== confirm) {
        alert("New passwords do not match.");
        return;
    }

    alert("Password updated successfully!");
}

function redirectToDashboard(event) {
    event.preventDefault(); // prevent page reload

    // Optional: you can validate email/password here
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Please enter email and password");
        return;
    }

    // Redirect to dashboard
    window.location.href = "dashboard.html";
}