let slideIndex = 1;

showSlide(slideIndex);

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function changeNavbarOnScroll() {
    const mobileMenu = document.getElementById("mobile-menu");
  var navbar = document.getElementById("nav");
  var content = document.querySelector("body");
  if (window.scrollY > content.offsetTop) {
    navbar.classList.add("scrolled");
    mobileMenu.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled");
    mobileMenu.classList.remove("scrolled")
  }
  console.log("scrolled")
}

window.addEventListener("scroll", changeNavbarOnScroll);

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  fetch("https://mail-server-production.up.railway.app/adventures-by-rocco/testimonal", {
      method: "POST",
      body: new FormData(this)
  })
  .then(response => {
      if (response.ok) {
          window.location.href = "index.html"; // Redirect on success
      } else {
          // Handle error
      }
  })
  .catch(error => {
      // Handle error
  });
});

function toggleMobileMenu() {
  console.log('clicked')
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
  
