let numAleatorio = Math.floor(Math.random()*(100))+1;
function playGame(){
    let numUsuario = Number(document.getElementById("inputNumber").value);

    if (Number.isInteger(numUsuario) && numUsuario <= 100 && numUsuario > 0 ){
        document.getElementById("pNumbersIntroduced").innerHTML += numUsuario + " , ";
        document.getElementById("pIntentos").innerHTML = (Number(document.getElementById("pIntentos").value) +1);
        if (numAleatorio === numUsuario){
            document.getElementById("pAnswer").innerHTML = "Enhorabuena has acertado!!";
        }
        else{
            if (numAleatorio > numUsuario){
                document.getElementById("pAnswer").innerHTML = "Numero ha adivinar es mayor que el introducido";
            }
            else{
                document.getElementById("pAnswer").innerHTML = "Numero ha adivinar es menor que el introducido";
            }
        }
    }
    else{
        document.getElementById("pAnswer").innerHTML = "Tiene que ser un número entero entre 1 y 100";
    }
}

function cancel(){

}

