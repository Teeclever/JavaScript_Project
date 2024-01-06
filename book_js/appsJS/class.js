// importing all nessary module

import {UI_actions} from "./UI_actions.js"
import {Storage} from "./storageEngineClass.js"



// class implementation data

// class for data valuess
class Book
{
    constructor (book, author, isbn, time)
    {
        this.title = book;
        this.author = author;
        this.isbn = isbn;
        this.time = time;
    }
}



/// load fromlocal storage

//storage instances
let loadStore = new UI_actions();

document.addEventListener('DOMContentLoaded', function () {
    Storage.loadToTheDom();
})


// selecting the form

const form = document.querySelector('form')
form.addEventListener('submit', function(e)
{
    

     // creating an instance for UI_actions object
        const bookadd = new UI_actions();
        /// store to localstorage
        let store = new Storage();

    // geting all input value from the input field

    const book = document.querySelector("#book").value,
          author = document.querySelector("#author").value,
          isbn =  document.querySelector("#isbn").value,
          clock = bookadd.Time();

    //validation

    if (book === '' || author === '' || isbn === "")
    {
        bookadd.showErrors("Please fill in the empty field", "danger");
    }
    else{
        const bookObj = new Book(book, author, isbn, clock)

        
        //checking have isbn filed input is not a number

        if (isNaN(isbn))
        {
            bookadd.showErrors("Please the isbn field must be a number", "danger");

            bookadd.clear();
            return
        }


    // using the instance to call protype that  add them to the table
          bookadd.addBooks(bookObj)

    // creating an instance object for storing all value to the already created object
    Storage.saveToStorage(bookObj);
    
//message
    bookadd.showErrors("Book have been added successfully", "success");
          

        // clearing input fields field
        bookadd.clear();

    }
    e.preventDefault();
})

// selecting the table to add event deligation to remove each indivdual child
let tab = document.querySelector('table');
tab.addEventListener('click', function (e) {
  
    if (e.target.className == "delete")
    {
        let act = new UI_actions();
        // removing from with UI_actions
            act.removeItem(e.target);    
    
            // removing from from local storage with storage class implementation
            Storage.removeFromStorage(e.target.parentElement.parentElement.lastElementChild.previousElementSibling.innerHTML);
    }

})


