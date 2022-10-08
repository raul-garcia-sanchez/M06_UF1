function getStringNames(){
    return document.getElementById("inputNames").value;
}
function generateList(text,separator){
    return text.split(separator);
}

function generateGroup(people,peopleInGroup){
    let stringNames = getStringNames();
    let listNames = generateList(stringNames,",");
    let count = 0;
    let group = "";
    for(let i=0; i<people; i++){
        let random = getRandom(0,listNames.length-1);
        let alumnName = getAlumnByIndex(listNames,random);
        listNames = deleteAlumnByIndex(listNames,random);
        count = count +1;
        group = group + alumnName + " ";
        if (count % peopleInGroup == 0){
            printGroup("Grupo -> " +group);
            group = "";
        }
    }
    printGroup("Grupo -> "+group);
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
    document.getElementById("pGroup").innerHTML += name + "<br>";
}