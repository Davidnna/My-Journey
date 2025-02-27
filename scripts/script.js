const showMenu = document.getElementById("show-menu");
const nav = document.querySelector("ul");

// Show/Hide Navbar when clicked
function show() {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
        showMenu.textContent = "Click to Show Menu";
    } else {
        nav.style.display = "flex";
        showMenu.textContent = "Click to Hide Menu";
    }
}

// On window resize, ensure the navbar is handled appropriately.
window.addEventListener("resize", function() {
    if (window.innerWidth > 726) {
      nav.style.display = "flex";
      showMenu.textContent = "Click to Hide Menu";
    } else {
      nav.style.display = "none";
      showMenu.textContent = "Click to Show Menu";
    }
});