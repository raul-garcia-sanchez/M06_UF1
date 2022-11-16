for(let i = 0; i < 101; i++){
    let p = document.createElement("p");
    let pTexto = document.createTextNode(i+" -> "+String.fromCharCode(i));
    p.appendChild(pTexto);
    document.body.appendChild(p);
}