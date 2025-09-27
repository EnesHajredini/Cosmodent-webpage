const button = document.querySelector(".menu-icon");
const contactButton = document.querySelector(".contact-link-dropdown");

contactButton.addEventListener("click", (event) => {
  dropDownMenu();
});

button.addEventListener("click", (event) => {
  dropDownMenu();
});

function dropDownMenu() {
  const x = document.getElementById("dropdownid");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
