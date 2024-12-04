// Função para enviar o texto e obter a contagem de vogais e consoantes
document.getElementById('text-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const texto = document.getElementById('text-input').value;

  // Enviar o texto para a API
  fetch('http://localhost:3000/contar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ texto })
  })
  .then(response => response.json())
  .then(data => {
    // Atualizar o resultado na tela
    document.getElementById('vowels-count').textContent = data.vogais;
    document.getElementById('consonants-count').textContent = data.consoantes;
  })
  .catch(error => console.error('Erro ao contar vogais e consoantes:', error));
});
