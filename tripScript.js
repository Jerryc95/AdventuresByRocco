function changeNavbarOnScroll() {
  var mobileMenu = document.getElementById("mobile-menu");
  var navbar = document.getElementById("nav");
  var content = document.querySelector("body");
  if (window.scrollY > content.offsetTop) {
    navbar.classList.add("scrolled");
    mobileMenu.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled");
    mobileMenu.classList.remove("scrolled")
  }
}

window.addEventListener("scroll", changeNavbarOnScroll);

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateFloatingItems() {
  const floatingItems = document.querySelectorAll(".floating-item");
  floatingItems.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", animateFloatingItems);

function animateFloatingOffsetItems() {
  const floatingItems = document.querySelectorAll(".floating-offset-item");
  floatingItems.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add("show-offset-item");
    }
  });
}

window.addEventListener("scroll", animateFloatingOffsetItems);

function toggleGrid() {
  const toggleButton = document.getElementById("toggle");
  const grid = document.getElementById("toggle-grid");

  toggleButton.addEventListener("click", () => {
    if (grid.style.display === "none") {
      grid.style.display = "inline-grid";
      toggleButton.textContent = "Show Less";
    } else {
      toggleButton.textContent = "Show More";
    }
  });
}

window.onload = toggleGrid();

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.getElementById("nav-items");
  const nav = document.getElementById("nav")
  mobileMenu.addEventListener("click", () => {
    console.log("clicked");
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    nav.classList.toggle("active")
  });
}

window.onload = toggleMobileMenu();

