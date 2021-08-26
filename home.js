var username = JSON.parse(localStorage.getItem('userdetail'))
let l = username.length-1
let n = (username[l].name)

var acname = document.getElementById('username')
acname.innerText = n;