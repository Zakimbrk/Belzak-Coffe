// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika coffe menu di klik
document.querySelector("#coffe-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const coffe = document.querySelector("#coffe-menu");
document.addEventListener("click", function (e) {
  if (!coffe.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

