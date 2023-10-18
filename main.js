var form = document.getElementById('my-form');
var itemList = document.querySelector('.items');


form.addEventListener('submit' , addItem);

//itemList.addEventListener('click' , removeData);


 function addItem(e){
   
  
  e.preventDefault();
  


  var newItem = document.getElementById('name').value;
  var mail = document.querySelector('#email').value;
  var Number = document.querySelector('#phone').value;
  

  let myobj = {
    name : newItem,
    e_mail : mail,
    phone : Number
  }
  
  axios
  .post("https://crudcrud.com/api/238d82906f384c54942a435183988893/userAppointement",myobj)
  .then((res)=>{
     console.log(res);
  })
  .catch((err)=>{
    document.body.innerHTML = document.body.innerHTML + "<h4>Something Went Wrong</h4>";
  })
  
  var Li = document.createElement('li');
  Li.className = 'item';
  Li.setAttribute("mail" , mail);

  Li.appendChild(document.createTextNode(newItem+"-"));
  Li.appendChild(document.createTextNode(mail+"-"));
  Li.appendChild(document.createTextNode(Number));
   
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');
  
  deleteBtn.className = 'delete';
  editBtn.className = 'edit';

  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('      Edit'));
  editBtn.style = 'background-color : green';
  
  

  Li.appendChild(editBtn);
  Li.appendChild(deleteBtn);
 
 
  itemList.appendChild(Li);
  

   
  editBtn.onclick = ()=> {
    document.getElementById('name').value = myobj.name ;
    document.getElementById('email').value = myobj.e_mail ;
     removeLocal(myobj.e_mail);
  }
 
  
}



// function getItemLocal(){
//   let obj ;
//   const objLS = localStorage.getItem('myobj.e_mail');

//   if( objLS === null){
//     obj = [];
//   }else{
//     obj = JSON.parse(objLS);
//   }
// return obj;

// }


// function removeData(e){
//     let data , datamail;
//    if(e.target.classList.contains('delete')){
//      e.target.parentElement.remove();
//      data = e.target.parentElement;
//      datamail = data.getAttribute('mail');
//    }
    
//    removeLocal(datamail);

//   }

// function removeLocal(datamail){

//       localStorage.removeItem(datamail);
   
// }

