document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("navbar").classList.toggle("active");
});

const accountMenu = document.getElementById("account-menu");
const isloggedin = localStorage.getItem("user");
accountMenu.innerHTML = isloggedin ? `<a href="#" onclick="logout()">Logout</a>` : `<a href="login.html">Login</a><a href="register.html">Register</a>`;

function logout() {
    localStorage.removeItem("user");
    alert("You have been logged out.");
    window.location.href = "login.html";
}

function toggledropdown(e) {
    e.preventDefault();
    accountMenu.classList.toggle("show-dropdown");
}

const menutoggle = document.getElementById("menu-toggle");
const navbar = getElementById("navbar");

menutoggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.addEventListener("click", function (e) {
    if(!this.document.getElementById("account-dropdown").contains(e.target)) {
        accountMenu.classList.remove("show-dropdown");
    }
});
