interface Pessoas {
  idade: number;
  nome: string;
}

interface Usuarios {
  pessoas: Pessoas[];
  cidade: string;
}

const usuario: Usuarios = {
  cidade: "Guarulhos",
  pessoas: [
    {
      idade: 18,
      nome: "Marllon",
    },
    {
      idade: 20,
      nome: "Sabrina",
    },
  ],
};

console.log(usuario);
console.log(usuario.pessoas.length);
