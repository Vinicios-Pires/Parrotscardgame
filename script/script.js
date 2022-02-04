let numCartas;
let jogadas = 0;

function addCartas() {
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
        'imgs/unicornparrot.gif'    
    ]

    let par = [];

    for (let i = 0; i < (numCartas / 2); i++) {
        par.push(imgs[i], imgs[i]);
    }

    console.log(par);

    par.sort(comparador);

    let cartas = document.querySelector(".tabuleiro");

    for (let i = 0; i < numCartas; i++) {
        cartas.innerHTML += `
        <div onclick="virarCarta(this)" class="card" data-identifier="card">
            <div class="front-face corpo-carta" data-identifier="front-face"> 
                <img src="${par[i]}" /> 
            </div>
            <div class="back-face corpo-carta" data-identifier="back-face"><img src="front.png">
            </div>
        </div>
        `
        console.log(par[i]);
    }
}

function virarCarta(cartaEscolhida) {
    jogadas++
    cartaEscolhida.classList.add(".escolhida");
    console.log("CartaEscolhida: "+cartaEscolhida.par)
}


function comparador() {
    return Math.random() - 0.5;
}

addCartas()
