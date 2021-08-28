var detail = JSON.parse(localStorage.getItem('userdetail'))
var l = detail.length-1;

var set = document.getElementById('useremail')
set.innerText = detail[l].eml;

let total = document.getElementById('p_g_total');
let totalshow = document.getElementById('totalamount')
totalshow.innerText = total.innerText;
