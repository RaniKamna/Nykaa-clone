

let cart_data = JSON.parse(localStorage.getItem("lorialCart"));

var total = 0;

let main_div = document.getElementById("main");
let cart_item = document.getElementById("cart_item");
let price_det = document.getElementById('price_detail')

cart_data.forEach(function(product) {
    let div = document.createElement('div');

    let p_name = document.createElement('p');
    p_name.innerText = product.name

    let p_rating = document.createElement('p');
    p_rating.innerText = product.rating

    let p_price = document.createElement('p');
    p_price.innerText ="₹"+product.price;

    let image = document.createElement('img');
    image.src = product.image;

    div.append(image,p_name,p_price,p_rating);
    cart_item.append(div);

    total = total + Number(product.price);
});


let total_div = document.getElementById('total_d');
let total_price = document.createElement('p');
total_price.innerText = `Bag Total- ₹${total}`
total_div.append(total_price)

// let p_code = document.getElementById("code").value;

let discount = document.createElement('p');
discount.innerText = `Bag Discount- ₹${0}`

let d_price =document.createElement('p');
d_price.innerText = `Sub Total- ₹${total}`

let s_price =document.createElement('p');
s_price.innerText = `Shipping Charge- FREE`

let g_total =document.createElement('p');
g_total.innerText = `Grand Total- ₹${total}`

total_div.append(discount,d_price,s_price,g_total)

function discount_30() {
    let p_code = document.getElementById("code").value;

    if (p_code === "masai30") {
        discount.innerText = `Bag Discount- ₹${total* 0.3}`
        d_price.innerText = `Sub Total- ₹${0.7 * total}`
        g_total.innerText = `Grand Total- ₹${0.7 * total}`
    }
    
    
    console.log(p_code);
}

function chckOut() {
    `<a ${href=success.html}></a>`
}


