const numero = 3;

console.log(numero);

interface Pessoa {
  idade: number;
  nome: string;
  isMaiorIdade: boolean;
}

const pessoa: Pessoa = {
  idade: 543,
  nome: "maria",
  isMaiorIdade: true,
};

console.log(pessoa);
