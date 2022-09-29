let numAleatorio = Math.floor(Math.random()*(100))+1;
let count = 0;
function playGame(){
    let numUsuario = Number(document.getElementById("inputNumber").value);
    let numerosIntroducidos = document.getElementById("pNumbersIntroduced");
    let numeroIntentos = document.getElementById("pIntentos");
    let mensajeUsuario = document.getElementById("pAnswer");

    if (Number.isInteger(numUsuario) && numUsuario <= 100 && numUsuario > 0 ){
        numerosIntroducidos.innerHTML += numUsuario + " , ";
        count = count + 1;
        numeroIntentos.innerHTML = count;
        if (numAleatorio === numUsuario){
            mensajeUsuario.innerHTML = "Enhorabuena has acertado!!";
        }
        else{
            if (numAleatorio > numUsuario){
                mensajeUsuario.innerHTML = "Numero ha adivinar es mayor que el introducido";
            }
            else{
                mensajeUsuario.innerHTML = "Numero ha adivinar es menor que el introducido";
            }
        }
    }
    else{
        mensajeUsuario.innerHTML = "Tiene que ser un número entero entre 1 y 100";
    }
}

function cancel(){
    
}

