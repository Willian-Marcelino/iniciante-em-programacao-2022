const X = "X";
const O = "O";
let jogadasRealizadas = 0;
let jogoFinalizado = false;
let jogadorAtual = X;
let tabuleiro = [     ['','',''],
                      ['','',''],
                      ['','',''] ];

function reiniciarJogo() {
    desenharSimbolo("",1,1);
    desenharSimbolo("",1,2);
    desenharSimbolo("",1,3);
    desenharSimbolo("",2,1);
    desenharSimbolo("",2,2);
    desenharSimbolo("",2,3);
    desenharSimbolo("",3,1);
    desenharSimbolo("",3,2);
    desenharSimbolo("",3,3);
    jogadorAtual = X;
    jogadasRealizadas = 0;
    marcarJogadorAtivo(X);
    exibirResultado("");
    jogoFinalizado = false;
    tabuleiro = [     ['','',''],
                      ['','',''],
                      ['','',''] ];
                      
}

function selecionarArea(posicaoLinha, posicaoColuna){
    console.log(posicaoLinha+" "+posicaoColuna);
    if (jogoFinalizado == true){
        return
    }
    if (tabuleiro [posicaoLinha - 1][posicaoColuna - 1]!=''){
        return
    }
    desenharSimbolo(jogadorAtual,posicaoLinha,posicaoColuna);
    jogadasRealizadas = jogadasRealizadas + 1;
    console.log(jogadasRealizadas);
    tabuleiro[posicaoLinha - 1][posicaoColuna - 1] = jogadorAtual;
    console.log(tabuleiro);

    //Logica do jogo
    verificaLinha();
    verificaColuna();
    verificaDiagonal();
    verificaVelha()

    if (jogadorAtual == X) {
        marcarJogadorAtivo(O);  
        jogadorAtual = O;
    } else {
       marcarJogadorAtivo(X);
       jogadorAtual = X; 
    }
}

function verificaLinha(){
    if (tabuleiro[0][0] == jogadorAtual && tabuleiro[0][1] == jogadorAtual && tabuleiro[0][2] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
        jogoFinalizado = true
    }
    if (tabuleiro[1][0] == jogadorAtual && tabuleiro[1][1] == jogadorAtual && tabuleiro[1][2] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
        jogoFinalizado = true
    }
    if (tabuleiro[2][0] == jogadorAtual && tabuleiro[2][1] == jogadorAtual && tabuleiro[2][2] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
        jogoFinalizado = true
    }
}

function verificaColuna(){
    if (tabuleiro[0][0] == jogadorAtual && tabuleiro[1][0] == jogadorAtual && tabuleiro[2][0] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
        jogoFinalizado = true
    }
    if (tabuleiro[0][1] == jogadorAtual && tabuleiro[1][1] == jogadorAtual && tabuleiro[2][1] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
        jogoFinalizado = true
    }
    if (tabuleiro[0][2] == jogadorAtual && tabuleiro[1][2] == jogadorAtual && tabuleiro[2][2] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
        jogoFinalizado = true
    }
}

function verificaDiagonal(){
    if (tabuleiro[0][0] == jogadorAtual && tabuleiro[1][1] == jogadorAtual && tabuleiro[2][2] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
        jogoFinalizado = true
    }
    if (tabuleiro[0][2] == jogadorAtual && tabuleiro[1][1] == jogadorAtual && tabuleiro[2][0] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
        jogoFinalizado = true
    } 
}

function verificaVelha(){
   if (jogadasRealizadas >= 9 && jogoFinalizado == false){
    exibirResultado("Empate");
    jogoFinalizado = true;
   }   
}
  