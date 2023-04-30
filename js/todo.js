const TodoWrap = document.getElementById("TodoInput");
const todo = TodoWrap.querySelector("input");
const add = TodoWrap.querySelector("button");
const toDoList = document.getElementById("toDoList");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(params) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function onCheck(event) {
  // const li = event.target.parentElement;
  // const button = event.target;
  // const text = event.target.nextSibling;
  // button.classList.toggle("click");
  // text.classList.toggle("check");
  // if (button.classList.contains("click")) {
  //   console.log("true");
  //   button.style.background = "transparent";
  //   button.innerHTML = '<span class="material-symbols-outlined">done</span>';
  // } else {
  //   console.log("false");
  //   // button.classList.remove("click");
  //   button.style.background = "#ebebeb";
  //   // button.innerHTML = "";
  // }

  // console.log(event.target);
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const button = document.createElement("button");
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  li.appendChild(button);
  li.appendChild(span);
  button.addEventListener("click", onCheck);
  toDoList.appendChild(li);
}

function onAdd(event) {
  event.preventDefault();
  const newTodo = todo.value;
  todo.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
  // console.log(toDos);
}
TodoWrap.addEventListener("submit", onAdd);

const savedTodos = localStorage.getItem("todos");
console.log(savedTodos);
if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  // console.log(parsedToDos);
  parsedToDos.forEach(paintTodo);
  // console.log(parsedToDos);
}
