const header = document.getElementById('main-header');

header.style.border = "solid 3px #000"

const add = document.getElementsByTagName('h2')

add[0].style.color = "green"
add[0].style.fontWeight = "bold"

const list = document.getElementsByClassName('list-group-item')

list[2].style.backgroundColor = "green"

for(let i = 0 ; i<list.length ; i++){

    list[i].style.fontWeight = "bold"

}
