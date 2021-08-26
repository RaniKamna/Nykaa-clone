

let cart_data = JSON.parse(localStorage.getItem("lorialCart"));

var total = 0;

let main_div = document.getElementById("main");
let cart_item = document.getElementById("cart_item");
let price_det = document.getElementById('price_detail')

cart_data.forEach(function(product) {
    let div = document.createElement('div');

    let p_name = document.createElement('p');
    p_name.innerText = product.name

    let p_price = document.createElement('p');
    p_price.innerText ="₹"+product.price;

    let image = document.createElement('img');
    image.src = product.Image;

    div.append(image,p_name,p_price);
    cart_item.append(div);

    total = total + Number(product.price);
});


let total_div = document.getElementById('total_d');
let total_price = document.createElement('p');
total_price.innerText = `Total Price- ₹${total}`
total_div.append(total_price)

// let p_code = document.getElementById("code").value;

let discount = document.createElement('p');
discount.innerText = `Discount- ₹${0}`
let d_price =document.createElement('p');
d_price.innerText = `Discounted Price- ₹${total}`

total_div.append(discount,d_price)

function discount_30() {
    let p_code = document.getElementById("code").value;

    if (p_code === "masai30") {
        discount.innerText = `Discount- ₹${total* 0.3}`
        d_price.innerText = `Discounted Price- ₹${0.7 * total}`
    }
    
    
    console.log(p_code);
}

function chckOut() {
    `<a ${href=success.html}></a>`
}


