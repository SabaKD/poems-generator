
function generatePoem(event){
    event.preventDefault();
    new Typewriter('#poem', {
  strings: "Hello World  kwjfkjehfkejf",
  autoStart: true,
  delay: 30
});
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);