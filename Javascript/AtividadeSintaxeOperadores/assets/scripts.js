let primeiroValor;
let segundoValor;
const recebeValores = () => {
    primeiroValor = Number(prompt("Insira o primeiro número: "));
    if (primeiroValor === NaN) {
        alert('valor incorreto, por gentileza digitar somente números');
        recebeValores();
    }

    segundoValor = prompt("Insira o segundo número: ");
    somaValores = Number(primeiroValor) + Number(segundoValor);
    const saoIguais = primeiroValor == segundoValor ? 'são iguais' : 'não são iguais';
    const maior10 = somaValores > 10 ? 'maior' : 'menor';
    const maior20 = somaValores > 20 ? 'maior' : 'menor';

 
    alert(`Os números ${primeiroValor} e ${segundoValor} ${saoIguais}. Sua soma é ${somaValores}, que é ${maior10} que 10 e ${maior20} que 20`)
 
}

recebeValores();