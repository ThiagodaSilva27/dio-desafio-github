let contarHP = 0;

function btnSomar() {
    if (contarHP !== 10) {
        contarHP++;
        document.getElementById("numeroHP").innerHTML = contarHP;
    }
    determinaCor();
}

function btnSubtrair() {
    contarHP--;
    document.getElementById("numeroHP").innerHTML = contarHP;
    determinaCor();
}

function determinaCor() {
    document.querySelector('#numeroHP').style.color = 'white';
    if (contarHP < 0) {
        document.querySelector('#numeroHP').style.color = 'red';
    }
}

let contarMP = 0;

function somarMP() {
    if (contarMP !== 10) {
        contarMP++;
        document.getElementById("numeroMP").innerHTML = contarMP;
    }
}

function subtrairMP() {
    if (contarMP !== 0) {
        contarMP--;
        document.getElementById("numeroMP").innerHTML = contarMP;
    }
}

function eventosMP() {
    document.getElementById("addMP").addEventListener("click", somarMP)
    document.getElementById("subMP").addEventListener("click", subtrairMP)
}

window.addEventListener("load", eventosMP);