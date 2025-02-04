function displayWOD(event) {
  event.preventDefault();
  let answerEl = document.querySelector("#answer");
  answerEl.innerHTML = "el perro de san roque....";
}

let formEl = document.querySelector("#form");
formEl.addEventListener("submit", displayWOD);
