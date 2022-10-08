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
        if (i % 3 == 0){
            printGroup("Group "+i+": "+alumnName);
        }
        //falta imprmir bien los grupos rollo de 3 en 3 y todo eso
        
        
    }
}

function deleteAlumnByIndex(list,index){
    delete list[index]
    let auxList = [];
    for(let i = 0; i<list.length; i++){
        if(list[i] != null){
            auxList.push(list[i]);
        }
    }
    return auxList;
}

function getAlumnByIndex(list,index){
    return list[index];
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max))+min;
}

function printGroup(name){
    document.getElementById("pGroup").innerHTML += name + " ";
}