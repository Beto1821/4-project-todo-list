let btn = document.querySelector('#criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');

function addText() {
  let itemLista = document.createElement('li');
  let entrada = document.getElementById('texto-tarefa');
  itemLista.innerText = entrada.value;
  listaTarefas.appendChild(itemLista);
  entrada.value = '';
}
btn.addEventListener('click', addText);
