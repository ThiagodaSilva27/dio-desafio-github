const palindromo = () => {
    let palavraInvertida = []
    const palavra = (prompt('Digite uma palavra ou frase'));
    let palavraSemEspacos = palavra.replace(/ /g, "");
    palavraSemEspacos = palavraSemEspacos.toLocaleLowerCase();
    
    alert(`palavraSemEspacos: ${palavraSemEspacos}`)
    
    for (let i = 0; i < palavraSemEspacos.length; i++) {
        const sub = i+1
        const index = palavraSemEspacos.length - sub;
        const pedaco = palavraSemEspacos[index];
        palavraInvertida.push(pedaco)
    }
    
    palavraInvertida = palavraInvertida.join([separador = '']);
    
    if (palavraSemEspacos == palavraInvertida) {
        alert(`"${palavra}" é um palindromo`);
    } else {
        alert(`"${palavra}" não é um palindromo`);
    }
}

palindromo();