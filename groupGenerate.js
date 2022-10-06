function getStringNames(){
    return document.getElementById("inputNames").value;
}
function generateList(text,separator){
    return text.split(separator);
}

function generateGroup(quantity){
    let stringNames = getStringNames();
    let listNames = generateList(stringNames,",");
    for(let i=0; i<quantity; i++){
        let random = getRandom(0,listNames.length-1);
        let alumnName = getAlumnByIndex(listNames,random);
        listNames = deleteAlumnByIndex(listNames,random);
        printGroup(alumnName);
        console.log(listNames);
    }
    
}

function deleteAlumnByIndex(list,index){
    return list.splice(index);
}

function getAlumnByIndex(list,index){
    return list[index];
}

function getRandom(min,max){
    return Math.floor(Math.random(min,max-1))+1;
}

function printGroup(name){
    document.getElementById("pGroup").innerHTML += name + " ";
}