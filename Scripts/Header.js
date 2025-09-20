
  const button = document.querySelector(".menu-icon");

  button.addEventListener("click", (event) => {
    myFunction();
  });

function myFunction() {
  const x = document.getElementById("dropdownid");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
