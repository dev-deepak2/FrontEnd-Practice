const inputField = document.getElementById('text-input');
const addButton = document.getElementById('add-btn');
let list = document.getElementById('listItem');



let Todos = ["Go to bed", "Rest up"];

function AddItem() {
    console.log("Add button clicked!");
    let currentItem = inputField.value;

    Todos.push(currentItem);
    Display();
    console.log(Todos);
}

function Display() {
    console.log("Display method called!");

    Todos.forEach((item) => {
      const createList = document.createElement('li');
      createList.textContent = item;
        list.appendChild(createList);
    });

}


