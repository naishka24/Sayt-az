const statik = document.getElementById('statik')
const span1 = document.getElementById('span1')
const span2 = document.getElementById('span2')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const xerc2 = document.getElementById('xerc2')
const xerc3 = document.getElementById('xerc3')
const xerc4 = document.getElementById('xerc4')
const cost = document.getElementById('cost')
const elaveler = document.getElementById('elaveler')
const seo = document.getElementById('seo')
const elektron = document.getElementById('elektron')
const logo = document.getElementById('logo')
const totalQiymet = document.getElementById('totalQiymet')

function sehifeRange(a, b) {
  let value1 = +input1.value  
  let value2 = +input2.value

  if (value1 === 0) {
    value1 = 1
  } 
    span1.innerHTML = value1;
    let res = (value1 * 100) + ((value2 * 100) * value1);
    span2.innerHTML = res;
    statik.innerHTML = res;
    getTotalQiymet()
  }

  const prices = {
    'Toggle1': 200,
    'Toggle2': 400,
    'Toggle3': 100,
    'Toggle4': 400,
    'Toggle5': 50,
    'Toggle6': 50,
    'Toggle7': 100,
    'Toggle8': 100,
    'Toggle9': 100,
    'Toggle10': 100,
    'Toggle11': 400,
    'Toggle12': 50,
    'Toggle13': 50,
    'Toggle14': 300,
    'check1': 200,
    'check2': 300,
    'check3': 300,
    'check4': 100,
    'check5': 100,
    'Toggle21': 200,
    'Toggle22': 500,
    'Toggle23': 300,
    'Toggle24': 300,
    'Toggle25': 300,
    'Toggle26': 200
  }

function addToggle(id) {
  const checkbox = document.getElementById(id)
  let res = +xerc2.innerHTML

  if (checkbox.checked) {
    res += prices[id]
  } else {
    res -= prices[id]
  }
  xerc2.innerHTML = res
  elaveler.innerHTML = res
  getTotalQiymet()
}

function addCheck (id) {
  const checkbox = document.getElementById(id)
  let res = +xerc3.innerHTML

  if (checkbox.checked) {
    res += prices[id]
  } else {
    res -= prices[id]
  }
  xerc3.innerHTML = res
  seo.innerHTML = res
  getTotalQiymet()
}

 function addNextToggle(id) {
  const checkbox = document.getElementById(id)
  let res = +xerc4.innerHTML

  if (checkbox.checked) {
    res += prices[id]
  }else {
    res -= prices[id]
  }
  xerc4.innerHTML = res
  elektron.innerHTML = res
  getTotalQiymet()
 }

 function logoDesign() {
  let value = +input3.value

  let res = value*100
  cost.innerHTML = res
  logo.innerHTML = res
  getTotalQiymet()
 }

function getTotalQiymet() {
  const qiymet = 450

  const total = +statik.innerHTML + +elaveler.innerHTML + +seo.innerHTML + +elektron.innerHTML + +logo.innerHTML;

  totalQiymet.innerHTML = total > qiymet ? total : qiymet
  

}
