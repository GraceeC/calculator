
let operation; //undefined 
let operator1; //undefined
let operator2; //undefined


//value
function numberButtonPress(number) {
    console.log("-----Before-----");
    console.log("operation ", operation);
    console.log("operator1 ", operator1);
    console.log("operator2 ", operator2);

    if (operation === undefined) {
        setOperator1(number);
        displayValue(operator1);
    } else
    if (operator1) {
        setOperator2(number);
        displayValue(operator2);
    } else {
        operator1 = parseInt(number);
        displayValue(operator1);
    }

    console.log("-----After-----");
    console.log("operation ", operation);
    console.log("operator1 ", operator1);
    console.log("operator2 ", operator2);

}

function setOperator1(value) {
    if (operator1 === undefined) {
        operator1 = value;
    } else {
        operator1 += value;
    }
}

function setOperator2(value) {
    if (operator2 === undefined) {
        operator2 = value;
    } else {
        operator2 += value;
    }
}

function displayValue(value) {
    document.getElementById("input-text").value = value;
}

function getValue() {
    document.getElementById("input-text").value
}

//operators 
function add() {
    operation = 'ADD';
    console.log("you clicked the add button");

    if (operator1 && operator2) {
        equals();
        operator1 = getValue()
        operator2 = undefined;
    }
}

function sub() {
    operation = 'SUBTRACT';
    console.log("you clicked the subtract button");

    if (operator1 && operator2) {
        equals();
        operator1 = getValue()
        operator2 = undefined;
    }
}

function divide() {
    operation = 'DIVIDE';
    console.log("you clicked the divide button");

    if (operator1 && operator2) {
        equals();
        operator1 = getValue()
        operator2 = undefined;
    }
}

function multi() {
    operation = 'MULTIPLY';
    console.log("you clicked the mutiply button");

    if (operator1 && operator2) {
        equals();
        operator1 = getValue()
        operator2 = undefined;
    }
}

//Clear 
function C() {
    document.getElementById("input-text").value = 0;
    operator = 'undefined';
    opertaor1 = 'undefined';
    operator2 = 'undefined';
}

function decimal(value) {
    if (action === 'decimal') {
        display.textContent = value + '.'
        document.getElementById("input-text").parseInt(value) = ".";
        if (operator1 && operator2) {
            equals();
            operator1 = getValue();
            operator2 = ".";
        } else {
            return value;

        }

    }
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
