
let team1 = [];
let team2 = [];
let p1 = "";
let p2 = "";


const changeFase = (destino) => {

    let arrFase = ["fase1","fase2","fase3", "fase4", "fase5"];

    arrFase = arrFase.filter(val => !destino.includes(val));

    document.getElementById(destino).style.display = "block";

    for(let _fase of arrFase) { //_phase is the name of the variable to iterate through the elements of the array Phase
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
                setTimeout(() => {
                    // Show the figthers
                    changeFase("fase3");
                    llenaEquipos();

                    // Present VS
                    setTimeout(() => {
                        fight();
                        changeFase("fase4");
                    }, 6000);

                }, 5000)
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
// Stage for the fight
const fight = () => {

    let fight = document.getElementById("fight");

    fight.innerHTML =
    `<div class="teamCharacters">
        <div><img class="imgFighters2" src="img/${team1[0].nombre}.png" alt="luchador1"></div>
    </div>

    <div class="teamCharacters">
        <div><img class="imgFighters2" src="img/${team2[0].nombre}.png" alt="luchador2"></div>
    </div>`
}

 fighting = () => {

    p1 = team1[0];
    p2 = team2[0];

    p1.hit(p2);
    p2.hit(p1);
    updateLife();

    if( p1.vida <= 0 ) { //Print the winner

        let winner = document.getElementById("winner");
        winner.innerHTML = `
        <div class="teamCharacters">
            <div class="containerWinner" id="winnerName"></div>
            <div><img class="winner" src="img/${team2[0].nombre}.png" alt="luchador2"></div>
        </div>
        `
        changeFase("fase5");

    } else if( p2.vida <= 0 ) {

        let winner = document.getElementById("winner");
        winner.innerHTML = `
        <div class="teamCharacters">
            <div class="containerWinner" id="winnerName"></div>
            <div><img class="winner" src="img/${team1[0].nombre}.png" alt="luchador2"></div>
        </div>
        `
        changeFase("fase5");

    } else if(p1.vida <= 0 && p2.vida <= 0){
            alert("empata");
    }

        // Here we start the game again
        let resetGame = document.getElementById("resetBtn");

        resetGame.addEventListener("click", showWinner );

        function showWinner() {

            changeFase("fase1");
            window.location.reload();
        }
}

// Constant to update life dynamically
const updateLife = () => {

    let vidaBarra1 = p1.vida;
    let vidaBarra2 = p2.vida;

    vidaBarra1 = (vidaBarra1 * 100)/400;

    document.getElementById("myBar").style.width = vidaBarra1 + "%";
    vidaBarra2 = (vidaBarra2 * 100)/400;
    document.getElementById("myBar2").style.width = vidaBarra2 + "%";
}