
let startAudio  = document.querySelector(".startAudio");

startAudio.addEventListener("click", () => {
    let audio = document.createElement("audio");
    audio.setAttribute("src", "/audios/start.mp3");
    audio.play();
    console.log("prueba");
});
// Function to play the presentations
'use strict';

let sound = document.querySelector(".mouse");
let soundEddy = document.querySelector(".mouseEddy");
let soundJin = document.querySelector(".mouseJin");
let soundKing = document.querySelector(".mouseKing");
let mouseNextFight = document.querySelector(".mouseNextFight");

switch(sound, soundEddy, soundJin, soundKing, mouseNextFight) {

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

    case mouseNextFight.addEventListener('click', () => {
        let audio = document.createElement("audio");
        audio.setAttribute("src", "/audios/nextFight.mp3");
        audio.play();
    }):

    default:
        texto = 'ERR';
}