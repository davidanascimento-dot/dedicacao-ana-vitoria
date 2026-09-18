
const resposta = await fetch('js/capitulo.json')
const capitulos = await resposta.json()


const params = new URLSearchParams(window.location.search)
const numero = Number(params.get('numero')) || 1


const capitulo = capitulos.find(cap => cap.numero === numero)


if (!capitulo) {
  document.querySelector('#titulo-capitulo').textContent = 'Capítulo não encontrado'
} else {
  document.querySelector('#titulo-capitulo').textContent = `Capítulo ${capitulo.numero} — ${capitulo.titulo}`
  document.querySelector('#conteudo-capitulo').textContent = capitulo.conteudo
}


const btnAnterior = document.querySelector('#btn-anterior')
btnAnterior.addEventListener('click',()=>{
  if ( numero > 1 ) {
    window.location.href = 'capitulo.html?numero=' + (numero - 1)
  }
  
})


const btnProximo = document.querySelector('#btn-proximo')

btnProximo.addEventListener('click',()=>{
  const existeProximo = capitulos.some(cap =>cap.numero === numero + 1 )

  if (existeProximo) {
    window.location.href = 'capitulo.html?numero=' + (numero + 1)
  }else{
    btnProximo.disable = true;
    
    btnProximo.textContent = ' fim '
  }

})





