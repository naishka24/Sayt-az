const manat = document.getElementById('manat');
const manat1 = document.getElementById('manat1');
const dollar = document.getElementById('dollar');
const dollar1 = document.getElementById('dollar1');
const valyutalar = document.getElementById('valyutalar');
const valyutalar2 = document.getElementById('valyutalar2');
const flags = document.getElementById('flags');
const flags2 = document.getElementById('flags2');
const usa = document.getElementById('usa');
const usa1 = document.getElementById('usa1');
const azer = document.getElementById('azer');
const azer1 = document.getElementById('azer1');
const sidebar = document.getElementById('sidebar');
const circle = document.getElementById('circle2');
const vebsayt = document.getElementById('vebsayt');
const allDropdown = document.querySelectorAll('.scrollbar')

function chooseCurrency(e, cur) {
  manat.style.backgroundColor = cur === "manat" ? "#e4d6fa" : "white";
  dollar.style.backgroundColor = cur === "dollar" ? "#e4d6fa" : "white"
  manat1.style.backgroundColor = cur === "manat1" ? "#e4d6fa" : "white";
  dollar1.style.backgroundColor = cur === "dollar1" ? "#e4d6fa" : "white"
  e.stopPropagation()
}

function chooseLang(e, lang) {
  usa.style.backgroundColor = lang === "usa" ? "#e4d6fa" : "white";
  azer.style.backgroundColor = lang === "azer" ? "#e4d6fa" : "white"
  usa1.style.backgroundColor = lang === "usa1" ? "#e4d6fa" : "white";
  azer1.style.backgroundColor = lang === "azer1" ? "#e4d6fa" : "white"
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
function movingCircle() {
  let y = 0;
  let speed = 2;  

  setInterval(move, 55);
  function move() {
    y += speed;
    if (y > 35) {  
      y = 0; 
    }
    circle.style.top = y + 'px';
  }
}
movingCircle()

function gonder() {
  window.scrollTo({
    top: vebsayt.offsetTop,
    behavior: "smooth"
  })
}