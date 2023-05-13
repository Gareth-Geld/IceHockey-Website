//Variables 
let stoper = false;

//This function displays the bookmarked articles found in the session storage - Books 
//This was tricky as there were a few type errors to deal with 
//Dynamically created bootstrap grid inorder to display neatly
$(document).ready(function() {
  const books = JSON.parse(sessionStorage.getItem('books'));
  if (books !==null) {
    console.log(books);
    const container = document.getElementById("divContent");
    for (let i = 0; i < books.length; i += 4) {
      const row = document.createElement("div");
      row.classList.add("row");
      container.appendChild(row);
      let stoper = false; // reset stoper to false for each new row
      for (let j = 0; j < 4; j++) {
        const col = document.createElement("div");
        col.classList.add("col");
        row.appendChild(col);
         //Because the array was not a DOM Node and rather a html element so needed todo the below inorder to get it to display correctly
         //used :https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment

        const div = document.createRange().createContextualFragment(books[i+j]);
        if (div.firstElementChild){
          col.appendChild(div);
        }else{
          console.log("stoper has RAN");
          stoper = true;
          break;
        }
      }
      const spacer = document.createElement("div");
      spacer.classList.add("spacer");
      row.appendChild(spacer);
      if (stoper) {
        break;
      }
    }
  } else {
    console.log("The array is empty");
  }
});