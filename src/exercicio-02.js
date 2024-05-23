// Dado um array de objetos representando pessoas com propriedades nome e idade, 
// crie uma função que retorne um array, contendo apenas os nomes das pessoas 
// com idade maior ou igual a 18 anos.

let pessoas = [
{ nome: 'Alice', idade: 17 },
{ nome: 'Bob', idade: 22 },
{ nome: 'Charlie', idade: 16 },
{ nome: 'David', idade: 19 }
];


function filtrarAdultos(pessoas) {
  let pessoasMaiores = pessoas.filter(pessoa => {
    return pessoa.idade >= 18
  })
  let pessoasNome = pessoasMaiores.map(pessoa => {
    return pessoa.nome
  })
    return pessoasNome
}

console.log(filtrarAdultos(pessoas)); // ['Bob', 'David']