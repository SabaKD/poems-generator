
function displayPoem(response){
  new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 30,
  cursor: ""
});
}


function generatePoem(event){
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "4bc76te01aac743d12o764377f46072e";
  let context = "you are a romantic poem generator and like to make short poems and very strict about the instructions, instruction:your mission is to generate a 4 line (use a new line for each hemistich) poem";
  let prompt =` generate a poem with the word ${instructionInput.value}`
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement =document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
    
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);