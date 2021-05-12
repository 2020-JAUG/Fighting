
let team1 = [];
let team2 = [];
let p1 = "";
let p2 = "";

const changeFase = (destino) => {

    let arrFase = ["fase1","fase2","fase3", "fase4", "fase5"];

    arrFase = arrFase.filter(val => !destino.includes(val));

    document.getElementById(destino).style.display = "block";

    for(let _fase of arrFase) { //_fase es el nombre de la variable para iteraren los elementos del arrFase
        document.getElementById(_fase).style.display = "none";
    }
};

const chooseFighter = (fighter) => {


    if(team2.length < 2) {

        if(team1.length < 2) {
            team1.push(allPlayers[fighter]);

        } else {

            team2.push(allPlayers[fighter]);

            if(team2.length == 2) {
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
        <div><img class="imgFighters" src="img/${team1[1].nombre}.png" alt="luchador3"></div>
    </div>
    <div class="fightPanel"><img class="fotoVersus" src="img/fight.png" alt="lucha"></div>
    <div class="teamCharacters">
        <div><img class="imgFighters" src="img/${team2[0].nombre}.png" alt="luchador2"></div>
        <div><img class="imgFighters" src="img/${team2[1].nombre}.png" alt="luchador4"></div>
    </div>
    `;
}




const fight = () => {
    let fight = document.getElementById("fight");
    fight.innerHTML =
    `<div class="teamCharacters">
        <div><img class="imgFighters2" src="img/${team1[0].nombre}.png" alt="luchador1"></div>

    </div>

    <div class="teamCharacters">
        <div><img class="imgFighters2" src="img/${team2[0].nombre}.png" alt="luchador2"></div>

    </div>`
    console.log("este team 1 scenariofight", team1);
    console.log("este team 2 scenariofight", team2);

}



 fighting = () => {

    p1 = team1[0];
    p2 = team2[0];

    console.log("empieza la lucha");

    p1.hit(p2);
    p2.hit(p1);

    console.log(p1.vida,p2.vida);
    // do{

    // }while();

    if(p1.vida <= 0 || p2.vida <= 0) {
        console.log('Estoy en fase 5');
        changeFase("fase5");
    }
}