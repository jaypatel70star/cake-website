//menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("navbar").classList.toggle("active");
});

//profile drop down
document.getElementById("profile-link").addEventListener("click", function (e) {
    e.preventDefault();
    const dropdown = document.getElementById("profile-dropdown");
    dropdown.classList.toggle("show");

    const user = JSON.parse(localStorage.getItem("user"));

    if(!user) {
        dropdown.innerHTML = `<a href="login.html" style="text-decoration:none;">Login </a>or
                            <a href="register.html" style="text-decoration:none;">Register</a>`;
        return;
    }

    dropdown.innerHTML = `<div class="profile-box">
                    <p><strong>Username : </strong><span id="profile-username">${user.username}</span></p>
                    <p><strong>Mobile </strong><input type="text" id="profile-mobile" value="${user.mobile}"/></p>
                    <p><strong>City </strong><input type="text" id="profile-city" value="${user.city}"/></p>
                    <button onclick="saveprofile()">Save</button>
                    <button onclick="logout()">Logout</button></div>`;
});

function saveprofile() {
    const mobile = document.getElementById("profile-mobile").value;
    const city = document.getElementById("profile-city").value;
    const user = JSON.parse(localStorage.getItem("user")) || {};
    user.mobile = mobile;
    user.city = city;

    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile updated!");
}

function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("mobile");
    alert("You have been logged out.");
    window.location.href = "login.html";
}

//cake menu
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-button").addEventListener("click", function (e) {
    e.preventDefault();
    const menusection = document.getElementById("cake-menu");
    menusection.classList.toggle("show");
    });
});

//testimonials
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("testimonialform");
    const list = document.getElementById("testimonial-list");

    // Load existing from localStorage
    const stored = JSON.parse(localStorage.getItem("testimonials")) || [];
    stored.forEach(addTestimonialToDOM);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const stars = document.getElementById("stars").value;
        const message = document.getElementById("message").value;
        const name = document.getElementById("name").value;

        if (!stars || !message || !name) {
            alert("Please fill all fields");
            return;
        }

        const testimonial = { stars, message, name };
        addTestimonialToDOM(testimonial);

        stored.push(testimonial);
        localStorage.setItem("testimonials", JSON.stringify(stored));

        form.reset();
    });

    function addTestimonialToDOM({ stars, message, name }) {
        const div = document.createElement("div");
        div.className = "testimonial";
        div.innerHTML = `
            <p>${"⭐".repeat(stars)}</p>
            <p>${message}</p>
            <strong>— ${name}</strong>
        `;
        list.prepend(div); // latest on top
    }
});