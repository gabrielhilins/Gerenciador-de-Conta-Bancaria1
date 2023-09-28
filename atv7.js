let saldoAtual = 100; // Saldo definido: 100 reais

const historico = []; // Array para armazenar o histórico de transações

function depositarValor() 
{
  const valorDeposito = parseFloat(prompt("Quanto deseja Depositar na sua conta?")); // Usando a função parseFloat para trocar a String de caracteres para valores numéricos de ponto flutuante (decimais)

  // Validação do valor do depósito:
  if (!isNaN(valorDeposito) && valorDeposito >= 0) { // Se o valor do depósito for diferente de "não número" e for maior ou igual à zero, faça o seguinte código:
    saldoAtual += valorDeposito; // Atualiza o saldo após o depósito
    const dataTransacao = new Date(); // Obtém a data de realização da transação//

    // Adicionando o tipo de transação, valor, saldo e data ao Array histórico:
    historico.push({tipo: "Depósito", valor: valorDeposito, saldo: saldoAtual, data: dataTransacao,}); 

    // Feedback ao Usuário:
    console.log(`Seu Depósito no valor de R$ ${valorDeposito} foi feito com sucesso em ${dataTransacao.toLocaleString()}`); // Usando o método "toLocaleString" para formatar o horário de forma mais entendível, com data e hora
    console.log(`Seu saldo atual: R$ ${saldoAtual.toFixed(2)}`);  // Usando o método "toFixed(2)" para formatar o valor do saldo com duas casas decimais
  } else {
    console.log("Valor de Depósito inválido ou negativo!");
  }
}

function sacarValor() 
{
  const valorSaque = parseFloat(prompt("Quanto deseja Sacar da sua conta?")); // Usando a função parseFloat para trocar a String de caracteres para valores numéricos de ponto flutuante (decimais)

  // Validação do valor do saque:
  if (!isNaN(valorSaque) && valorSaque >= 0) {  // Se o valor do saque for diferente de "não número" e for maior ou igual à zero, faça o seguinte código:

    // Validação do valor do saque com o saldo para evitar saldos negativos
    if (saldoAtual >= valorSaque) { // Se o saldo for maior ou igual ao valor do saque, faça o seguinte código:
      saldoAtual -= valorSaque; // Atualiza o saldo após o saque
      const dataTransacao = new Date(); // Obtém a data de realização da transação

      // Adicionando o tipo de transação, valor, saldo e data ao Array histórico
      historico.push({tipo: "Saque", valor: valorSaque, saldo: saldoAtual, data: dataTransacao,}); 

      // Feedback ao Usuário
      console.log(`Seu Saque no valor de R$ ${valorSaque} foi feito com sucesso em ${dataTransacao.toLocaleString()}`); // Usando o método "toLocaleString" para formatar o horário de forma mais entendível, com data e hora
      console.log(`Seu saldo atual: R$ ${saldoAtual.toFixed(2)}`); // Usando o método "toFixed(2)" para formatar o valor do saldo com duas casas decimais

    // Validação de Saldo
    } else {
      console.log("Saldo insuficiente para fazer o Saque.");
    }

    // Validação de Valor digitado pelo usuário
  } else {
    console.log("Valor de Saque inválido ou negativo!");
  }
}

function verSaldo() 
{
  // Feedback ao Usuário
  console.log(`O seu Saldo atual é: R$ ${saldoAtual.toFixed(2)}`);  // Usando o método "toFixed(2)" para formatar o valor do saldo com duas casas decimais
}

function verHistorico() 
{
  // Feedback ao Usuário
  console.log("Seu Histórico de Transações:");

  // Usando método forEach para iterar sobre os elementos do array historico e executar uma função de retorno de chamada para transação(valor) e index(índice, posição
  historico.forEach((transacao, index) => 
  {
    // Feedback ao Usuário (começando por 1)
    console.log(`${index + 1}. Tipo: ${transacao.tipo}, Valor: R$ ${transacao.valor}, Saldo após a transação: R$ ${transacao.saldo}, Data: ${transacao.data.toLocaleString()}`); // Usando o método "toLocaleString" para formatar o horário de forma mais entendível, com data e hora
  });
}

// Laço de repetição while para rodar o código continuamente
while (true) 
{
  // Menu de opções
  console.log("\nMenu de opções do nosso Sistema de Gerenciamento de Conta Bancária!");
  console.log("1) Depósito");
  console.log("2) Saque");
  console.log("3) Saldo");
  console.log("4) Histórico de transações");
  console.log("5) Sair");
  console.log(`Seu saldo atual: R$ ${saldoAtual.toFixed(2)}`);  // Usando o método "toFixed(2)" para formatar o valor do saldo com duas casas decimais

  const opcao = Number(prompt("Escolha uma opção:"));

  // Escolha-Caso das opções oferecidas pelo sistema
  switch (opcao) 
  {
    case 1:
      depositarValor();
      break;

    case 2:
      sacarValor();
      break;

    case 3:
      verSaldo();
      break;

    case 4:
      verHistorico();
      break;

    case 5:
      console.log("Encerrando o programa...");
      process.exit(0);
      break;

    default:
      console.log("Opção inválida; Escolha uma opção entre 1 e 5");
  }
}
