let total1 = JSON.parse(localStorage.getItem("Price_Detail"))
let totalshow = document.getElementById('totalamount')
let gtotalshow = document.getElementById('gtotal')
totalshow.innerText = total1[0];
gtotalshow.innerText = total1[0];

var items = document.querySelector('.righthead')
items.innerText = total1[5] + '   ' + 'Items in your Bag'
console.log(total1[5])





// let innerbox = document.querySelector('.innerbox');
// let Credit_form = document.getElementById('Credit_form');

function upiPayment(event) {
    // event.preventDefault();

    let innerbox = document.querySelector('.innerbox');
    // let Credit_form = document.getElementById('Credit_form');

    let upi_form = `<form>
    
    <label for="">BHIM UPI</label>
    <br><br>
    <input class="cardNum inp" type="text" placeholder="(VPA / UPI ID eg. 9545166818@ybl)">
    <br>
   
    <button class=" sub inp">
        <a href="thankyou.html">PAY NOW</a>
    </button>

</form>`



    // innerbox.remove(Credit_form);
    innerbox.innerHTML = null;
    innerbox.innerHTML += upi_form;

    console.log("yes");
}
function GayPayment(event) {
    event.preventDefault();

    let innerbox = document.querySelector('.innerbox');

    let Gpay_form = `<form>
    
    <label for="">Google Pay</label>
    <br><br>
    <input class="cardNum inp" type="text" placeholder="(Enter Mobile No. / UPI ID)">
    <br>
   
    <button class=" sub inp">
        <a href="thankyou.html">PAY NOW</a>
    </button>

</form>`



    // innerbox.remove(Credit_form);
    innerbox.innerHTML = null;
    innerbox.innerHTML += Gpay_form;

    console.log("yes");
}


function MobWallet_pay(event) {
    event.preventDefault();

    let innerbox = document.querySelector('.innerbox');

    let wallet_form = `<form>
    
    <label for="">Mobile Wallets</label>
    <br><br>
    <input class="cardNum inp" type="text" placeholder="Paytm">
    <br>
    
    <div style="display: flex;">
    <div style="display: flex; align-items: center;">
    <img src="https://www.nykaa.com/assets/desktop/images/checkout/pay-tm-payment.png
    ">
    </div>
    <button class=" sub inp">
        <a href="thankyou.html">Connect Paytm Wallet</a>
    </button>

    </div>

</form>`



    // innerbox.remove(Credit_form);
    innerbox.innerHTML = null;
    innerbox.innerHTML += wallet_form;

    console.log("yes");
}