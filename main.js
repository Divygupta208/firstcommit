var form = document.getElementById('my-form');
var itemList = document.querySelector('.items');


form.addEventListener('submit' , addItem);
document.addEventListener('DOMContentLoaded', getUser)
itemList.addEventListener('click', deleteUser);

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
  .post("https://crudcrud.com/api/5ff0ae9021034b45a65797713719872f/userAppointement",myobj)
  .then((res)=>{
   
     showOutput(res.data);
  })
  .catch((err)=>{
    document.body.innerHTML = document.body.innerHTML + "<h4>Something Went Wrong</h4>";
  })
    
  // editBtn.onclick = ()=> {
  //   document.getElementById('name').value = myobj.name ;
  //   document.getElementById('email').value = myobj.e_mail ;
  //    removeLocal(myobj.e_mail);
  // }


}

function getUser(){
  axios.get("https://crudcrud.com/api/5ff0ae9021034b45a65797713719872f/userAppointement")
  .then((response)=>{
    
    for(var i = 0 ; i<response.data.length ; i++){
      showOutput(response.data[i]);
    }
    
  })
  .catch((err)=>{
    console.log(err);
  })
}



function showOutput(res){

    var Li = document.createElement('li');
    Li.className = "item";
    var box1 = document.createElement('div');
    var box2 = document.createElement('div');
    box1.className = 'box1';
    box2.className = 'box2';
    box1.appendChild(document.createTextNode(`${res.name} - ${res.e_mail} - ${res.phone}`));
    Li.setAttribute("id" ,res._id);
  
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn ms-4 float-right delete';
    editBtn.className = 'btn btn-success btn-sm ms-4 float-right';
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('Edit'));
    
   box2.appendChild(editBtn);
  box2.appendChild(deleteBtn);

  Li.appendChild(box1);
  Li.appendChild(box2);

  itemList.appendChild(Li);
    

}

function deleteUser(e){
 
  e.preventDefault();
  var id = e.target.parentElement.parentElement.getAttribute('id');
  itemList.removeChild(e.target.parentElement.parentElement);
  axios
  .delete(`https://crudcrud.com/api/5ff0ae9021034b45a65797713719872f/userAppointement/${id}`);
  
}

  






 
