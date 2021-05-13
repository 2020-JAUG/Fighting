
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
                }, 1000);
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
        <div><img class="imgFighters" src="img/${team1[0].nombre}.png" alt="luchador1"></div>
    </div>
    <div class="fightPanel"><img class="fotoVersus" src="img/fight.png" alt="lucha"></div>
    <div class="teamCharacters">
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
 let idWinner  = ""

//  / Show Winner
// const showWinnerGame = () => {
//     showWinner = document.getElementById("winner");
//     showWinnerName = document.getElementById("winnerName");
//     if(player1.life < 1){
//         showWinner.innerHTML = `<img id="maquetaEquipos2" src=“img/figthers/${player2.name}.png”>`;
//         showWinnerName.innerHTML = `${player2.name} wins!`;
//     }else if(player2.life < 1){
//         showWinner.innerHTML = `<img id="maquetaEquipos2" src=“img/figthers/${player1.name}.png”>`;
//         showWinnerName.innerHTML = `${player1.name} wins!`;

//             changeScreen("fase3", "fase4");
//     };
//         winner(player1.name)
// };

 fighting = () => {

    p1 = team1[0];
    p2 = team2[0];

    p1.hit(p2);
    p2.hit(p1);

    healthP1 = document.getElementById("healtP1")
    healthP2 = document.getElementById("healtP2")
    console.log(p1.vida,p2.vida);
    if(p1.vida <= 0 || p2.vida <= 0) {

        let winner = document.getElementById("winner");
        winner.innerHTML = `
        <div class="teamCharacters">
            <div class="containerWinner" id="winnerName">You Win!</div>
            <div><img class="winner" src="img/${team2[0].nombre}.png" alt="luchador2"></div>
        </div>
        `
        changeFase("fase5");
        console.log("prueba para imprimir ganador");
    }

    let resetGame = document.getElementById("resetBtn");

    resetGame.addEventListener("click", showWinner );

    function showWinner() {

        changeFase("fase1");
        window.location.reload();
    }


    //FIGHTER LIFE COUNTING

    // healthP1.value = `${player1.vida}`;
    // healthP2.value = `${player2.vida}`;
    // winner()
}
