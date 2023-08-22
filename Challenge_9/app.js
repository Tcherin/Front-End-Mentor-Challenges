const btns = document.querySelectorAll(".arrow");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const answer = e.currentTarget.parentElement.parentElement.parentElement;
  });
});
