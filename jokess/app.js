// selecting on the form

document.querySelector('form').addEventListener('submit', function()
{
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);



  xhr.onload = function ()
  {
    if (this.status == 200)
    {
       
    let hold = JSON.parse(this.responseText);

    hold = hold.value;
    document.querySelector('ul').innerHTML = `<li>${hold}</li>`


    
    }
  }



xhr.send();
})