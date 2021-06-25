
//Principais variáveis do game

var order = [];
var clickedOrder = [];
var score = 0;
var tempo = 250;

//0 - verde | 1 - verm | 2 -amarelo | 3 - azul

var blue = document.getElementById('blue');
var yellow = document.getElementById('yellow');
var red = document.getElementById('red');
var green = document.getElementById('green');

var mainGame = document.getElementsByClassName('main-game')
var genius = document.getElementsByClassName('genius')

//Gera ordem aleatória
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder=[];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }
}

//Acende a próxima cor
let lightColor = (a, b) => {
    b = b * 500;
    setTimeout(() => {
        document.getElementById(a).classList.add('selected');
    }, 200);
    document.getElementById(a).classList.remove('selected');
    
}

//Checa as respostas
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: $(score)\n Você acertou! Iniciando próximo nível...`);
        nextLevel();
    }
}

//Função clique do jogador
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)

    
}

//Função retorna a cor
let createColorElement = (color) =>{
    if(color == 0){
        return 'green';
    } else if(color == 1){
        return 'red';
    } else if(color == 2){
        return 'yellow';
    } else if (color == 4){
        return 'blue';
    }
}

//Funcão aumenta nível
let nextLevel = () => {
    score++;
    tempo +=2;
    shuffleOrder();
}

//Função game over
let gameOver = () => {
    order = [];
    clickedOrder = [];
    document.querySelector('div.genius').classList.replace('genius', 'blank');
    document.getElementById('fim').classList.replace('blank','fim');
    document.getElementById('finalScore').innerHTML = "Você chegou até o level: "+ score ;
}

let playGame = () => {
    score = 0;
    tempo = 500;
    document.getElementById('inicio').style.display = 'none';
    
    document.querySelector('div.blank').classList.replace('blank','genius');

    nextLevel();
}

//Clicks do game
//green.onclick = () => click(0);
//red.onclick = () => click(1);
//yellow.onclick = () => click(2);
//blue.onclick = () => click(3);
