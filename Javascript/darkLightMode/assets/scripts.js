const page = document.getElementById('pageMode');
const texto = document.getElementById('textMode');
const botao = document.getElementById('buttonMode');
let darkMode = false;
document.getElementById("textMode").innerHTML = 'Light Mode ON';
document.getElementById("buttonMode").innerHTML = 'Dark Mode';

const mudarStilo = () => {
    darkMode = !darkMode;
    mudarClasse()
    if (darkMode) {
        document.getElementById("textMode").innerHTML = 'Dark Mode ON';
        document.getElementById("buttonMode").innerHTML = 'Light Mode';
    } else {
        document.getElementById("textMode").innerHTML = 'Light Mode ON';
        document.getElementById("buttonMode").innerHTML = 'Dark Mode';
    }
}

const mudarClasse = () => {
    page.classList.toggle('pageLight')
    texto.classList.toggle('textLight');
    botao.classList.toggle('botaoLight');
    page.classList.toggle('pageDark')
    texto.classList.toggle('textDark');
    botao.classList.toggle('botaoDark');
}

botao.addEventListener('click',mudarStilo);