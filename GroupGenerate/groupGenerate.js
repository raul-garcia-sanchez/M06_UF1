function getStringNames(){
    return document.getElementById("inputNames").value;
}

function generateList(text,separator){
    return text.split(separator);
}

function generateGroup(){
    let stringNames = getStringNames();
    let listNames = generateList(stringNames,",");
    console.log(listNames);
    let group = "";
    if (listNames.length >=3){
        for(let i=0; i<3; i++){
            let random = getRandom(0,listNames.length);
            let alumnName = getAlumnByIndex(listNames,random);
            listNames = deleteAlumnByIndex(listNames,random);
            group = group + alumnName + " ";
        }
        printGroup("Grupo -> "+group);
    }
    else{
        group= "";
        for(let j = 0; j < listNames.length; j++){
            group = listNames[j] + " ";
        }
        printGroup("Grupo -> "+group);
    }
    for(let k = 0; k < listNames.length; k++){
        let newString = listNames[k]+","
        document.getElementById("inputNames").value = newString.substring(0, newString.length-1);
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
    return Math.floor(Math.random()* (max-min)+min);
}

function printGroup(name){
    document.getElementById("pGroup").innerHTML += name + "<br>";
}