const funcaoCallBack = (valor: number): void => {
  console.log("Deu bom" + valor);
};

const funcaoTeste2 = (valor1: number, valor2: number, callback: (n: number) => void): string => {
  if (valor1 > valor2) {
    callback(valor1);
  }
  return "";
};

funcaoTeste2(23, 32, funcaoCallBack);
funcaoTeste2(43, 32, (x: number) => {
  console.log("outra funcao" + x);
});
