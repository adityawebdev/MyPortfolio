const toggleButton = document.getElementsByClassName("toggle-btn")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
const hl = document.getElementById("hl");
const sl = document.getElementById("sl");
const wl = document.getElementById("wl");
const cl = document.getElementById("cl");
const al = document.getElementById("al");
const audio = document.getElementById("audio");

al.addEventListener("click", () => {
  // navLinks.classList.toggle("active");
  audio.play();

  cl.animate([{ transform: "scale(2)" }, { transform: "scale(1)" }], {
    delay: 22000,
    duration: 1000,
    iterations: 10,
    easing: "linear",
  });
});

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
hl.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
sl.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
wl.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
cl.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
