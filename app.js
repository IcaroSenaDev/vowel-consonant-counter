// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Usar JSON no corpo das requisições
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Função para contar vogais e consoantes
function contarVogaisEConsoantes(texto) {
  const vogais = 'aeiouAEIOU';
  const consoantes = 'bcdfghjklmnpqrtstvwxyzBCDFGHJKLMNPQRTSTVWXYZ';

  let contagemVogais = 0;
  let contagemConsoantes = 0;

  for (let char of texto) {
    if (vogais.includes(char)) {
      contagemVogais++;
    } else if (consoantes.includes(char)) {
      contagemConsoantes++;
    }
  }

  return { vogais: contagemVogais, consoantes: contagemConsoantes };
}

// Rota para a API
app.post('/contar', (req, res) => {
  const texto = req.body.texto;
  const resultado = contarVogaisEConsoantes(texto);
  res.json(resultado);
});

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
