const selectDomen = document.getElementById('selectDomen')
const ayliq = document.getElementById('ayliq')
const qiymetElem = document.querySelectorAll('.qiymet')
const sub = document.querySelectorAll('.sub')
const planlar = document.querySelectorAll('#planlar article')
const butSifaris = document.querySelectorAll('#planlar article button')

const domArr = ['.az','.com','.net','.info','.biz','.org','.us',
                '.in','.ws','.mobi','.tv','.me','.ru','.de','.com.az','.co','.site.az',
                '.sayt.az','.ureb.com','.org.az','.info.az','.biz.az','.net.az']; 

function chooseDomen() {
  selectDomen.innerHTML = ''
 domArr.map(item => selectDomen.innerHTML += `<option>${item}</option>`)

}
chooseDomen()

function changePlans(back) {
  ayliq.style.backgroundColor = back === "ayliq" ? "#a271f1" : "white" 
  illik.style.color = back === "ayliq" ? "#94a3b8" : "white"
  illik.style.backgroundColor = back === "illik" ? "#a271f1" : "white"
  ayliq.style.color = back === "illik" ? "#94a3b8" : "white"

  qiymetElem.forEach(qiymet => {
    let value = parseFloat(qiymet.textContent) || 0;
    qiymet.innerHTML = `${back === "illik" ? value * 12 : value / 12}`
  })
  sub.forEach(sub => {
    sub.innerHTML = `${back === "illik" ? "/il" : "/ay"}`
  })
}
function planiSec(plan) {
  planlar.forEach(item => {
    item.style.borderColor = "#fafbff"
  })
  butSifaris.forEach(button => {
    button.style.backgroundColor = "white"
    button.style.color = "#a271f1"
  })
  plan.style.borderColor = "#9228e4"

  const button = plan.querySelector('button')
  button.style.backgroundColor = "#a271f1"
  button.style.color = "white"
}
