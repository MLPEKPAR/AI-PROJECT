function displayWOD(response) {
  let answerEl = document.querySelector("#answer");
  answerEl.innerHTML = response.data.answer;
}

function generateWOD(event) {
  event.preventDefault();

  let instructions = document.querySelector("#request");
  let prompt = "Propose a single WOD (workout of the day)";
  let context = `You are an experienced CrossFit athlete and coach. Use your knowledge and the ${instructions.value} 
  to present a WOD in a concise and schematic manner using basic HTML. include a line break between movements.
  Important: Do not include detailed movement descriptions. Keep it clean, structured, and easy to read`;
  let apiKey = "11edc9a3d0f3o475000at9446642fb9a";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWOD);
}

let formEl = document.querySelector("#form");
formEl.addEventListener("submit", generateWOD);
