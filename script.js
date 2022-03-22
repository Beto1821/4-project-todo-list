let btn = document.querySelector('#criar-tarefa');
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

let acendeLi = document.querySelector('#lista-tarefas')
console.log(acendeLi);

function alteraCor(event) {
    const selecionada = document.querySelector('.selected');
    if(selecionada) {
        selecionada.classList.remove('selected');
    }
    event.target.classList.add('selected');
    
    
};
acendeLi.addEventListener("click", alteraCor);
