var form = document.getElementById("my-form");
var itemList = document.querySelector(".items");
var isEditing = false;

document.addEventListener("DOMContentLoaded", getUser);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (isEditing) {
    updateUser(e);
  } else {
    addItem(e);
  }
});

function addItem(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.querySelector("#email").value;
  var phoneNo = document.querySelector("#phone").value;

  let myobj = {
    name: name,
    email: email,
    phoneNo: phoneNo,
  };

  console.log(myobj);

  axios
    .post("http://localhost:3000/user/add-user", myobj, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      console.log(res.data);
      showOutput(res.data.user);
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h4>Something Went Wrong</h4>";
    });
}

function getUser() {
  axios
    .get("http://localhost:3000/user/add-user")
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        showOutput(response.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function showOutput(res) {
  var Li = document.createElement("li");
  Li.className = "item";
  var box1 = document.createElement("div");
  var box2 = document.createElement("div");
  box1.className = "box1";
  box2.className = "box2";
  box1.appendChild(
    document.createTextNode(`${res.name} - ${res.email} - ${res.phoneNo}`)
  );
  Li.setAttribute("id", res.id);
  Li.setAttribute("name", res.name);
  Li.setAttribute("mail", res.email);
  Li.setAttribute("phone", res.phoneNo);

  var deleteBtn = document.createElement("button");
  var editBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn ms-4 float-right delete";
  editBtn.className = "btn btn-success btn-sm ms-4 float-right";
  deleteBtn.appendChild(document.createTextNode("X"));
  editBtn.appendChild(document.createTextNode("Edit"));

  box2.appendChild(editBtn);
  box2.appendChild(deleteBtn);

  Li.appendChild(box1);
  Li.appendChild(box2);

  itemList.appendChild(Li);
  // deleteBtn.addEventListener("click", deleteUser);
  // editBtn.addEventListener("click", editUser);
}

// function deleteUser(e){

//   e.preventDefault();
//   var ide = e.target.parentElement.parentElement.getAttribute('id');
//   itemList.removeChild(e.target.parentElement.parentElement);
//   axios
//   .delete(`https://crudcrud.com/api/cc61ff98d9b64742a02cc9f9538b6590/userAppointement/${ide}`);

// }

// function editUser(e) {
//   isEditing = true;
//   e.preventDefault();
//    const id = e.target.parentElement.parentElement.getAttribute('id');
//   const name = e.target.parentElement.parentElement.getAttribute('name');
//   const mail = e.target.parentElement.parentElement.getAttribute('mail');
//   const phone = e.target.parentElement.parentElement.getAttribute('phone');

//   document.querySelector('#id').value = id;
//   document.querySelector('#name').value = name;
//   document.querySelector('#email').value = mail;
//   document.querySelector('#phone').value = phone;

//   itemList.removeChild(e.target.parentElement.parentElement);

// }

// function updateUser(e) {
//   e.preventDefault();

//   const id = document.querySelector('#id').value;
//   const updatedName = document.querySelector('#name').value;
//   const updatedEmail = document.querySelector('#email').value;
//   const updatedPhone = document.querySelector('#phone').value;

//   const updatedUser = {
//     "name": updatedName,
//     "e_mail": updatedEmail,
//     "phone": updatedPhone,
//   };

// axios
// .put(`https://crudcrud.com/api/cc61ff98d9b64742a02cc9f9538b6590/userAppointement/${id}`, updatedUser)
// .then((res) => {
//   axios
//   .get(`https://crudcrud.com/api/cc61ff98d9b64742a02cc9f9538b6590/userAppointement/${id}`)
//   .then((res)=>{
//     showOutput(res.data);
//   })
//   .catch(err => console.log(err));

// })
// .catch((err) => {
//   console.error( err);
// });

// isEditing = false;
// }
