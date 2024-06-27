
// Dados iniciais para o gráfico
const dadosGastos = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
    ],
  }]
};

const ctx = document.getElementById('gastosChart').getContext('2d');
const gastosChart = new Chart(ctx, {
  type: 'pie',
  data: dadosGastos,
});

// Função para adicionar dados à tabela e atualizar o gráfico
document.getElementById('dadosForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const categoria = document.getElementById('categoria').value;
  const valor = parseFloat(document.getElementById('valor').value);

  if (categoria && valor) {
    // Adicionar dados à tabela
    const tabelaDados = document.getElementById('tabelaDados');
    const novaLinha = tabelaDados.insertRow();
    novaLinha.insertCell(0).innerText = categoria;
    novaLinha.insertCell(1).innerText = 'R$ ' + valor.toFixed(2);

    // Atualizar gráfico
    dadosGastos.labels.push(categoria);
    dadosGastos.datasets[0].data.push(valor);
    gastosChart.update();

    // Limpar formulário
    document.getElementById('dadosForm').reset();
  }
});
