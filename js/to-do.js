let listElement = document.querySelector('.app ul');
let inputElement = document.querySelector('.app input');
let btnElement = document.querySelector('.app button');

var toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderToDos() {
  listElement.innerHTML = '';

  for (todo of toDos) {
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(todo + " ");

    let linkElement = document.createElement('a');
    linkElement.setAttribute("href", "#");
    let linkText = document.createTextNode("Excluir");

    let pos = toDos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderToDos();

function addToDo() {
  var text = inputElement.value;
  if (text == ""){
    alert("Digite um to-do.")
  } else {
  toDos.push(text);
  inputElement.value = '';
  renderToDos();
  saveToStorage();
  }
}

function deleteTodo(pos) {
  toDos.splice(pos, 1);
  renderToDos();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('list_todos', JSON.stringify(toDos)); 
  //storage grava key e valor como string
}

// btnElement.onclick = addToDo;
btnElement.addEventListener("click", addToDo);
