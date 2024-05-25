// Crie uma função compor que recebe duas funções 
// f e g e retorna uma nova função que é a composição 
// de f e g (ou seja, f(g(x))).

function compor(f, g) {
  let numero = function(numero){
    calculo1 = g(numero)
    calculo2 = f(calculo1)
    return calculo2
  }
  return numero
}


function somar1(x) {
return x + 1;
}

function multiplicar2(x) {
return x * 2;
}

let funcaoComposta = compor(somar1, multiplicar2);

console.log(funcaoComposta(5)); // 11 (multiplicar2(5) = 10, somar1(10) = 11)