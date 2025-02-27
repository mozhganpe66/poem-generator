function displayPoem (repsonse){
    console.log("poem is generated");
    new Typewriter('#poem', {
        strings: repsonse.data.answer,
        autoStart: true,
        delay: 1,
        cursor: ""
    })
}

function generatePoem(event){
    event.preventDefault();

    let apiKey= "02ccbb242b049d619a5146ftbb339do7";
    let context ="You are romantic poem generator. Your mission is to write short poems about what user enters in the user instructions with a html format in 4 lines. Use the 'shecodes ai' sign in the end and NOT in the beginning and inside the <strong> tag. please dont use ``` in the poem and also seperate the lines with <br> tag. please sperate shecodes ai sign as well but not too much distance";
    let userInstructions = document.querySelector("#user-instructions");
    let prompt= `User instructions: write a poem about ${userInstructions.value} `;
    let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(displayPoem);
    let poemElement= document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="blink">  ⏳ Generating the Poem about ${userInstructions.value}</div>`
    console.log("poem is generating...");
    console.log(prompt)
    console.log(context)
}

let poemFormElement= document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);