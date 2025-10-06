# Project title: 
Poem-generator using AI. 

# What the project does:
This project generates and displays short poem using AI api. it generates based on the context and prompt we give to AI. In this project our context is romantic and short poem. It generates 4 sentences in the form of HTML because we give the context like this. If we gave to generate long sentences, then it performed based on that.
So here we use the concept of prompt engineering. The use case of this project can be if some users want to generate a song or poem based on the topic they are thinking,
it can be useful to use this project. 

# How the project works: 
In this project, we use vanilla JavaScript with html and CSS. The way it works is we frist define our structure with index.html file, then we add index.js file which consitst of two functions. In the html file, we defined a form which has a text input with submit button. In the text input, we should use one word topic anything like flower as an example. and then when we click on the submit button, it goes to AI Api of shecodes and gets repsonse from there in sort of a poem based on how we deifned our context and prompt and generates it and shows it in the form of Html with 4 sentences nad break between them. In the javascript file, we select our input and then when we click on submit button, it listen to submit event and trigers generate poem function. 

In generate poem function, we define the context and prompt and we send http get request to AI API and then when we get the response from there, it trigers display poem function to dispaly the poem.

In display poem function, we use typewriter effect or library to show the text in an attractive and userfriendly way to users. 

We use css file for make our project looks better. 

# Features 🚀: 
- Search engine
- generate poem using AI api
- Dispaly poem in an attrictive way using Typewriter effect 

# instalation 📦:
instructions on how to install this project in your local machine:

## Clone the project from github using below instruction in your computer terminal:
git clone https://github.com/mozhganpe66/poem-generator.git

## change your directory to the desired location you would like to clone this repository using:

cd project-name

## open visual studio code and open the folder where you cloned your project: 

vscode => file => open folder

## right click on the html file:
index.html => rightclick and select from menu=> Reveal in file explorer

## open the index.html file and see the html file in the browser
after revealing the html file in the file explorer, you can double-click on it and it opens up the html file so you can see how the project works(You run the project)




