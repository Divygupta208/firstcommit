    //const header = document.getElementById('main-header');

    //header.style.border = "solid 3px #000"

    //const add = document.getElementsByTagName('h2')

    //add[0].style.color = "green"
   // add[0].style.fontWeight = "bold"

    //const list = document.getElementsByClassName('list-group-item')

    //list[2].style.backgroundColor = "green"

    //for(let i = 0 ; i<list.length ; i++){//

        //list[i].style.fontWeight = "bold"

   // }

    //const lis = document.getElementsByTagName('li')
    //lis[4].style.color = "blue"

   /* var item2 = document.querySelector('.list-group-item:nth-child(2)')
    item2.style.backgroundColor = "green"
    var item3 = document.querySelector('.list-group-item:nth-child(3)')
    item3.style.visibility = "hidden"

    var item = document.querySelectorAll('.list-group-item')

  item[1].style.color = "yellowgreen"

  var odd = document.querySelectorAll('.list-group-item:nth-child(odd)')

  for(var i = 0 ; i<odd.length ; i++){
    odd[i].style.backgroundColor = "green"
  }*/
  
 // var items = document.querySelector('#items')

//   console.log(items.parentElement)

//   console.log(items.lastElementChild)

//   console.log(items.lastChild)

//   console.log(items.firstElementChild)

//   console.log(items.firstChild)

//   console.log(items.nextSibling)

//   console.log(items.nextElementSibling)

  // var ndiv = document.createElement('li');
  // console.log(ndiv);

  // ndiv.className = 'Hello';
  // var ndivtext = document.createTextNode('Hello');

  // ndiv.appendChild(ndivtext);

  // ndiv.setAttribute('Title' , 'helloworld');

  // var container = document.querySelector('header .container');
  // var h1 = document.querySelector('header h1');

  // var item1 = document.querySelector('#items');
  // var li = document.querySelector('#items li')

  // item1.appendChild();



  var form = document.getElementById('addForm');
  var itemList = document.getElementById('items');
  var filter = document.getElementById('filter');

  form.addEventListener('submit' , addItem);
  filter.addEventListener('keyup' , filterItems);
  
  function addItem(e){

    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var newItemDes = document.getElementById('itemDescription').value;

    var Li = document.createElement('li');
    Li.className = 'list-group-item';

    
 

    
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-success btn-sm float-right';

    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('Edit'));

    Li.appendChild(document.createTextNode(newItem));
    Li.appendChild(document.createTextNode(newItemDes));
    
    
    Li.appendChild(deleteBtn);
    Li.appendChild(editBtn); 

    console.log(Li);
   
    itemList.appendChild(Li);


  }

  

  
  var itemList = document.getElementById('items');

  itemList.addEventListener('click' , deleteItem)

  function deleteItem(e){
      
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure ?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }

  function filterItems(e){
    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');
     Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var itemDes = item.children[1].textContent;
      console.log(itemDes);
      if(itemName.toLowerCase().indexOf(text) != -1  ){
        item.style.display = 'block';
      }else if(itemDes.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      }
      else{
        item.style.display = 'none';
      }
     })
  }