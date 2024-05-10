function buildPage() {
  // Cria o elemento 'center' para centralizar a mesa
  const center = document.createElement('div');

  // Cria o elemento para a mesa de xadrez
  const ChessTable = document.createElement('table');
  ChessTable.setAttribute('cellspacing', '0');
  ChessTable.setAttribute('width', '240px'); // Defina a largura da tabela

  for (let i = 0; i < 8; i++) {
    // Cria uma linha (tr)
    const tr = document.createElement('tr');
    for (let j = 0; j < 8; j++) {
      // Cria uma célula (td)
      const td = document.createElement('td');
      // Define a classe de cor com base na posição
      if ((i + j) % 2 === 0) {
        td.classList.add('cell', 'whitecell');
      } else {
        td.classList.add('cell', 'blackcell');
      }
      // Anexa a célula à linha
      tr.appendChild(td);
    }
    // Anexa a linha à mesa
    ChessTable.appendChild(tr);
  }

  // Obtém o elemento root
  const root = document.getElementById('root');

  // Anexa o elemento center ao root
  root.appendChild(center);

  // Anexa a tabela ao elemento center
  center.appendChild(ChessTable);
}

// Chama a função para construir a página
buildPage();
