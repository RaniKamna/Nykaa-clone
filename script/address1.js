let total1 = JSON.parse(localStorage.getItem("Price_Detail"))
let totalshow = document.getElementById('totalamount')
let gtotalshow = document.getElementById('gtotal')
totalshow.innerText = total1[0];
gtotalshow.innerText = total1[0];
console.log(gtotalshow)