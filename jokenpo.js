function jogar(){
    if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.
    getElementById("tesoura").checked == false) {
        alert("Selecione uma opção");

    } else{
        //logica principal
        var sorteio = Math.floor(Math.random() *3);
        switch(sorteio){
            case 0:
                document.getElementById("img").src="img/pedra.png";
                break;
            case 1:
                document.getElementById("img").src="img/papel.png"; 
                break;
            case 2:
                document.getElementById("img").src="img/tesoura.png";
                break;
            
        }
        //verificar o vencedor
        if((document.getElementById("pedra").checked == true && sorteio == 0) || 
        (document.getElementById("papel").checked == true && sorteio == 1) || (
         document.getElementById("tesoura").checked == true && sorteio == 2)){
            document.getElementById("placar").innerHTML="Empate";
         } else if ((document.getElementById("pedra").checked == true && sorteio == 2) || 
        (document.getElementById("papel").checked == true && sorteio == 0) || (
         document.getElementById("tesoura").checked == true && sorteio == 1)) {
            document.getElementById("placar").innerHTML="Jogador Venceu";
         } else { 
             document.getElementById("placar").innerHTML="Computador Venceu";
        }
    }
    

}

function resetar(){
    document.getElementById("img").src="img/jogo.png"
    document.getElementsById("placar").innerHTML=""; //irá limpar o texto do jogador pc

}