//variables
let operation; //undefined 
let operator1; //undefined
let operator2; //undefined
let maxlenght = 10; 
//let memory = ['MPLUS', 'MMINUS', 'MR'];

//value
function dis(value) {
    document.getElementById("input-text").value = parseInt(value);

    if (operator1) {
        operator2 = parseInt(value);
    } else {
        operator1 = parseInt(value);

        console.log('operator1:', operator1);
        console.log('operator2:', operator2);
    }
}
if (operator1 && operator2) {
    equals();
    operator1 = document.getElementById("input-text").maxlength = "10".parseInt(value);
    operator2 = undefined;
    
}


/*{if (value.length > maxlength){
    { if (    (eval(value) == 0)
           && (Current.indexOf(".") == -1)
         )
        { value = dig;
        } else
        { value = value + dig;
        };
 }; };
document.Calculator.Display.value = value;
}*/


//operators 
function add() {
    operation = 'ADD';
    console.log("you clicked the add button");

    if (operator1 && operator2) {
        equals();
        operator1 = document.getElementById("input-text").parseInt(value);
        operator2 = undefined;
    }
}

function sub() {
    operation = 'SUBTRACT';
    console.log("you clicked the subtract button");

    if (operator1 && operator2) {
        equals();
        operator1 = document.getElementById("input-text").parseInt(value);
        operator2 = undefined;
    }
}

function divide() {
    operation = 'DIVIDE';
    console.log("you clicked the divide button");

    if (operator1 && operator2) {
        equals();
        operator1 = document.getElementById("input-text").parseInt(value);
        operator2 = undefined;
    }
}

function multi() {
    operation = 'MULTIPLY';
    console.log("you clicked the mutiply button");

    if (operator1 && operator2) {
        equals();
        operator1 = document.getElementById("input-text").parseInt(value);
        operator2 = undefined;
    }
}

//Clear 
function AC() {
    document.getElementById("input-text").parseInt(value) = 0;
    operator = 'undefined';
    opertaor1 = 'undefined';
    operator2 = 'undefined';
    console.log('clear');
}

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
