let operator1; //undefined
let operator2; //undefined


function dis(value)  { 
    document.getElementById("input-text").value = value; 

if (operator1) {
    operator2 = value;
}else {
    operator1 = value;
}


console.log('operator1:', operator1);
console.log('operator2:', operator2);
    
} 
function add() {
    console.log("add button was clicked!");
}
function sub() {
    console.log("subtract button was clicked");
}
function multi() {
    console.log("multiplication button was clicked");
}


function equals() {
    document.getElementById("input-text").value = parseInt(operator1, 10) + parseInt(operator2, 10);
}

function equals() {
    document.getElementById("input-text").value = parseInt(operator1, 10) - parseInt(operator2, 10);
}

function equals() {
    document.getElementById("input-text").value = parseInt(operator1, 10) * parseInt(operator2, 10);
}


