let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn")

const url = "https://api.quotable.io/random"; // capturing the API in a constant

let getQuote = () => {
    fetch(url) // fetching the API content
    .then((data) => data.json()) // then method helps telling the api to slow down
    .then((item) => {
        console.log(item.content);
        console.log(item.author);
        quote.innerText = item.content;
        author.innerText = item.author;

    });
}


window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);

// conditional statements part 
var today = new Date();
var time = today.getHours();
var greet;

if (time > 18) {
  greet = 'Good evening, kind user!';
} else if (time > 12) {
  greet = 'Good afternoon, kind user!';
} else if (time >= 0) {
  greet = 'Good morning, kind user!!';
} else {
  greet = 'something wrong';
}

var show = document.getElementById('message');
show.textContent = greet;