function verificacaoDeChuteValido (chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        if(chute.toUpperCase() === 'GAME OVER') {
            
            document.body.innerHTML = 
                `
                    <h2>Game Over!!!</h2>
                    <h3>Pressione o botão para jogar novamente</h3> 
                    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
                `
            document.body.style.backgroundColor = 'black'
            document.body.style.backgroundImage = "url('/img/game-over.jpg')";
            
        }
        return
        
    }

    if(numeroMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }


    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era o ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        document.body.style.backgroundImage = "url('/img/dancando.gif')";
        
    
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }

    if (fimDeJogo(numero)) {
        return window.location.reload()
    }
}


function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor 
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})

