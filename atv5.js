// Array para armazenar os alunos e suas notas
const alunos = [];

// Função para calcular a média e retornar a avaliação do desempenho do aluno do aluno
function calcularDesempenho(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5 && media < 7) {
    return "Em recuperação";
  } else {
    return "Reprovado";
  }
}

// Loop do menu de opções
while (true) {
  console.log("\nMenu de Opções do nosso Sistema Acadêmico:");
  console.log("1. Cadastrar Aluno(a)");
  console.log("2. Cadastrar Notas");
  console.log("3. Exibir Boletim");
  console.log("4. Sair");

  const opcao = Number(prompt("Escolha uma opção:"));

  // Escolha-caso das opções oferidas pelo ssistema Acadêmico
  switch (opcao) {
    // Caso o usuário digite 1, irá realizar o seguinte código
    case 1:
      const nomeAluno = prompt("Digite o nome do(a) aluno(a):"); 
      alunos.push({ nome: nomeAluno, notas: [] }); // o código está cadastrando um novo aluno (nomeAluno) no array alunos com o nome fornecido pelo usuário e um array vazio de notas. 
      console.log(`Aluno(a) "${nomeAluno}" cadastrado com sucesso.`); // resgatando o nomeAluno digitado pelo usuário
      break;

    // Caso o usuário digite 2, irá realizar o seguinte código
    case 2:
      const nomeAlunoNotas = prompt("Digite o nome do(a) aluno(a) para cadastrar notas:");
      const aluno = alunos.find((a) => a.nome === nomeAlunoNotas); // o método "find" proura um aluno no array "alunos" com base no nome que foi digitado na variável "nomeAlunoNotas"

      // Se aluno for verdadeiro, ele irá fazer o seguinte código:
      if (aluno) {
        const notas = []; // Array para armazenar as notas
        
        // Para contador(i) = 0, menor que 3, vá aumentando a contagem e pedindo a nota 3 vezes
        for (let i = 0; i < 3; i++) {
          let nota;
          // Faça o código a seguir enquanto nota for menor ou igual à 10 e maior ou igual à 0
          do {
            let nota = Number(prompt(`Digite a nota ${i + 1} do(a) ${nomeAlunoNotas}:`)); // Peindo pro usuário digitar a nota do aluno (i + 1) do(a) aluno digitado e cadastrado no caso 1
            notas.push(Math.round(nota)); // método push para adicionar uma "nota" arredondada (Math.round) ao array "notas"
          } while (nota <= 10 && nota >= 0);
        }
        aluno.notas = notas; // atribuindo o array notas ao atributo "notas" do objeto "aluno"
        console.log("Notas cadastradas com sucesso.");
        // Se aluno não for verdadeiro, faça o código abaixo
      } else {
        console.log("Aluno(a) não encontrado. Por favor, digite o nome de um(a) aluno(a) já cadastrado(a");
        console.log("Caso não tenha cadastrado ainda, cadastre um aluno no menu de opções");}
      break;

    // Caso o usuário digite 3, irá fazer este código:
    case 3:
      const nomeAlunoBoletim = prompt("Digite o nome do(a) aluno(a) para exibir o boletim:"); 
      const alunoBoletim = alunos.find((a) => a.nome === nomeAlunoBoletim); // o método find procura dentro do objeto alunos o nome digitado na variável "nomeAlunoBoletim"

      // Se alunoboletim for verdadeiro, faça o seguinte código
      if (alunoBoletim) {
        const media = Math.round(alunoBoletim.notas.reduce((acc, nota) => acc + nota, 0) / alunoBoletim.notas.length); // calculando a média arredondada  dos alunos
      // O reduce itera pelo array de notas e, em cada iteração, soma a nota atual à acumulação (acc). 0 é o valor inicial do acumulador. Isso nos dá a soma total das notas.
        const desempenho = calcularDesempenho(media); // Dividimos a soma total das notas pelo número total de notas "alunoBoletim.notas.length" para calcular a média das notas.

        // Exibição das informações adquiridas do aluno
        console.log(`Nome: ${alunoBoletim.nome}`); 
        console.log(`Notas arredondadas: ${alunoBoletim.notas.join(", ")}`);
        console.log(`Média: ${media}`);
        console.log(`Desempenho: ${desempenho}`);

      // Se alunoBoletim não for verdadeiro, exibe na tela que "Aluno não encontrado"
      } else {
        console.log("Aluno não encontrado.");}
      break;

    // Caso o usuário digite 4, ele encerra o programa, ou seja "Sair"
    case 4:
      console.log("Encerrando o programa.");
      process.exit(0);

    // Caso o usuário não digite nenhuma das opções
    default:
      console.log("Opção inválida. Escolha uma opção entre 1 e 4.");
  }
}