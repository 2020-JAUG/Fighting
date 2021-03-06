
class Fighter{

    constructor(nombre,ataque,defensa,tecnica,velocidad) {
        this.vida = 400;
        this.suerte = Math.floor(Math.random() * 17);
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.tecnica = tecnica;
        this.velocidad = velocidad;
    }

    hit(enemy) {
        enemy.vida -= this.ataque - (enemy.defensa * (enemy.suerte / this.velocidad));
    }

    specialHit(enemy) {
        enemy.vida -= this.ataque + this.tecnica - (enemy.defensa * (enemy.suerte / this.velocidad));
    }

    lessLife() {
        this.vida = this.vidaInicial;
    }
}


//Instancio luchadores
let player1 = new Fighter("Yoshimitsu",39,23,14,22);
let player2 = new Fighter("Eddy",34,21,14,19);
let player3 = new Fighter("Jin",31,22,12,15);
let player4 = new Fighter("King",37,19,11,9);


//TRADUCTOR PARA TRAERNOS LOS VALORES DE CADA JUGADOR, CUANDO SE DECLAREN EN MAIN.JS
let allPlayers = {
    "1" : player1,
    "2" : player2,
    "3" : player3,
    "4" : player4,
}

// player1.hit(player2)
// player3.hit(player3)

console.log(player1, player2, player3,player4);