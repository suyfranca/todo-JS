let listElement = document.querySelector('.app ul');
let inputElement = document.querySelector('.app input');
let btnElement = document.querySelector('.app button');

var toDos = [];

function renderToDos() {
  listElement.innerHTML = '';

  for (todo of toDos) {
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(todo + " ");

    let linkElement = document.createElement('a');
    linkElement.setAttribute("href", "#");
    let linkText = document.createTextNode("Excluir");

    let pos = todo.indexOf(todo);
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
  }
}

function deleteTodo(pos) {
  toDos.splice(pos, 1);
  renderToDos();
}

// btnElement.onclick = addToDo;
btnElement.addEventListener("click", addToDo);


