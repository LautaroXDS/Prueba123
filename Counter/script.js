var numeros = document.getElementById("numeros").innerHTML;
var hola = document.getElementById("hola")

if (numeros>0) {
    hola.style.color = "green"
} else if (numeros == 0) {
    hola.style.color = "black"
} else{
    hola.style.color = "red"
}

function sumar(){
    numeros++
    if (numeros>0) {
        hola.style.color = "green"
    } else{
        hola.style.color = "red"
    }
    hola.innerHTML=`<p> ${numeros} </p>`
    console.log(numeros)
    
}

function reset(){
    numeros = 0
    hola.style.color = "black"
    hola.innerHTML=`<p> ${numeros} </p>`
    console.log(numeros)
}

function restar(){
    numeros--
    if (numeros>0) {
        hola.style.color = "green"
    } else{
        hola.style.color = "red"
    }
    hola.innerHTML=`<p> ${numeros} </p>`
    console.log(numeros)
}