const numero = 3;

console.log(numero);

interface Pessoa {
  idade: number;
  nome: string;
  isMaiorIdade: boolean;
  // teste: any;
}

const pessoa: Pessoa = {
  idade: 543,
  nome: "maria",
  isMaiorIdade: true,
  // teste: {
  //   teste: 324,
  // },
};

console.log(pessoa);
