"use strict"

import {capitalize, makeSpaces} from "./stringscript.js"; 
start();

function start() {
  console.log("Start!");
  sayHello("Klaus");
}

function sayHello( name ) {
  const greeting = stringTools.makeSpaces(`Yo ${stringTools.capitalize(name)}!`);
  document.querySelector("#output").textContent = greeting;
  console.log("greeting:", greeting);
}

