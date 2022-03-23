const btn = document.querySelector('#criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');

function addText() {
  let itemLista = document.createElement('li');
  let entrada = document.getElementById('texto-tarefa');
  itemLista.innerText = entrada.value;
  listaTarefas.appendChild(itemLista);
  itemLista.classList.add('li');
  entrada.value = '';
}
btn.addEventListener('click', addText);

let acendeLi = document.querySelector('#lista-tarefas');

function alteraCor(event) {
  const selecionada = document.querySelector('.selected');
  if (selecionada) {
    selecionada.classList.remove('selected');
  }
  event.target.classList.add('selected');
}
acendeLi.addEventListener('click', alteraCor);

function tiraRisco(event) {
  event.target.classList.toggle('completed');
}

acendeLi.addEventListener('dblclick', tiraRisco);

const btn2 = document.querySelector('#apaga-tudo');
btn2.addEventListener('click', function () {
  listaTarefas.innerHTML = '';
  localStorage.clear()
});

function removeFinalizados() {
  const finalizado = document.querySelectorAll('.completed');
  for (let i = 0; i < finalizado.length; i += 1) {
    finalizado[i].remove();
  }
}

const btn3 = document.querySelector('#remover-finalizados');
btn3.addEventListener('click', removeFinalizados);

//12

function salvarTarefas() {
  localStorage.setItem('list', listaTarefas.innerHTML)
  }

window.onload =function () {
  listaTarefas.innerHTML = localStorage.getItem('list')
}

const btn4 = document.querySelector('#salvar-tarefas');
btn4.addEventListener('click', salvarTarefas);