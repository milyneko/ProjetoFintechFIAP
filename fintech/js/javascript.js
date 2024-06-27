function filtrarTabela() {
    const filtroMes = document.getElementById("filtroMes").value;
    const filtroAno = document.getElementById("filtroAno").value;
    const linhas = document.querySelectorAll("#tabelaGastos tr");
    
    linhas.forEach(linha => {
      const colMes = linha.cells[3].innerText;
      const colAno = linha.cells[4].innerText;
      linha.style.display = (filtroMes === '' || colMes === filtroMes) && (filtroAno === '' || colAno === filtroAno) ? '' : 'none';
    });
  }

  // Gerar CSV da tabela de gastos
  function gerarCSV() {
    const linhas = document.querySelectorAll("#tabelaGastos tr");
    let csvContent = "data:text/csv;charset=utf-8,Categoria,Valor,% do Total\n";
    
    linhas.forEach(linha => {
      if (linha.style.display !== "none") {
        const data = Array.from(linha.cells).slice(0, 3).map(cell => cell.innerText).join(",");
        csvContent += data + "\n";
      }
    });
    
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "relatorio.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Eventos dos filtros e botão de download
  document.getElementById("filtroMes").addEventListener("change", filtrarTabela);
  document.getElementById("filtroAno").addEventListener("change", filtrarTabela);
  document.getElementById("btnBaixarRelatorios").addEventListener("click", gerarCSV);

  // Inicialmente, exibir todos os dados da tabela
  filtrarTabela();