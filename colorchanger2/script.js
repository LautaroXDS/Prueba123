var fondo = document.getElementById("fondo");
var color = document.getElementById("color")

function cambiarColor(){
    var rojo = Math.floor(Math.random() * 256);
    var verde = Math.floor(Math.random() * 256);
    var azul = Math.floor(Math.random() * 256);

    let colors = "rgb("+ rojo+ ", "+ verde +", "+ azul +" )"

    fondo.style.backgroundColor = colors

    color.innerHTML = ` <span> ${ colors} </span>`;
}

