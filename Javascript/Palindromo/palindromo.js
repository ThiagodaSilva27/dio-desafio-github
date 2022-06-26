const palindromo = () => {
    // solucao 1
    let palavraInvertida = [];
    const palavra = (prompt('Digite uma palavra ou frase'));
    let palavraSemEspacos = palavra.replace(/ /g, "");
    palavraSemEspacos = palavraSemEspacos.toLocaleLowerCase();
    
    for (let i = 0; i < palavraSemEspacos.length; i++) {
        const sub = i+1
        const index = palavraSemEspacos.length - sub;
        const pedaco = palavraSemEspacos[index];
        palavraInvertida.push(pedaco)
    }
    palavraInvertida = palavraInvertida.join("");

    if (palavraSemEspacos == palavraInvertida) {
        alert(`"${palavra}" é um palindromo`);
    } else {
        alert(`"${palavra}" NÃO é um palindromo`);
    }

    // solucao 2
    // const palavra = (prompt('Digite uma palavra ou frase'));
    // const isPalindromo = palavra.split("").reverse().join("") == palavra ? "" : "NÃO" 
    
    // alert(`"${palavra}" ${isPalindromo} é um palindromo`)
    
}

palindromo();