document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("navbar").classList.toggle("active");
});

const accountMenu = document.getElementById("account-menu");
const isloggedin = localStorage.getItem("user");
accountMenu.innerHTML = isloggedin ? `<a href="#" onclick="logout()">Logout</a>` : `<a href="login.html">Login</a><a href="register.html">Register</a>`;

function toggledropdown(e) {
    e.preventDefault();
    accountMenu.classList.toggle("show-dropdown");
}

function logout() {
    localStorage.removeItem("user");
    alert("you have been logged out.");
    window.location.href = "login.html";
}

document.addEventListener("click", function(e) {
    const dropdown = document.getElementById("account-dropdown");
    if(!dropdown.contains(e.target)) {
        accountMenu.classList.remove("show-dropdown");
    }
});

//cake menu
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-button").addEventListener("click", function (e) {
    e.preventDefault();
    const menusection = document.getElementById("cake-menu");
    menusection.classList.toggle("hidden");
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
