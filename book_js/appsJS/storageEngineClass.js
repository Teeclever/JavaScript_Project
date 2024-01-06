

/// class for storage to localstorage

export class Storage
{

    // method that load from local storage 
    static loadFromStorage()
    {
        let load;
        if (localStorage.getItem('books') != null)
        {
            load = JSON.parse(localStorage.getItem('books'))
        }
        else{
            load = []
        }

        return load;
    }

    // method that save to localstoragwe
    static saveToStorage(books)
    {
        // loading from storage before saving 
       let save = this.loadFromStorage();

        save.push(books)


        localStorage.setItem('books', JSON.stringify(save));
    }

    // A static method that load loacal storage and update to the Dom
    static loadToTheDom()
    {
        //lpading from storage
        let books = this.loadFromStorage();

        books.forEach( (book) =>
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
        })

    }
    
    // a method that from from localstorage

    static removeFromStorage(val)
    {
        // loading from store

        let store = this.loadFromStorage();
        let num;
        store.forEach(function (value, idx, arr){
            if (value.isbn === val)
            {
                num = idx;    
            }
        })
        store.splice(num, 1);

        localStorage.setItem('books', JSON.stringify(store))

    }
    
}
