let listaTarefas = [];

function btnAddTarefa() {
    listaTarefas.push({
        statusTarefa: '',
        textoTarefa: document.querySelector("#textoItemLista").value,
    });
    const itemLista =  document.createElement('label')
    indexLista = listaTarefas.length - 1;
    itemLista.classList.add('item');
    itemLista.innerHTML = `
        <input type="checkbox" ${listaTarefas[indexLista].statusTarefa}/>
        <div>${listaTarefas[indexLista].textoTarefa}</div>
    `
    document.getElementById('lista').appendChild(itemLista);

    document.querySelector("#textoItemLista").value = '';

};

function excluirTarefa(textoTarefa) {
    const indexTarefa = listaTarefas.findIndex(textoTarefa);
    console.log(indexTarefa)
    listaTarefas.splice(indexTarefa, 1);
}
