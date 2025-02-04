function displayWOD(response) {
  let answerEl = document.querySelector("#answer");
  answerEl.innerHTML = response.data.answer;
}

function generateWOD(event) {
  event.preventDefault();

  let instructions = document.querySelector("#request");
  let prompt = "Propose a single WOD (workout of the day)";
  let context = `You are an experienced CrossFit athlete and coach. Use your knowledge and the ${instructions.value} to present a WOD in a concise and schematic manner. Follow this exact format:

WOD Title: "Workout Name"
Workout Type & Time Domain (e.g., "For Time," "AMRAP 12 min," "EMOM 10 min")

Exercise 1 (Reps/Load)
Exercise 2 (Reps/Load)
Exercise 3 (Reps/Load)
(Optional: Brief additional notes like rest periods or scaling instructions in one line, if necessary)
⚠️ Important:

Do not include detailed movement descriptions.
Keep it clean, structured, and easy to read.
Use bold formatting for exercise names and key details (e.g., weights, reps, time)`;
  let apiKey = "11edc9a3d0f3o475000at9446642fb9a";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWOD);
}

let formEl = document.querySelector("#form");
formEl.addEventListener("submit", generateWOD);
