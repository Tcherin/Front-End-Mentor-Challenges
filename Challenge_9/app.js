const btns = document.querySelectorAll(".arrow");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const answer = e.currentTarget.parentElement.parentElement.parentElement;
    console.log(answer);
  });
});

// const questions = document.querySelectorAll(".question");

// questions.forEach((question) => {
//   const button = question.querySelector(".question__button");
//   const questionText = question.querySelector(".question__title__text");
//   button.addEventListener("click", () => {
//     questions.forEach((item) => {
//       if(item !== question) {
//         item.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//   });

//   questionText.addEventListener("click", () => {
//     questions.forEach((item) => {
//       if(item !== question) {
//         item.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//   });
// });

// <article class="question">
//         <div class="question__title">
//           <p class="question__title__text">How many team members can I invite?</p>
//           <button class="question__button" aria-label="Show answer">
//             <span>
//               <img src="images/icon-arrow-down.svg" alt="">
//             </span>
//           </button>
//         </div>
//         <div class="question__text">
//           <p class="question__title__text">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
//         </div>
//       </article>
