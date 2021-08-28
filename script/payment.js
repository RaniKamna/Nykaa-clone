let total1 = JSON.parse(localStorage.getItem("Price_Detail"))
let totalshow = document.getElementById('totalamount')
let gtotalshow = document.getElementById('gtotal')
totalshow.innerText = total1[0];
gtotalshow.innerText = total1[0];

var items = document.querySelector('.righthead')
items.innerText = total1[5]+'   '+'Items in your Bag'
console.log(total1[5])

function SubmitForm(event) {
    event.preventDefault();

    let address = document.querySelector('.textarea').value;

    if (!address) {
        alert("Please Enter Your Address Detail");
    }
    else {
        window.location.href = "payment.html";
    }
}