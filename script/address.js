var detail = JSON.parse(localStorage.getItem('userdetail'))
var l = detail.length-1
console.log(detail[l].eml)

var set = document.getElementById('useremail')
set.innerText = detail[l].eml
