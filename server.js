const express  = require('express');
const  cors = require('cors')
const fs = require ('fs')
const app =  express()

const PORT = 3000



app.use(express.json())
app.use(cors())



app.get('/capitulos', (req, res) => {
  res.json(listarCapitulos())
})


function listarCapitulos() {
  const texto = fs.readFileSync('frontend/js/capitulo.json', 'utf-8')
  return JSON.parse(texto)
}

app.post('/capitulos', (req, res) => {
  const novoCapitulo = req.body
  const capitulos = listarCapitulos()
  capitulos.push(novoCapitulo)

  fs.writeFileSync('frontend/js/capitulo.json', JSON.stringify(capitulos, null, 2))

  res.json({ ok: true, mensagem: 'Capítulo salvo!' })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})