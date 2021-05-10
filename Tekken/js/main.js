

let team1 = [];
let team2 = [];


const changeFase = (destino) => {

    let arrFase = ["fase1","fase2","fase3"];

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
                console.log("ESTE ES EL TEAM1 ", team1);
                console.log("ESTE ES EL TEAM2 ", team2);
                changeFase("fase3");
            }
        }

        document.getElementById(fighter).onclick = "";
        document.getElementById(fighter).className = "selected";

    }
}