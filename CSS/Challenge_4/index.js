const card1 = document.querySelector(".card card-1");
const card2 = document.querySelector(".card card-2");
const submitButton = document.getElementsByClassName("submit");
const rates = document.querySelectorAll(".rating-option");

submitButton.addEventListener("click", () => {
  card1.classList.remove("hidden");
  card2.style.display = "none";
});

submitButton.addEventListener("click", () => {
  card2.classList.add("hidden");
  card1.style.display = "block";
});
