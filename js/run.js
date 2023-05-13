//Capstone Porject 3

//Also got the aesthetics and images Idea from - 
//https://www.youtube.com/watch?v=8MXA07BZLqo&ab_channel=NiklasZiermann I knew I wanted todo something like this just wasnt exactly sure how to execute it :) 

//This seems very innaficent Repeating code like this but It would work any other way - If you have any solution for this that would be great ! :)  

//This is an event listener looking for the Div with the ID wrapper
//This is just a way to get every button to execute when clicked 
//This function plays a gif for a short time when a button is clicked
//Also just checks if it is a button
window.addEventListener("DOMContentLoaded", (event) => {
const wrapper = document.getElementById('wrapper');

const wrapper2 = document.getElementById('wrapper2');

const wrapper3 = document.getElementById('wrapper3');

const wrapper4 = document.getElementById('wrapper4');

const wrapper5 = document.getElementById('wrapper5');

const wrapper6 = document.getElementById('wrapper6');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  document.getElementById('gif').style.visibility = "visible";

  setTimeout(function(){
    document.getElementById('gif').style.visibility = "hidden";
  }, 350);
})

wrapper2.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    document.getElementById('gif').style.visibility = "visible";
  
    setTimeout(function(){
      document.getElementById('gif').style.visibility = "hidden";
    }, 350);
  })

  wrapper3.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    document.getElementById('gif').style.visibility = "visible";
  
    setTimeout(function(){
      document.getElementById('gif').style.visibility = "hidden";
    }, 350);
  })

  wrapper4.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    document.getElementById('gif').style.visibility = "visible";
  
    setTimeout(function(){
      document.getElementById('gif').style.visibility = "hidden";
    }, 350);
  })

  wrapper5.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    document.getElementById('gif').style.visibility = "visible";
  
    setTimeout(function(){
      document.getElementById('gif').style.visibility = "hidden";
    }, 350);
  })

  wrapper6.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    document.getElementById('gif').style.visibility = "visible";
  
    setTimeout(function(){
      document.getElementById('gif').style.visibility = "hidden";
    }, 350);
  })
});
