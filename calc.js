//variables
let operation; //undefined 
let operator1; //undefined
let operator2; //undefined
//let memory = ['MPLUS', 'MMINUS', 'MR'];

//value
function dis(value) {
    document.getElementById("input-text").value = value;

    if (operator1) {
        operator2 = value;
    } else {
        operator1 = value;

        console.log('operator1:', operator1);
        console.log('operator2:', operator2);
    }
}

function length() {
    if (operator1 += operator2.length > 10);
        return operator(0, operator.length);
}

//operators 
function add() {
    operation = 'ADD';
    console.log("you clicked the add button");
}

function sub() {
    operation = 'SUBTRACT';
    console.log("you clicked the subtract button");
}

function divide() {
    operation = 'DIVIDE';
    console.log("you clicked the divide button");
}

function multi() {
    operation = 'MULTIPLY';
    console.log("you clicked the mutiply button");
}

//Clear 
function reset() {
    document.getElementById("input-text").value = 0;
    operator = 'undefined';
    opertaor1 = 'undefined';
    operator2 = 'undefined';
    console.log('clear');
}

//function MPLUS(){
//    document.getElementById("input-text").value=" ";
//    operator='undefined';
//    opertaor1='undefined';
//    operator2='undefined';
//    console.log('MPLUS');
//}

//function math operoters
function equals() {
    if (operation === 'ADD') {
        document.getElementById("input-text").value = parseInt(operator1, 10) + parseInt(operator2, 10);
    } else if (operation === 'SUBTRACT') {
        document.getElementById("input-text").value = parseInt(operator1, 10) - parseInt(operator2, 10);
    } else if (operation === 'DIVIDE') {
        document.getElementById("input-text").value = parseInt(operator1, 10) / parseInt(operator2, 10);
    } else if (operation === 'MULTIPLY') {
        document.getElementById("input-text").value = parseInt(operator1, 10) * parseInt(operator2, 10);
    }
}
