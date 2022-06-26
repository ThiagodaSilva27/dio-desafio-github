const substituirNumerosPares = (arrayNumeros) => {
    const novoArray = [];
    if (arrayNumeros?.length != 0) {
        for (let i = 0; i < arrayNumeros.length; i++) {
            const numero = Number(arrayNumeros[i]);
            if ((numero % 2) == 0 && numero !== 0) {
                novoArray.push(0)
            } else {
                novoArray.push(numero)
            }
        }
        alert(novoArray)
    } else {
        alert('-1')
    }
};
const arrayNumeros = [1, 3, 4, 6, 80, 33, 23, 90];
const arrayVazio = []
substituirNumerosPares(arrayNumeros);