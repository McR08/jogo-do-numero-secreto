let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleartorio();
let tentativas = 1;
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute(){    
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você acertou o Número Secreto com ${tentativas} ${palavraTentativas}!!`;
        exibirTextoNaTela('h1', 'Acertouuuu!!!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        } 
        tentativas++;
        limparCampo();
    }
}
    function gerarNumeroAleartorio() {
       let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
       let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == numeroLimite){
            listaDeNumerosSorteados = []
        }
       if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleartorio();
       } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
       }
    }

    function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
    }
    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleartorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }
