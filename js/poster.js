//Variables
let posts = [];
let books = [];
let bookIDs = [];

let count = 0;

let bookID = null;

//Checking session storage for posts array - Then displaying if found the like heart icon
$(document).ready(function() {
  if (sessionStorage.getItem("RunBefore") === null) {
    sessionStorage.setItem("posts", JSON.stringify(posts));
    sessionStorage.setItem("RunBefore", true);  
  } else {
    posts = JSON.parse(sessionStorage.getItem("posts"));
    console.log(posts);

   
    // Loop through the stored posts array (Liked Posts)
    for (let i = 0; i < posts.length; i++) {
      const postID = posts[i];
      $('#' + postID).prepend('<i class="fas fa-heart fa-xs"></i>');
      let heart = $('#' + postID).find('.fa-heart');
      $(heart).addClass('clicked');
      $(heart).css("color", "red");
    }
  }
});
//Checking session storage for bookID array - Then displaying if found the bookmark icon
$(document).ready(function() {
  if (sessionStorage.getItem("RunBefore2") === null) {
    sessionStorage.setItem("bookIDs", JSON.stringify(bookIDs));
    sessionStorage.setItem("RunBefore2", true);  
  } else {
    bookIDs = JSON.parse(sessionStorage.getItem("bookIDs"));

    // Loop through the Bookmark posts array
    for (let i = 0; i < bookIDs.length; i++) {
      const bookID = bookIDs[i];
      $('#' + bookID).prepend('<span class="fas fa-bookmark fa-xs"></span>');
      let booker = $('#' + bookID).find('.fa-bookmark');
      $(booker).addClass('clicked');
      $(booker).css("color", "yellow");
    }
  }
});
//Checking session storage for books array -
$(document).ready(function() {
  if (sessionStorage.getItem("RunBefore3") === null) {
    sessionStorage.setItem("books", JSON.stringify(books));
    sessionStorage.setItem("RunBefore3", true);  
  } else {
    books = JSON.parse(sessionStorage.getItem("books"));
    console.log(books);
    }
});

//Checking session storage for count array - Then displaying The amount of bookmarked items in the top right
$(document).ready(function() {
  if (sessionStorage.getItem("RunBefore4") === null) {
    sessionStorage.setItem("count", JSON.stringify(count));
    sessionStorage.setItem("RunBefore4", true);  
  } else {
    count = JSON.parse(sessionStorage.getItem("count"));
    const counter = document.getElementById("Counter");
    counter.innerText = count; 
    console.log(count);
    }
});

//This displays the fa fa icons on mouse enter and removes them on mouse leave
//Also changes colours of Heart and book marks when clicked
$(document).ready(function() {
  $(document).on('mouseenter', '.post', function() {
    $(this).css("border-width", "10px"); 
    $(this).prepend('<i class="fas fa-heart fa-xs"></i>');
    $(this).prepend('<span class="fas fa-bookmark fa-xs"></span>');
  });
  $(document).on('mouseleave', '.post', function() {
    $(this).css("border-width", "thick");
    $(this).find('.fa-heart').not('.clicked').remove();
    $(this).find('.fa-bookmark').not('.clicked').remove();
  });
  $(document).on('click', '.fa-heart', function() {
    if ($(this).hasClass("clicked")) {
      $(this).css("color", "white");
      $(this).removeClass("clicked");

      let postIDR = $(this).parent().attr('id');
      let index = $.inArray(postIDR, posts);
    if ($.inArray(postIDR, posts) != -1) {
      posts.splice(index, 1);
      sessionStorage.setItem("posts", JSON.stringify(posts));
    }

    }else{
    $(this).toggleClass('clicked');
    $(this).css("color", "red");

    let postID = $(this).parent().attr("id");
    if ($.inArray(postID, posts) === -1) {
      posts.push(postID);
      sessionStorage.setItem("posts", JSON.stringify(posts));
    }
    }

  });
  //Gets the bookmarked items when they are clicked on saved to session storage
  $(document).on('click', '.fa-bookmark', function() {
    if ($(this).hasClass("clicked")) {
      $(this).css("color", "white");
      $(this).removeClass("clicked");

      let bookIDR = $(this).parent().attr('id');
      let divHTML2 = $("#" + bookIDR)[0].outerHTML;; // Get the outerHTML of the div
      console.log(bookIDR);
      let index = $.inArray(bookIDR, bookIDs);
      if ($.inArray(bookIDR, bookIDs) !== -1) {
        bookIDs.splice(index, 1);
        counterMinus();
        sessionStorage.setItem("bookIDs", JSON.stringify(bookIDs));
      }
      console.log(divHTML2);
      console.log(bookIDR);
      //Needed a method to get the index of the stored Div items in the array - Struggled with this.
      //used : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex 
      let index2 = books.findIndex(elem => elem.includes(`id="${bookIDR}"`));
      console.log(index2);
      if (index2 !== -1) {
        books.splice(index2, 1);
        sessionStorage.setItem("books", JSON.stringify(books));
      }    
    }else{
    $(this).toggleClass('clicked');
    $(this).css("color", "yellow");

    //This is the Div element being placed in books array
    bookID = $(this).parent().attr("id"); // Get the id of the parent div
    let $div = $("#" + bookID);
    let divHTML = $div[0].outerHTML;; // Get the outerHTML of the div
    console.log(divHTML);
    if ($.inArray(divHTML, books) === -1) {
      console.log("This is DivHTML "+divHTML);
      books.push(divHTML);
      sessionStorage.setItem("books", JSON.stringify(books));
    }
    //This is the Book ID being placed in the bookIDs array
    if ($.inArray(bookID, books) === -1) {
      console.log(bookID);
      bookIDs.push(bookID);
      counterPlus();
      sessionStorage.setItem("bookIDs", JSON.stringify(bookIDs));
    }
    }
  });
});


//Counter functions increase and decrease bookmark counter - displayed in the top right
function counterPlus(){
  const counter = document.getElementById("Counter"); 
  count++;
  counter.innerText = count;
  sessionStorage.setItem("count", JSON.stringify(count));
}

function counterMinus(){
  const counter = document.getElementById("Counter"); 
  count--;
  counter.innerText = count;
  sessionStorage.setItem("count", JSON.stringify(count));
}


  