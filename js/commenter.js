//Variables 
//Arrays
let arrComments = [];
//Used this as a way to keep each comment section unique to its url - So that there wasnt 1 comment section accross the whole site XD
const url = window.location.href;

//checks session storage if it exists displays comments
$(document).ready(function() {
  if (sessionStorage.getItem(url) === null) {
    sessionStorage.setItem(url, JSON.stringify(arrComments));
  } else {
    arrComments = JSON.parse(sessionStorage.getItem(url));
    console.log(arrComments);
    for (let i = 0; i < arrComments.length; i++) {
      const p = document.createElement("p");
      const display = document.getElementById("commentDisplay");
      p.classList.add("comment");
      p.innerHTML = arrComments[i];
      display.appendChild(p);
    }
  }
});

//function that gets the comment in the input field and creates and appends a paragraph to the commentDisplay div
function post() {
  const input = document.getElementById("comment");
  const comment = input.value;
  const display = document.getElementById("commentDisplay");
  const p = document.createElement("p");
  p.classList.add("comment");
  p.innerHTML = comment;
  display.appendChild(p);
  arrComments.push(comment);
  sessionStorage.setItem(url, JSON.stringify(arrComments));
}