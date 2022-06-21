let primeiroValor;
let segundoValor;

const coletarValor = () => {
    primeiroValor = Number(prompt("Insira o primeiro número: "));
    if (!primeiroValor) {
        alert('valor incorreto, por gentileza digitar somente números');
        coletarValor();
    } else {
        coletarSegundoValor();
    }
}

const coletarSegundoValor = () => {
    segundoValor = Number(prompt("Insira o segundo número: "));
    if (!segundoValor) {
        alert('valor incorreto, por gentileza digitar somente números');
        coletarSegundoValor();
    } else {
        somaValores = primeiroValor + segundoValor;
        const saoIguais = primeiroValor == segundoValor ? 'são iguais' : 'não são iguais';
        const maior10 = somaValores > 10 ? 'maior' : 'menor';
        const maior20 = somaValores > 20 ? 'maior' : 'menor';
    
     
        alert(`Os números ${primeiroValor} e ${segundoValor} ${saoIguais}. Sua soma é ${somaValores}, que é ${maior10} que 10 e ${maior20} que 20`)
    }
}

coletarValor();