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
  
  var items = document.querySelector('#items')

//   console.log(items.parentElement)

//   console.log(items.lastElementChild)

//   console.log(items.lastChild)

//   console.log(items.firstElementChild)

//   console.log(items.firstChild)

//   console.log(items.nextSibling)

//   console.log(items.nextElementSibling)

  var ndiv = document.createElement('div');
  console.log(ndiv);

  ndiv.className = 'Hello';
  
  var ndivtext = document.createTextNode('Hello');

  ndiv.appendChild(ndivtext);

  ndiv.setAttribute('Title' , 'helloworld');

  var container = document.querySelector('header .container');
  var h1 = document.querySelector('header h1');

  var item1 = document.querySelector('#items');
  var li = document.querySelector('#items li')

  container.insertBefore(ndiv , h1 );

  item1.insertBefore(ndiv , li );

 

  

