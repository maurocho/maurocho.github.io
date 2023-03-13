let colorpresen = function (){

        document.getElementById("sobremi").addEventListener("mouseover", mouseOver);
        document.getElementById("sobremi").addEventListener("mouseout", mouseOut);

    function mouseOver() {
        document.getElementById("sobremi").style.color = "white";
}

    function mouseOut() {
        document.getElementById("sobremi").style.color = "#274586";
}
};
colorpresen();



let colorcurri = function (){

        document.getElementById("curriculum").addEventListener("mouseover", mouseOver);
        document.getElementById("curriculum").addEventListener("mouseout", mouseOut);

    function mouseOver() {
        document.getElementById("curriculum").style.color = "white";
}

    function mouseOut() {
        document.getElementById("curriculum").style.color = "#274586";
}

}
colorcurri();

let colorprueba = function (){

        document.getElementById("parra").addEventListener("mouseover", mouseOver);
        document.getElementById("parra").addEventListener("mouseout", mouseOut);

    function mouseOver() {
        document.getElementById("parra").style.color = "#87C0D6";
}

    function mouseOut() {
        document.getElementById("parra").style.color = "#E54C1B";
}
}
colorprueba();


let colorprueba1 = function (){

        document.getElementById("parra1").addEventListener("mouseover", mouseOver);
        document.getElementById("parra1").addEventListener("mouseout", mouseOut);

    function mouseOver() {
        document.getElementById("parra1").style.color = "#87C0D6";
}

    function mouseOut() {
        document.getElementById("parra1").style.color = "#E54C1B";
}

}
colorprueba1();


let scroll = function(){

        window.onscroll = function() {myFunction()};
    
    function myFunction() {
        if (document.documentElement.scrollTop > 400) {
          document.getElementById("prueba_js").className = "cambia_color";
        } else {
          document.getElementById("prueba_js").className = "";
        }
        }
    }
scroll();

