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

    var item2 = document.querySelector('.list-group-item:nth-child(2)')
    item2.style.backgroundColor = "green"
    var item3 = document.querySelector('.list-group-item:nth-child(3)')
    item3.style.visibility = "hidden"

    var item = document.querySelectorAll('.list-group-item')

  item[1].style.color = "yellowgreen"

  var odd = document.querySelectorAll('.list-group-item:nth-child(odd)')

  for(var i = 0 ; i<odd.length ; i++){
    odd[i].style.backgroundColor = "green"
  }