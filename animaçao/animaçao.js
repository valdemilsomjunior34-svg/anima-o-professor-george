var canvas = document.getElementById("jogo");
var contexto = canvas.getContext("2d");

const bola = {
    x : 50,
    y : 50,
    r : 40,
    velocidade : 4,
    cor : "red",
};
const bola2 = {
    x : 200,
    y : 190,
    r : 30,
    velocidade : 4,
    cor : "green",
};
const bola3 = {
    x : 350,
    y : 350,
    r : 30,
    velocidade : 4,
    cor : "gold",
};
const bola4 = {
    x : 350,
    y : 100,
    r : 10,
    velocidade : 4,
    cor : "black",
};

function desenhar(bola){
    contexto.beginPath();
    contexto.arc(bola.x, bola.y, bola.r, 0, Math.PI*2);
    contexto.fillStyle = bola.cor;
    contexto.fill();
    contexto.closePath();
}
function animar (){
    contexto.clearRect(0,0, canvas.width, canvas.height);

    bola.x+=bola.velocidade;
    bola.y+=bola.velocidade;
    desenhar(bola);

    bola2.y+=bola.velocidade;
    desenhar(bola2);

    bola3.x+=bola.velocidade;
    desenhar(bola3);

    bola4.y+=bola.velocidade;
    desenhar(bola4);

    if(bola.x>canvas.width || bola.y>canvas.height){
        bola.velocidade = bola.velocidade*-1

        
    }else if(bola.x<0 || bola.y<0) {
        bola.velocidade = bola.velocidade*-1
    }

    requestAnimationFrame(animar)
}
animar()
