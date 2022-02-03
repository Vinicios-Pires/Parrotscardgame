let numCartas;

function addCartas() {
    // while (numCartas < 4 && numCartas > 14 && numCartas % 2 !== 0) {
    //     numCartas = parseInt(prompt("Com quantas cartas você quer jogar? (4 até 14 cartas)"))
    // }
    while (!(numCartas <= 14 && numCartas >= 4 && numCartas % 2 === 0)) {
        numCartas = parseInt(prompt("Com quantas cartas você quer jogar? (4 até 14 cartas)"));
    }

    let imgs = [
        'imgs/bobrossparrot.gif',
        'imgs/explodyparrot.gif',
        'imgs/fiestaparrot.gif',
        'imgs/metalparrot.gif',
        'imgs/revertitparrot.gif',
        'imgs/tripletsparrot.gif',
        'imgs/unicornparrot.gif',
    ]

    imgs.sort(comparador);

    let par = [];

    for (let i = 0; i < (numCartas.length / 2); i++) {
        par.push(imgs[i], imgs[i]);
    }

    par.sort(comparador);

    let cartas = document.querySelector(".tabuleiro");

    for (let i = 0; i < numCartas; i++) {
        cartas.innerHTML += `<div onclick="virarCarta(this)" class="card" data-identifier="card">
        <div class="front-face corpo-carta" data-identifier="front-face">
        <img src="${par[i]}"></img>
        </div>
        <div class="back-face corpo-carta" data-identifier="back-face"></div>
        </div>
        `
    }
}

addCartas()