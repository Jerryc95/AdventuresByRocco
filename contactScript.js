function changeNavbarOnScroll() {
  var navbar = document.getElementById("nav");
  var content = document.querySelector("body");
  if (window.scrollY > content.offsetTop) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
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

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.getElementById("nav-items");
  const nav = document.getElementById("nav");
  mobileMenu.addEventListener("click", () => {
    console.log("clicked");
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

// function submitForm() {
  
//   const form = document.getElementById("contact-form")
//   const thankYou = document.getElementById("contact-thank-you")
//   form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log("submitForm function called");
//     form.style.display = "none";
//     thankYou.style.display = "block"
//     return false;
//   })
// }

window.onload = toggleMobileMenu();
