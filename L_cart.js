let cart_data = JSON.parse(localStorage.getItem("lorialCart"));
let data_div = document.getElementById("data");

var total = 0;



cart_data.forEach(function (product) {

    let div = document.createElement('div');

    let p_name = document.createElement('p');
    p_name.innerText = product.name;

    let p_price = document.createElement('p');
    p_price.innerText = product.price;

    let image = document.createElement('img');
    image.src = product.image;

    div.append(image,p_name,p_price);

    data_div.append(div);

    total = total + Number(product.price);
    

});


let total_h1 = document.getElementById('total');
total_h1.innerHTML = `Total Price- ₹${total}`;   //line 78 and 79 are same 
// total_h1.innerText = "Total Price- "+"₹" +total;
console.log(total);

function makePyment() {
    setTimeout(function() {
        alert('Thank You! Your Payment is Successfull')
    }, 3000);
}
