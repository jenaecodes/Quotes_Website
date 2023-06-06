"use strict";

const myQuote = document.getElementById("myQuote");

//Event Listener
const myButton = document.getElementById("quoteBTN");
myButton.addEventListener("click", DisplayQuote);


//Create a f(x) to fecth api data and display image
function DisplayQuote() {

    // alert('This button works.'); //Testing the button - it works!

    //Fetch the data
    const baseURL = "https://programming-quotesapi.vercel.app/api/random";
    //You can declare the url and CHANGE IT later on, rather than replacing every URL 

    fetch(baseURL)
    .then(response => response.json())
    .then(quote => {
        //Write a conditional that checks API, and outputs that its busy 
        myQuote.innerHTML = `"${quote.quote}"\n - ${quote.author}`
    })
}


function DisplayMeme() {
    // Save the API Endpoint URL
    const base_URL = "https://api.imgflip.com/get_memes";
    const myMeme = document.getElementById("myMeme");
  
    fetch(base_URL)
      .then((response) => response.json()) // Capture the response info and turn it into a JSON object
      .then((object) => {
        //Write a conditional that checks API, and outputs that its busy
        //   console.log(object.success);
        //    console.log(object.data);
        myMeme.src = object.data.memes[Math.floor(Math.random() * 100)].url;
        // console.log(object.data.memes[0]);
      });
  }