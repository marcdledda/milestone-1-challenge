console.log("JS TEST");

function growTree(){
    let height = document.getElementById("height").value
    let character = document.getElementById("character").value
    row = character;

    for (i = 0; i < height; i++){
        document.getElementById("output").innerHTML += ("<div>" + row + "<div>");
        row += character;
    };
};

let btnTree = document.getElementById("btnTree").addEventListener("click", growTree);