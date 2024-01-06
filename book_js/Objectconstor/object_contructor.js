
// creating an object that contains book content

function Book(title, author, isbn, time)
{
    this.title = title;
    this.author = author;
    this.isbn = isbn
    this.time = time
}

// creating an object for implementation of all action in protypes

function UI_actions(){

}

// time generator

UI_actions.prototype.Time = function ()
{
    let today = new Date(),
        hr = today.getHours(),
        min = today.getMinutes(),
        clock = `${hr}:${min}`
        return clock;
}

// protype for each UI actions

UI_actions.prototype.addBooks = function(book)
{
    // creating element for each section of adding to the table
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X <span>${book.time}</span></a></td>`;
    
    // selecting the parent table
    const table = document.querySelector('table');
    
    // inserting always at the top of the table
    table.insertBefore(tr, table.firstElementChild.nextElementSibling);
}

//creating an error and sucess message
UI_actions.prototype.showErrors = function(msg, classN)
{
   const div = document.createElement("div"),
        con = document.querySelector(".form_field");

        // adding default design
        div.className = "new";

        // adding error msg type base on sucees or fail
        div.classList.add(classN);
        div.appendChild(document.createTextNode(msg));

     //inserting message
    con.insertBefore(div, con.firstElementChild.nextElementSibling)
    setTimeout(function(){
        document.querySelector('.new').style.display = "none";
    }, 2000)


}

// clearing fiels protype

UI_actions.prototype.clear = function ()
{
    const book = document.querySelector("#book").value = "",
    author = document.querySelector("#author").value = "",
   isbn =  document.querySelector("#isbn").value = "";

}

// removing element
UI_actions.prototype.removeitem = function (target)
{
    let us = new UI_actions();
        target.parentElement.parentElement.remove()
        us.showErrors(`Item with Isbn: ${target.parentElement.parentElement.lastElementChild.previousElementSibling.innerHTML} has been remove`, 'success')

}
// selecting the form

const form = document.querySelector('form')
form.addEventListener('submit', function(e)
{
     // creating an instance for UI_actions object
        const bookadd = new UI_actions();


    // geting all input value from the input field

    const book = document.querySelector("#book").value,
           author = document.querySelector("#author").value,
          isbn =  document.querySelector("#isbn").value;
          time = bookadd.Time()


    //validation

    if (book === '' || author === '' || isbn === "")
    {
        bookadd.showErrors("Please fill in the empty filed", "danger");
    }
    else{
        
        //checking have isbn filed input is not a number

        if (isNaN(isbn))
        {
            bookadd.showErrors("Please the isbn field must be a number", "danger");
            return
        }
             // creating an instance object for storing all value to the already created object
        const bookObj = new Book(book, author, isbn, time)
      // using the instance to call protype that  add them to the table
        bookadd.addBooks(bookObj)
        bookadd.showErrors("Book have been added successfully", "success");

        // clearing field
        bookadd.clear();

    }

 


    e.preventDefault();
})

// selecting the table to add event deligation to remove each indivdual child
let tab = document.querySelector('table');
tab.addEventListener('click', function (e) {
    if (e.target.className = "delete")
    {
        let act = new UI_actions();
        act.removeitem(e.target);
    }


})
see = new UI_actions();
console.log(see)






