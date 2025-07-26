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
