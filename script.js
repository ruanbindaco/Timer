var buttonStart;
var buttonPause;
var buttonReset;
var divTempo;
var buttonVolta;
var buttonLimparvolta;
var timerid;
var tempo = 0;

window.onload = init;

function init(){
  buttonStart = document.getElementById("start");
  buttonStart.onclick = start;

  buttonPause = document.getElementById("pause");
  buttonPause.onclick = pause;
  buttonPause.disabled = true;

  buttonReset = document.getElementById("reset");
  buttonReset.onclick = reset;

  buttonVolta = document.getElementById("volta");
  buttonVolta.onclick = volta;
  buttonVolta.disabled = true;

  
  buttonLimparvolta = document.getElementById("limparvolta");
  buttonLimparvolta.onclick = limparvolta;
  buttonLimparvolta.disabled = true;
  
  

  divTempo = document.getElementById("tempo");

}

function reset(){
  tempo = 0;
  divTempo.innerText = tempo.toFixed(1) + "s";
  
}

function pause(){
  clearInterval(timerid);
  buttonStart.disabled = false;
  buttonPause.disabled = true;
}

function start(){
  timerid = setInterval( print, 100 );
  buttonPause.disabled = false;
  buttonStart.disabled = true;
  buttonVolta.disabled = false;
}

function volta(){
  var nova_volta = document.createElement("h5");
  var node = document.createTextNode("volta " +      tempo.toFixed(1) + "s");
    nova_volta.appendChild(node);
  var element = document.getElementById("volta");
  element.appendChild(nova_volta);

  buttonLimparvolta.disabled = false;
}

function limparvolta(){
  document.location.reload(true);
}

function print(){
  tempo = tempo + 0.1;
  divTempo.innerText = tempo.toFixed(1) + "s"; 
}

