const parallax = document.querySelector('.parallax-div')

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.6 + "px";
})