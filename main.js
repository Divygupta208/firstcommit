var form = document.getElementById('my-form');
var itemList = document.querySelector('.items');


form.addEventListener('submit' , addItem);

itemList.addEventListener('click' , removeData);


function addItem(e){
   
  
  e.preventDefault();
  


  var newItem = document.getElementById('name').value;
  var mail = document.querySelector('#email').value;
  
  var Li = document.createElement('li');
  Li.className = 'item';
  Li.setAttribute("mail" , mail);

  Li.appendChild(document.createTextNode(newItem));
   
  var deleteBtn = document.createElement('button');
 
  deleteBtn.className = 'delete';
 

  deleteBtn.appendChild(document.createTextNode('X'));
 
  
  Li.appendChild(deleteBtn);
 
 
  itemList.appendChild(Li);
  
  let myobj = {
    name : newItem,
    e_mail : mail,
  }
 
  addItemLocal(myobj);
   
 
  
}



function addItemLocal(myobj){
    let obj = getItemLocal();

    obj.push(myobj);

    localStorage.setItem( myobj.e_mail , JSON.stringify(obj));
}

function getItemLocal(){
  let obj ;
  const objLS = localStorage.getItem('myobj.e_mail');

  if( objLS === null){
    obj = [];
  }else{
    obj = JSON.parse(objLS);
  }
return obj;

}


function removeData(e){
    let data , datamail;
   if(e.target.classList.contains('delete')){
     e.target.parentElement.remove();
     data = e.target.parentElement;
     datamail = data.getAttribute('mail');
   }
    
   removeLocal(datamail);

  }

function removeLocal(datamail){

      localStorage.removeItem(datamail);
   
}