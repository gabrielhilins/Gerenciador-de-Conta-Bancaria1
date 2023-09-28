const biblioteca = []; // Array para armazenar os livros

function cadastrarLivro() {
  const id = prompt("Digite o ID do livro:");
  const titulo = prompt("Digite o Título do Livro:");
  const autor = prompt("Digite o nome do Autor do Livro:");
  const emprestado = false; // Inicialmente, o livro não está emprestado
  biblioteca.push({ id, titulo, autor, emprestado });
  console.log(`O Livro "${titulo}" foi cadastrado com sucesso!`);
}

function alterarLivro() {
  const id = prompt("Digite o ID do Livro já cadastrado que deseja alterar:");
  const livroCadastrado = biblioteca.find((livro) => livro.id === id);

  if (livroCadastrado) { // Se o livro tiver cadastrado, faça o seguinte código:
    const novoTitulo = prompt(`Digite o novo Título do livro ${id}:`);
    const novoAutor = prompt(`Digite o novo nome do Autor do livro ${id}:`);

    if (novoTitulo) { // Se o novo título não for o mesmo de anteriormente, faça o seguinte código:
      livroCadastrado.titulo = novoTitulo; // Substituindo o título antigo pelo novo título no "livroCadastrado" que vai levar pra biblioteca
    }

    if (novoAutor) { // Se o novo Autor não for o mesmo de anteriormente, faça o seguinte código
      livroCadastrado.autor = novoAutor; // Substituindo o autor antigo pelo novo autor no "livroCadastrado" que vai levar pra biblioteca
    }

    console.log(`O Título do Livro "${id}" foi alterado para "${novoTitulo}" com sucesso!`);
    console.log(`O Autor do Livro "${id}" foi alterado para "${novoAutor}" com sucesso!`);
  } else {
    console.log(`O Livro com ID "${id}" não foi encontrado. Por favor, digite um ID de livro válido.`);
  }
}

function deletarLivro() {
  const id = prompt("Digite o ID do livro já cadastrado que deseja deletar:");
  const livroCadastrado = biblioteca.find((livro) => livro.id === id);

  if (livroCadastrado) { // Se o livro tiver cadastrado, faça o seguinte código:
    const index = biblioteca.indexOf(livroCadastrado); // usando método indexOf para encontrar índice(posição) do livroCadastrado no array "biblioteca"
    biblioteca.splice(index, 1); // usando método splice para remover o livroCadastrado digitado nessa função e encontrado no index do array "biblioteca"
    console.log(`O Livro "${id}" foi deletado com sucesso!`);
  } else {
    console.log(`O Livro com ID "${id}" não foi encontrado. Por favor, digite um ID de livro válido.`);
  }
}

function realizarEmprestimo() {
  const id = prompt("Digite o ID do livro já cadastrado que deseja realizar empréstimo:");
  const livroCadastrado = biblioteca.find((livro) => livro.id === id);

  if (livroCadastrado) {
    if (livroCadastrado.emprestado) { // Status: Emprestado
      console.log(`O livro ${id} já foi emprestado. Digite um ID de um livro que não foi emprestado ainda`);
    } else { //status: Não Emprestado
      livroCadastrado.emprestado = true; // status: Emprestando
      console.log(`O livro ${id} foi emprestado com sucesso!`); // Status: Emprestado
    }
  } else {
    console.log(`O Livro com ID "${id}" não foi encontrado. Por favor, digite um ID de livro válido.`);
  }
}

function realizarDevolucao() {
  const id = prompt("Digite o ID do livro já cadastrado que deseja devolver:");
  const livroCadastrado = biblioteca.find((livro) => livro.id === id);

  if (livroCadastrado) {
    if (livroCadastrado.emprestado) { // Satus: Emprestado
      livroCadastrado.emprestado = false; // Status: Colocando em aberto à empréstimo
      console.log(`O Livro "${id}" foi devolvido com sucesso.`); // Status: Aberto à empréstimos
    } else {
      console.log(`O Livro "${id}" não foi emprestado ainda. Por favor, digite um livro que já foi emprestado.`);
    }
  } else {
    console.log(`O Livro com ID "${id}" não foi encontrado. Por favor, digite um ID de livro válido.`);
  }
}

// Menu de Opções
while (true) {
  console.log("\nMenu de opções do nosso Sistema de Gerenciamento da Biblioteca");
  console.log("1) Cadastrar Livro");
  console.log("2) Alterar Livro");
  console.log("3) Deletar Livro");
  console.log("4) Realizar empréstimo de Livro");
  console.log("5) Realizar devolução de Livro");
  console.log("6) Sair");

  const opcao = Number(prompt("Escolha uma opção:"));

  // Escolha-Caso das opções oferidas pelo sistema
  switch (opcao) {
    case 1:
      cadastrarLivro();
      break;

    case 2:
      alterarLivro();
      break;

    case 3:
      deletarLivro();
      break;

    case 4:
      realizarEmprestimo();
      break;

    case 5:
      realizarDevolucao();
      break;

    case 6:
      console.log("Encerrando o programa...");
      process.exit(0);
      break;

    default:
      console.log("Opção inválida; Escolha uma opção entre 1 e 6");
  }
}
