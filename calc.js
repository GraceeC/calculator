//variables
let operation; //undefined
let operator1; //undefined
let operator2; //undefined
let clear =document.getElementById('input-text').clear;


//button value
function dis(value) {
    document.getElementById("input-text").maxLength = "10";
    document.getElementById("input-text").value = value;
        

if (operator1){
    operator2 = value;
}else {
    operator1 = value;
}

console.log('operator1:', operator1);
console.log('operator2:', operator2);

}
//operators buttona
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
 clear = "RESET";
        console.log("clear");
}

//function math operoters
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
