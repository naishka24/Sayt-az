//elave header yaratdim, o birisinden copy-paste eledim cunki header.js qosulanda "circle"-a gore calc.htm-da sonsuz error gedir

const manat = document.getElementById('manat');
const dollar = document.getElementById('dollar');
const valyutalar = document.getElementById('valyutalar');
const valyutalar2 = document.getElementById('valyutalar2');
const flags = document.getElementById('flags');
const flags2 = document.getElementById('flags2');
const usa = document.getElementById('usa');
const azer = document.getElementById('azer');
const sidebar = document.getElementById('sidebar');
const allDropdown = document.querySelectorAll('.scrollbar')

function chooseCurrency(e, cur) {
  manat.style.backgroundColor = cur === "manat" ? "#e4d6fa" : "white";
  dollar.style.backgroundColor = cur === "dollar" ? "#e4d6fa" : "white"
  e.stopPropagation()
}

function chooseLang(e, lang) {
  usa.style.backgroundColor = lang === "usa" ? "#e4d6fa" : "white";
  azer.style.backgroundColor = lang === "azer" ? "#e4d6fa" : "white"
  e.stopPropagation()
}
function valyutaniDiliSec(sec) {
  if (sec === "valyuta") {
    valyutalar.classList.toggle('hidden') 
    flags.classList.add('hidden')
  } else if(sec === "dil") {
    flags.classList.toggle('hidden')
    valyutalar.classList.add('hidden')
  } else if(sec === "valyuta2"){
    valyutalar2.classList.toggle('hidden') 
    flags2.classList.add('hidden')
  } else if(sec === "dil2"){
    flags2.classList.toggle('hidden') 
    valyutalar2.classList.add('hidden')
  }  
}
function navbarOpen(drop) {
  allDropdown.forEach(down => {
    if(down.id != drop) {
      down.classList.add('hidden')
    }
  })
  document.getElementById(drop).classList.toggle('hidden');
}
function sidebarOpen() {
  sidebar.classList.toggle('hidden')
}
function xmark() {
  sidebar.classList.toggle('hidden')
}