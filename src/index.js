function generatePoem(event){
    event.preventDefault();
    
new Typewriter('#poem', {
    strings: "Roses are read, violets are blue, I am a poet, and I know it too!",
    autoStart: true,
    delay: 1,
    cursor: ""
})
}

let poemFormElement= document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);