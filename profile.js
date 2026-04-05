function saveProfile() {
    let profile = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        education: document.getElementById("education").value,
        address: document.getElementById("address").value
    };

    localStorage.setItem("profile", JSON.stringify(profile));

    alert("Profile Saved ✅");

    displayProfile();
}

function displayProfile() {
    let profile = JSON.parse(localStorage.getItem("profile"));

    if (!profile) return;

    document.getElementById("p_name").innerText = profile.name;
    document.getElementById("p_age").innerText = profile.age;
    document.getElementById("p_gender").innerText = profile.gender;
    document.getElementById("p_phone").innerText = profile.phone;
    document.getElementById("p_email").innerText = profile.email;
    document.getElementById("p_education").innerText = profile.education;
    document.getElementById("p_address").innerText = profile.address;
}

// Load on page open
displayProfile();