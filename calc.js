let operation; //undefined
let operator1; //undefined
let operator2; //undefined
let clear;    

function dis(value) {
    document.getElementById("input-text").value = value;

if (operator1){
    operator2 = value;
}else {
    operator1 = value;
}

console.log('operator1:', operator1);
console.log('operator2:', operator2);
}

function add(){
    operation = 'ADD';
    console.log("you clicked the add button");


}

function sub(){
    operation = 'SUBTRACT';
    console.log("you clicked the subtract button");
}

function divide(){
    operation = 'DIVIDE';
    console.log("you clicked the divide button");
}

function multi(){
    operation = 'MULTIPLY';
    console.log("you clicked the mutiply button");
}

function AC(){
    console.log("you clicked the clear button");
}

// Input value //how to use SWITCH Statements?
function equals(){
    if (operation === 'ADD'){
        document.getElementById("input-text").value = parseInt(operator1, 10) + parseInt(operator2, 10);
    } else if (operation === 'SUBTRACT'){
        document.getElementById("input-text").value = parseInt(operator1, 10) - parseInt(operator2, 10);
    } else if (operation === 'DIVIDE'){
        document.getElementById("input-text").value = parseInt(operator1, 10) / parseInt(operator2, 10);
    } else if (operation === 'MULTIPLY'){
        document.getElementById("input-text").value = parseInt(operator1, 10) * parseInt(operator2, 10);
          
}
}
    

/*function AC(){
        document.getElementById("input-text").clear;
         };*/

