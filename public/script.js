const darkToggle = document.querySelector(".toggle-dark");

darkToggle.addEventListener("click", function (event) {
  event.preventDefault();
  document.documentElement.classList.toggle("dark");
});
