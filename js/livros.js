
const resposta = await fetch('js/capitulo.json')
const capitulos = await resposta.json()


const container = document.querySelector('#lista-capitulos')
const html = capitulos.map(cap =>
`<a href="capitulo.html?numero=${cap.numero}">
   <h2>Capítulo ${cap.numero}</h2>
   <p>${cap.titulo}</p>
 </a>`
).join('')

container.innerHTML = html




