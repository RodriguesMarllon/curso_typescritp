interface Estado {
  nome: string;
}

interface Cidade {
  nome: string;
  estado: Estado;
}

interface Endereco {
  rua: string;
  bairro: string;
  cidade: Cidade;
  complemento?: string;
}

const endereco: Endereco = {
  bairro: "Pimentas",
  rua: "Broadway",
  complemento: "apt401",
  cidade: {
    nome: "Guarulhos",
    estado: {
      nome: "São Paulo",
    },
  },
};

console.log(endereco.complemento?.substring(3) || "Deu erro");
console.log(endereco);
