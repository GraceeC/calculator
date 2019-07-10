
let operation; //undefined
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
    operation ='ADD';
}

function sub() {
    console.log("add button was clicked!");
    operation =('SUBTRACT');
}
function multi(){
    console.log("muliplacation button was clicked");
    operation = "MULTIPLY";
}

function equals(){
 if (operation==='ADD'){
    document.getElementById("input-text").value = parseInt(operator1, 10) + parseInt(operator2, 10);
   if (operation==='SUBTRACT'){
     document.getElementById("input-text").value = parseInt(operator1, 10) - parseInt(operator2, 10);
     if (operation==='Mulitply'){
        document.getElementById("input-text").value = parseInt(operator1, 10) * parseInt(operator2, 10);
    }


function solve() 
{ 
    let x = document.getElementById("input-text").value;
    let y = eval(x) 
        document.getElementById("input-text").value = y;
}

