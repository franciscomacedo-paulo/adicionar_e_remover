"use strict"
/*
    * PEGANDO OS ELEMENTOS HMTL 
*/
const cursos = document.querySelectorAll('.item')
const btn_copy = document.querySelector('#copy')
const btn_remove = document.querySelector('#remove')
const d1 = document.querySelector('.d1')
const d2 = document.querySelector('.d2')


cursos.forEach((el,i)=>{
    el.addEventListener('click', (evt)=>{
        let item_clecked = evt.target
        item_clecked.classList.toggle('item_ativo')
        console.log("O elemento que foi clicado é: " + item_clecked.innerHTML)
    })
})


// Funcao para adicinar os elemento na nova div
function verificarItemSelect(){
    const cursosSelecionado = document.querySelectorAll('.item_ativo')
    cursosSelecionado.forEach((el) => {
        d2.appendChild(el)
        console.log(el)
    }) 
}

// Funcao para remover item, mais cirando uma limitaca, em apenas a elementos HTMl a class 'item'
function removerElementFrom(){
    const cursoNaoSelecionados = document.querySelectorAll('.item:not(.item_ativo)')
    cursoNaoSelecionados.forEach((el)=>{
        d1.appendChild(el)
    })
}

// Button para adicionar os elementos quando clicado
btn_copy.addEventListener('click', verificarItemSelect)

// Button para remover os elementos quando clicado
btn_remove.addEventListener('click', removerElementFrom)