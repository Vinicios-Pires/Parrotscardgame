let numCartas;
let jogadas = 0;

function addCartas() {
    while (!(numCartas <= 14 && numCartas >= 4 && numCartas % 2 === 0)) {
        numCartas = parseInt(prompt("Com quantas cartas você quer jogar? (4 até 14 cartas)"));
    }

    let imgs = [
        '/projeto4-parrotscardgame/imgs/bobrossparrot.gif',
        '/projeto4-parrotscardgame/imgs/explodyparrot.gif',
        '/projeto4-parrotscardgame/imgs/fiestaparrot.gif',
        '/projeto4-parrotscardgame/imgs/metalparrot.gif',
        '/projeto4-parrotscardgame/imgs/revertitparrot.gif',
        '/projeto4-parrotscardgame/imgs/tripletsparrot.gif',
        '/projeto4-parrotscardgame/imgs/unicornparrot.gif'    
    ]

    // imgs.sort(comparador);

    let par = [];

    for (let i = 0; i < (numCartas.length / 2); i++) {
        par.push(imgs[i], imgs[i]);
    }

    par.sort(comparador);

    let cartas = document.querySelector(".tabuleiro");

    for (let i = 0; i < numCartas; i++) {
        cartas.innerHTML += `<div onclick="virarCarta(this)" class="card" data-identifier="card">
        <div class="front-face corpo-carta" data-identifier="front-face"> <img src="${par[i]}" /> </div>
        <div class="back-face corpo-carta" data-identifier="back-face"> </div>
        </div>
        `
    }
}

function virarCarta(cartaEscolhida) {
    jogadas++
    cartaEscolhida.classList.add(".escolhida")
}



function comparador() {
    return Math.random() - 0.5;
}
addCartas()