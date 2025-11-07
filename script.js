async function carregarCotacao() {
  try {
    const resposta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const dados = await resposta.json();
    const cotacao = dados.USDBRL;

    document.getElementById('valor').textContent = `R$ ${parseFloat(cotacao.bid).toFixed(2)}`;
    document.getElementById('maximo').textContent = `R$ ${parseFloat(cotacao.high).toFixed(2)}`;
    document.getElementById('minimo').textContent = `R$ ${parseFloat(cotacao.low).toFixed(2)}`;
  } catch (erro) {
    alert('Erro ao buscar cotação. Tente novamente mais tarde.');
    console.error(erro);
  }
}

document.getElementById('atualizar').addEventListener('click', carregarCotacao);

// Chama a função automaticamente ao carregar a página
window.onload = carregarCotacao;