

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

    let img_div = document.createElement('div');
    img_div.setAttribute("id","img_div");
    img_div.append(image);

    let p_div = document.createElement('div');
    p_div.append(p_name,p_price);

    div.append(img_div,p_div);
    cart_item.append(div);

    total = total + Number(product.price);
});


let total_div = document.getElementById('total_d');

let div_b_total = document.getElementById('div_b_total');
let p_b_total = document.getElementById('p_b_total');
p_b_total.innerText = `₹${total}`
div_b_total.append(p_b_total);

let div_b_discount = document.getElementById('div_b_discount');
let p_b_discount = document.getElementById('p_b_discount');
p_b_discount.innerText = `₹${0}`
div_b_discount.append(p_b_discount);

let div_s_total = document.getElementById('div_s_total');
let p_s_total = document.getElementById('p_s_total');
p_s_total.innerText = `₹${total}`
div_s_total.append(p_s_total);

let shiping_div = document.getElementById('shiping_div');
let p_shipping = document.getElementById('p_shipping');
p_shipping.innerText = `FREE`;
shiping_div.append(p_shipping);

let g_total_div = document.getElementById('g_total_div');
let p_g_total = document.getElementById('p_g_total');
p_g_total.innerText = `₹${total}`
g_total_div.append(p_g_total);




total_div.append(div_b_total,div_b_discount,div_s_total,shiping_div, g_total_div)

function discount_30() {
    let p_code = document.getElementById("code").value;

    if (p_code === "masai30") {
        p_b_discount.innerText = `₹${total* 0.3}`
        p_s_total.innerText = `₹${0.7 * total}`
        p_g_total.innerText = `₹${0.7 * total}`
    }
    
    
    console.log(p_code);
}

function chckOut() {
    `<a ${href=success.html}></a>`
}


