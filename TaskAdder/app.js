let greeting = "Hello, World!";
console.log(greeting);

const inputItem = document.getElementById('input-item');
const addItem =document.getElementById('add-item');
const list = document.getElementById('items');



addItem.addEventListener('click', () => {
    let currentItem = inputItem.value;
    CreateList(currentItem);
    inputItem.value="";
})



function CreateList(currentItem) {
    const newitem = document.createElement('li');
    newitem.textContent = currentItem;
    list.appendChild(newitem)
    
}


