const aprovados = (alunos, media) => {
    let alunosAprovados = [];
    for (let i = 0; i < alunos.length; i++) {
        const {nome, nota} = alunos[i]

        if (nota >= media) {
            alunosAprovados.push(nome);
        }
        
    }
    return alunosAprovados;
}

const alunos = [
    {nome: 'Maria', nota: 100, turma: '2A'}, 
    {nome: 'Katia', nota: 80, turma: '3C'},
    {nome: 'Cintia', nota: 50, turma: '1B'},
    {nome: 'Lorem', nota: 30, turma: '2B'},
    {nome: 'Carlos', nota: 65, turma: '2A'},
    {nome: 'Marcos', nota: 75, turma: '3A'},
]
console.log(aprovados(alunos, 70))