const X = "X";
const O = "O";
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
    marcarJogadorAtivo(X);
    exibirResultado("");
    tabuleiro = [     ['','',''],
                      ['','',''],
                      ['','',''] ];
                      
}

function selecionarArea(posicaoLinha, posicaoColuna){
    console.log(posicaoLinha+" "+posicaoColuna);
    if (tabuleiro [posicaoLinha - 1][posicaoColuna - 1]!=''){
        return
    }
    desenharSimbolo(jogadorAtual,posicaoLinha,posicaoColuna);
    tabuleiro[posicaoLinha - 1][posicaoColuna - 1] = jogadorAtual;
    console.log(tabuleiro);

    //Logica do jogo
    verificaLinha();
    verificaColuna();
    verificaDiagonal();

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
    }
    if (tabuleiro[1][0] == jogadorAtual && tabuleiro[1][1] == jogadorAtual && tabuleiro[1][2] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
    }
    if (tabuleiro[2][0] == jogadorAtual && tabuleiro[2][1] == jogadorAtual && tabuleiro[2][2] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
    }
}

function verificaColuna(){
    if (tabuleiro[0][0] == jogadorAtual && tabuleiro[1][0] == jogadorAtual && tabuleiro[2][0] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
    }
    if (tabuleiro[0][1] == jogadorAtual && tabuleiro[1][1] == jogadorAtual && tabuleiro[2][1] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
    }
    if (tabuleiro[0][2] == jogadorAtual && tabuleiro[1][2] == jogadorAtual && tabuleiro[2][2] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
    }
}

function verificaDiagonal(){
    if (tabuleiro[0][0] == jogadorAtual && tabuleiro[1][1] == jogadorAtual && tabuleiro[2][2] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
    }
    if (tabuleiro[0][2] == jogadorAtual && tabuleiro[1][1] == jogadorAtual && tabuleiro[2][0] == jogadorAtual){
        exibirResultado(jogadorAtual+" Ganhou")
    } 
}

  