function displayWOD(response) {
  let answerEl = document.querySelector("#answer");
  answerEl.innerHTML = response.data.answer;

  new Typewriter("#answer", {
    strings: `${response.data.answer}`,
    autoStart: true,
  });
}

function generateWOD(event) {
  event.preventDefault();

  let instructions = document.querySelector("#request");
  let prompt = "Generate a WOD (workout of the day)";
  let context = `You are an experienced CrossFit athlete and coach. Use your knowledge and the ${instructions.value} 
  to present a WOD in a concise and schematic manner using **only plain HTML** without backticks or tags
   include a line break between movements. Make sure title font size is larger than the rest but still readable.
    Important: Do not include detailed movement descriptions. 
    Keep it clean, structured, and easy to read. 
    The response should consist of html elements only.
    Sign at the bottom as "Your AI coach" in red color`;
  let apiKey = "11edc9a3d0f3o475000at9446642fb9a";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let waitingEl = document.querySelector("#answer");
  waitingEl.classList.remove("hidden");

  waitingEl.innerHTML = `<div class="blink-me"><strong>Get ready to sweat 🏋🏽🏋🏽🏋🏽 </br>🦾🦾🦾The WOD is coming!</strong></div>`;

  axios.get(apiUrl).then(displayWOD);
}

let formEl = document.querySelector("#form");
formEl.addEventListener("submit", generateWOD);
