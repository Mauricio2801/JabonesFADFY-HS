    document.getElementById("about").onclick = function() {mostrar_about()};

    document.getElementById("products").onclick = function() {mostrar_productos()};

    function mostrar_about() {
        document.getElementById("about-us").style.display="block";
        document.getElementById("products-container").style.display="none";
    }
    function mostrar_productos() {
        document.getElementById("products-container").style.display="block";
        document.getElementById("about-us").style.display="none";
    }



//Desaparecer imagen de producto cuando se pone mouse encima

var product_image = document.getElementsByClassName("product-image");
var fader = document.getElementsByClassName("fader");


function toggle(){
    for (var i = 0 ; i < fader.length; i++) {
        fader[i].classList.toggle("fade"); 
    }
    
}

for (var i = 0 ; i < product_image.length; i++) {
    product_image[i].addEventListener('mouseover' , toggle , false ) ; 
    product_image[i].addEventListener('mouseout' , toggle , false ) ; 
}

