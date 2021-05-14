
let team1 = [];
let team2 = [];
let p1 = "";
let p2 = "";

const changeFase = (destino) => {

    let arrFase = ["fase1","fase2","fase3", "fase4", "fase5"];

    arrFase = arrFase.filter(val => !destino.includes(val));

    document.getElementById(destino).style.display = "block";

    for(let _fase of arrFase) { //_fase es el nombre de la variable para iterar en los elementos del arrFase
        document.getElementById(_fase).style.display = "none";
    }
};

const chooseFighter = (fighter) => {


    if(team2.length < 1) {

        if(team1.length < 1) {
            team1.push(allPlayers[fighter]);

        } else {

            team2.push(allPlayers[fighter]);

            if(team2.length == 1) {
                // console.log("ESTE ES EL TEAM1 ", team1);
                // console.log("ESTE ES EL TEAM2 ", team2);
                llenaEquipos();
                changeFase("fase3");

                setTimeout(() => {
                    fight();
                    changeFase("fase4");
                }, 4000);
            }
        }
        document.getElementById(fighter).onclick = "";
        document.getElementById(fighter).className = "selected";
    }
}


const llenaEquipos = () => {
    let teams = document.getElementById("teams");

    teams.innerHTML = `
    <div class="teamCharacters">
        <div class="teamA">Team A</div>
        <div><img class="imgFighters" src="img/${team1[0].nombre}.png" alt="luchador1"></div>
    </div>

    <div class="fightPanel"><img class="fotoVersus" src="img/fight.png" alt="lucha"></div>

    <div class="teamCharacters">
        <div class="teamA teamB">Team B</div>
        <div><img class="imgFighters" src="img/${team2[0].nombre}.png" alt="luchador2"></div>
    </div>
    `;
}

//PARA PONER MAS JUGADORES EN LA FASE SELECCIONADOS
{/* <div><img class="imgFighters" src="img/${team1[1].nombre}.png" alt="luchador3"></div>
<div><img class="imgFighters" src="img/${team2[1].nombre}.png" alt="luchador4"></div> */}


const fight = () => {

    let fight = document.getElementById("fight");
    fight.innerHTML =
    `<div class="teamCharacters">
        <div><img class="imgFighters2" src="img/${team1[0].nombre}.png" alt="luchador1"></div>
    </div>
    <div class="teamCharacters">
        <div><img class="imgFighters2" src="img/${team2[0].nombre}.png" alt="luchador2"></div>
    </div>`
    // console.log("este team 1 scenariofight", team1);
    // console.log("este team 2 scenariofight", team2);

}

 fighting = () => {

    p1 = team1[0];
    p2 = team2[0];

    p1.hit(p2);
    p2.hit(p1);
    updateLife();

    console.log("vida del teamA",p1.vida,"vida del equip2",p2.vida);

        if(p1.vida <= 0 ) {

            let winner = document.getElementById("winner");
            winner.innerHTML = `
            <div class="teamCharacters">
                <div class="containerWinner" id="winnerName">You Win!</div>
                <div><img class="winner" src="img/${team2[0].nombre}.png" alt="luchador2"></div>
            </div>
            `
            changeFase("fase5");
            console.log("prueba para imprimir ganador");
        } else if(p2.vida <= 0) {

            let winner = document.getElementById("winner");
            winner.innerHTML = `
            <div class="teamCharacters">
                <div class="containerWinner" id="winnerName">You Win!</div>
                <div><img class="winner" src="img/${team1[0].nombre}.png" alt="luchador2"></div>
            </div>
            `
            changeFase("fase5");
            console.log("prueba para imprimir ganador");
        } else if(p1.vida <= 0 && p2.vida <= 0){
            alert("empata");
        }

        let resetGame = document.getElementById("resetBtn");

        resetGame.addEventListener("click", showWinner );

        function showWinner() {

            changeFase("fase1");
            window.location.reload();
        }
}

        const updateLife = () => {

            let vidaBarra1 = p1.vida;
            let vidaBarra2 = p2.vida;

                vidaBarra1 = (vidaBarra1 * 100)/400;

                document.getElementById("myBar").style.width = vidaBarra1 + "%";

                vidaBarra2 = (vidaBarra2 * 100)/400;

                document.getElementById("myBar2").style.width = vidaBarra2 + "%";
        }

// Function to play the presentations
    'use strict';

    let sound = document.querySelector(".mouse");
    let soundEddy = document.querySelector(".mouseEddy");
    let soundJin = document.querySelector(".mouseJin");
    let soundKing = document.querySelector(".mouseKing");


    switch(sound, soundEddy, soundJin, soundKing) {

        case   sound.addEventListener("click", () => {
                let audio = document.createElement("audio");
                audio.setAttribute("src", "/audios/yoshimitsu.mp3");
                audio.play();
            }):
            break;

        case soundEddy.addEventListener('click', () => {
            let audio = document.createElement("audio");
            audio.setAttribute("src", "/audios/eddy.mp3");
            audio.play();
        }):
        break;

        case soundJin.addEventListener('click', () => {
            let audio = document.createElement("audio");
            audio.setAttribute("src", "/audios/jin.mp3");
            audio.play();
        }):
        break;

        case soundKing.addEventListener('click', () => {
            let audio = document.createElement("audio");
            audio.setAttribute("src", "/audios/king.mp3");
            audio.play();
        }):

        default:
            texto = 'ERR';
    }

{/* <div class="opponent" >
<div class="players">PLAYER 2</div>
<div class="life"><progress id="healthP2" value="400" min="0" max="400"></progress></canvas></div>
<div class="contrincante" id="opponent2"></div>
</div>
*/}


//FUNCION PARA CREAR UN SEGUNDO COMBATE CON DOS JUGADORES MAS

// const fight2 = () => {

//     let fight = document.getElementById("fight");
//     fight.innerHTML =
//         console.log('Estoy en fase 5');
//         let fightWinner = document.getElementById("fightWinner");

//         fightWinner.innerHTML = `<div class="teamCharacters">
//             <div><img class="imgFighters2" src="img/${team1[1].nombre}.png" alt="luchador1"></div>
//         </div>
//         <div class="teamCharacters">
//             <div><img class="imgFighters2" src="img/${team2[1].nombre}.png" alt="luchador2"></div>
//         </div>`
//     console.log("este team 1 scenariofight", team1);
//     console.log("este team 2 scenariofight", team2);

// }