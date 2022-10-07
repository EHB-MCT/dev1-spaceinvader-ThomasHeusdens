"use strict";

DrawSpaceInvader();

function DrawSpaceInvader() {

    let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

    context.fillStyle = 'black'
    context.beginPath();
    context.rect(50,50,300,300);
    context.fill();

    //left side
    context.fillStyle = '#1CFF00'
    context.beginPath();
    context.rect(75,75,50,50);
    context.fill();

    context.beginPath();
    context.rect(125,75,50,50);
    context.fill();

    context.beginPath();
    context.rect(75,125,50,50);
    context.fill();

    context.beginPath();
    context.rect(75,175,50,50);
    context.fill();

    context.beginPath();
    context.rect(125,225,50,50);
    context.fill();

    context.beginPath();
    context.rect(125,275,50,50);
    context.fill();

    context.beginPath();
    context.rect(75,275,50,50);
    context.fill();

    //right side
    context.beginPath();
    context.rect(225,75,50,50);
    context.fill();

    context.beginPath();
    context.rect(275,75,50,50);
    context.fill();

    context.beginPath();
    context.rect(275,125,50,50);
    context.fill();

    context.beginPath();
    context.rect(275,175,50,50);
    context.fill();

    context.beginPath();
    context.rect(225,225,50,50);
    context.fill();

    context.beginPath();
    context.rect(225,275,50,50);
    context.fill();

    context.beginPath();
    context.rect(275,275,50,50);
    context.fill();
}

