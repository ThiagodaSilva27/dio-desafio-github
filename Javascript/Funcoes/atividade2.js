function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} anos de idade.`
}
const pessoa1 = {
    nome:'Sofia',
    idade: 17
}
const pessoa2 = {
    nome:'Maria',
    idade: 15
}
console.log(calculaIdade.call(pessoa2, 10));
console.log(calculaIdade.apply(pessoa1, [30]));