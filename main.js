var form = document.getElementById('my-form');
var itemList = document.querySelector('.items');


form.addEventListener('submit' , addItem);


function addItem(e){
   
  
  e.preventDefault();

  var newItem = document.getElementById('name').value;
  var mail = document.querySelector('#email').value;
  var Li = document.createElement('li');
  Li.className = 'item';

  Li.appendChild(document.createTextNode(newItem));

 
  itemList.appendChild(Li);

   
localStorage.setItem('user-details' , newItem );
localStorage.setItem('user-email' , mail);

  
}

