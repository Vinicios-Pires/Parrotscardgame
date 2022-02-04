let numCartas;
let cartasEscolhidas = []; i = 0; j = 0;
let numJogadas = 0;
let booleanVirarCarta = true;

function addCartas() {
   
    while (numCartas > 14 || numCartas < 4 || numCartas % 2 !== 0) {
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

    let parCarta = [];

    for (let i = 0; i < (numCartas / 2); i++) {
        parCarta.push(imgs[i], imgs[i]);
    }

    parCarta.sort(embaralhador);

    let cartas = document.querySelector(".tabuleiro");

    for (let i = 0; i < numCartas; i++) {
        cartas.innerHTML += `
        <div class="card" onclick="virarCarta(this)" data-identifier="card">
            <div class="front-face corpo-carta" data-identifier="front-face"> 
                <img src="${parCarta[i]}" /> 
            </div>
            <div class="back-face corpo-carta" data-identifier="back-face"><img src="front.png">
            </div>
        </div>
        `
    }
}

function virarCarta(cartaEscolhida) {
    
    if (booleanVirarCarta) {   
    if (cartasEscolhidas.length <= 2) {
        
    numJogadas++;
    i++;
    cartaEscolhida.classList.add("escolhida");
    cartasEscolhidas.push(cartaEscolhida);
    console.log(cartasEscolhidas.length)
    
    if (i === 2) {
        if (cartasEscolhidas[i - 2].innerHTML === cartasEscolhidas[i - 1].innerHTML) { 
            cartasEscolhidas[i - 2].removeAttribute("onclick");
            cartasEscolhidas[i - 1].removeAttribute("onclick");
            i = 0;
            cartasEscolhidas = [];
            setTimeout(fimDeJogo, 1000);
        } else {
            booleanVirarCarta = false;
            setTimeout(desvirarCarta, 1000);
        }
    }
    }
    }    
}

function desvirarCarta() {
    cartasEscolhidas[i - 2].classList.remove("escolhida");
    cartasEscolhidas[i - 1].classList.remove("escolhida");
    cartasEscolhidas = [];
    i = 0;
    booleanVirarCarta = true
}

function fimDeJogo() {

    cartasViradas = document.querySelectorAll(".escolhida");

    if (cartasViradas.length === numCartas) {
        alert(`Você ganhou em ${numJogadas} jogadas`)
        let playAgain = prompt("Gostaria de jogar novamente? ('s' caso queira)");
        if (playAgain === "s") {
            window.location.reload(true);
        }
    }
}


function embaralhador() {
    return Math.random() - 0.5;
}

addCartas()