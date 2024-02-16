
function generatePoem(event){
    event.preventDefault();
    new Typewriter('#poem', {
  strings: "Hello World",
  autoStart: true,
  delay: 10
});
}

let poemForm = document.querySelector("#poem-generator");
poemForm.addEventListener("submit", generatePoem);