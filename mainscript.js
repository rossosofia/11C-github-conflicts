"use strict"

// import {capitalize, makeSpaces} from "./stringscript.js"; 
import * as stringTools from "./stringscript.js";

start();

function start() {
  console.log("Start!");
  sayHello("Klaus");
}

function sayHello( name ) {
  // const greeting = makeSpaces(`Hello ${capitalize(name)}!`);
  const greeting = stringTools.makeSpaces(`Yo ${stringTools.capitalize(name)}!`);
  document.querySelector("#output").textContent = greeting;
  console.log("greeting:", greeting);
}

