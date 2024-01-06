
//class for UI_actions for performing actions on the dom


export class UI_actions
{
    //add books methods
    addBooks(book)
    {

    // creating element for each section of adding to the table
    const btn = document.querySelector('#btn')
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

    //time  methods implementation

   Time()
    {
        let today = new Date(),
        hr = today.getHours(),
        min = today.getMinutes(),
        clock = `${hr}:${min}`
        return clock;
    }

    /// show and display errors methods at the top

    showErrors(msg, classN)
    {
        this.removeerr()
        const div = document.createElement("div"),
        btn = document.querySelector('#btn'),
        con = document.querySelector(".form_field");

        // adding default design
        div.className = "new";



        // adding error msg type base on sucees or fail
        div.classList.add(classN);
        div.appendChild(document.createTextNode(msg));
        // btn.disabled = true

     //inserting message
    con.insertBefore(div, con.firstElementChild.nextElementSibling)
        
    setTimeout(this.removeerr, 2000);

    }
    
    removeerr()
    {
        const hold = document.querySelector('.new');
        if (hold)
        {
            hold.remove()
        }

    }

    //clear each input field methods
    clear()
    {
        const book = document.querySelector("#book").value = "",
        author = document.querySelector("#author").value = "",
       isbn =  document.querySelector("#isbn").value = "";
    }

    removeItem(target)
    {
        // from dynamically from the list on page 
    
            target.parentElement.parentElement.remove();

            // UI_ action classs for error message

            let us = new UI_actions();
    
            //showing error message
            us.showErrors(`Item with Isbn:${target.parentElement.parentElement.lastElementChild.previousElementSibling.innerHTML} has been remove`, 'success')
    
    }
}


