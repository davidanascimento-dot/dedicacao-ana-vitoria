const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

// Função auxiliar: lê o JSON do disco e devolve como array
function listarCapitulos() {
  const texto = fs.readFileSync('js/capitulo.json', 'utf-8')
  return JSON.parse(texto)
}

// GET — devolve a lista atual
app.get('/capitulos', (req, res) => {
  res.json(listarCapitulos())
})

// POST — salva um capítulo novo
app.post('/capitulos', (req, res) => {
  const novoCapitulo = req.body
  const capitulos = listarCapitulos()
  capitulos.push(novoCapitulo)

  fs.writeFileSync('js/capitulo.json', JSON.stringify(capitulos, null, 2))

  res.json({ ok: true, mensagem: 'Capítulo salvo!' })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})