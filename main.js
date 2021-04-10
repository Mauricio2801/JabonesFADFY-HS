document.getElementById("about").onclick = function () { mostrar_about() };
var closer = document.getElementsByClassName("close");

for (var i = 0; i < closer.length; i++) {
    closer[i].onclick = function () { cerrar() };
}



document.getElementById("controler-info").onclick = function () { mostrar_info() };
document.getElementById("controler-info1").onclick = function () { mostrar_info1() };
document.getElementById("controler-info2").onclick = function () { mostrar_info2() };
document.getElementById("controler-info3").onclick = function () { mostrar_info3() };

document.getElementById("products").onclick = function () { mostrar_productos() };

function mostrar_about() {
    document.getElementById("about-us").style.display = "block";
    document.getElementById("products-container").style.display = "none";
    document.getElementById("main-container").style.display = "none";
}
function mostrar_info() {
    document.getElementById("info").style.display = "block";
}
function mostrar_info1() {
    document.getElementById("info1").style.display = "block";
}
function mostrar_info2() {
    document.getElementById("info2").style.display = "block";
}
function mostrar_info3() {
    document.getElementById("info3").style.display = "block";
}

function mostrar_productos() {
    document.getElementById("products-container").style.display = "block";
    document.getElementById("about-us").style.display = "none";
    document.getElementById("main-container").style.display = "none";
}
function cerrar() {
    document.getElementById("about-us").style.display = "none";
    document.getElementById("products-container").style.display = "none";
    document.getElementById("main-container").style.display = "block";
}



//Desaparecer imagen de producto cuando se pone mouse encima

var product_image = document.getElementsByClassName("product-image");
var fader = document.getElementsByClassName("fader");


function toggle() {
    for (var i = 0; i < fader.length; i++) {
        fader[i].classList.toggle("fade");
    }

}

for (var i = 0; i < product_image.length; i++) {
    product_image[i].addEventListener('mouseover', toggle, false);
    product_image[i].addEventListener('mouseout', toggle, false);
}

