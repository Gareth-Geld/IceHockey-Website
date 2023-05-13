$(document).ready(function() {
    NavMenu();
  });

//Function dynamically creates dropdowns When the other button is hovered over
function NavMenu(){
    const menu = document.createElement("div");
    menu.id = "Menu";
    menu.classList.add("menu-container");
    menu.style.display = "none";

    const menuSel = document.createElement("div");
    menuSel.id = "MenuSel";
    menuSel.classList.add("menu-section");


    const ul = document.createElement("ul");
    const contact = document.createElement("button");
    contact.classList.add("btndropped");
    contact.setAttribute("onclick", "window.location.href='Contact.html'");
    contact.innerHTML = "Contact";

    const gallery = document.createElement("button");
    gallery.classList.add("btndropped");
    gallery.setAttribute("onclick", "window.location.href='#gallery'");
    gallery.innerHTML = "Gallery";

    ul.appendChild(gallery);
    ul.appendChild(contact);
    menuSel.appendChild(ul);
    menu.appendChild(menuSel);
     
    $(document).on('mouseenter', '.btnDrop', function() {
      const location = document.createElement("div");
      location.style.marginLeft = "42%";
      location.classList.add("menu-container");
      location.style.display = "none";
      location.appendChild(menuSel);
      $(this).append(location);
      $(location).slideDown();
      $(this).find('ul').slideDown();
    });
    $(document).on('mouseleave', '.btnDrop', function() {
      const location = $(this).find('.menu-container');
      $(location).slideUp(400, function() {
        $(location).remove();
      });
    });
  }
  //Random Colour Generator
  function changeBackgroundColour() {
    const colours = ["red", "green", "blue", "orange", "purple", "pink", "yellow", "none"];
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    //Hiding and showing using jQuery
    if (randomColour == "none") {
      $(".box1").css("visibility", "hidden");
    }else{
      $(".box1").css("visibility", "visible");
      $(".box1").css("background-color", randomColour);
    }
  }
  //Animation for the homescreen box
  //used this source : https://codepen.io/Web_Cifar/pen/JjXrLRJ?ref=morioh.com&utm_source=morioh.com 
  //Just for an idea on how todo it :)
  $(document).ready(function() {
    // Set up initial variables
    //Get box and Animation Box
    let box = $('.box1');
    let animationBox = $('.animationBox');
    //Find the edges of the box and the Animation Box
    let maxX = animationBox.width() - box.width();
    let maxY = animationBox.height() - box.height();
    //This is where the box will start its animation 
    let x = 0;
    let y = 0;
    //This controls the speed of the box and its direction it will move
    let dx = 5;
    let dy = 5;
  
    // Animate the box
    function animateBox() {
      // This updates the x and y positions of the box by adding the speed in each direction.
      x += dx;
      y += dy;
      
      // Check for collision with edges and reverese direction when they touch
      if (x < 0 || x > maxX) {
        dx = -dx;
        changeBackgroundColour();
      }
      if (y < 0 || y > maxY) {
        dy = -dy;
        changeBackgroundColour();
      }
      
      // This updates the position of the box on the page by setting its CSS 'top' and 'left' properties.
      box.css({top: y, left: x});
  
      // This requests that the 'animateBox' function be called again on the next frame of the animation, creating a continuous loop.
      //Found this here : https://www.w3schools.com/jsref/met_win_requestanimationframe.asp 
      window.requestAnimationFrame(animateBox);
    }
    
    // This calls the 'animateBox' function to start the animation.
    animateBox();
  });