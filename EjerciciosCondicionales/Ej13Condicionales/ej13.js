function checkCaracter() {
    var caracter = document.getElementById("input").value;
    var parrafo = document.getElementById("parrafo");
    parrafo.innerHTML = "";
    var vocales = ["a", "e", "i", "o", "u"];
    if (caracter.length > 1) {
        parrafo.innerHTML = "Solo puede ser un caracter";
    }
    else if (caracter.length < 1) {
        parrafo.innerHTML = "No hay caracter a comprovar";
    }
    else {
        caracter = caracter.toLowerCase();
        if (!isNaN(caracter)) {
            parrafo.innerHTML = "El caracter introducido es un numero";
        }
        else if (vocales.includes(caracter)) {
            parrafo.innerHTML = "El caracter introducido es una vocal";
        }
        else if (caracter.charCodeAt(0) < 97 || caracter.charCodeAt(0) > 122) {
            parrafo.innerHTML = "El caracter introducido es un simbolo";
        }
        else if (!vocales.includes(caracter)) {
            parrafo.innerHTML = "El caracter introducido es una consonante";
        }

    }
}