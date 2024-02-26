//printe na tela todo um cadastro de uma pessoa
//usando o tipo de dado object, exibindo os atributos:
//nome, documento, estado civil, idade, endereço

let cadastro  = {
    nome: "Julia",
    idade: "17",
    documento: "090.454.269-60",
    estadocivil: "Solteira",
    endereco: "Porto Mendes",
}
console.log(`O nome do(a) cadastrante é ${cadastro.nome}`)
console.log(`Idade: ${cadastro.idade}`)
console.log(`CPF: ${cadastro.documento}`)
console.log(`Estado Civil: ${cadastro.estadocivil}`)
console.log(`Endereço: ${cadastro.endereco}`)