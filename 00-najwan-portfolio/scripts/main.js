// Animations
AOS.init({
  anchorPlacement: "top-left",
  duration: 1000,
});

// Add your javascript here
// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
