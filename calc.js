function dis(value)  { 
    document.getElementById("input-text")=value
} 
   function solve() 
{ 
    let x = document.getElementById("input-text").value 
    let y = eval(x) 
    document.getElementById("input-text").value = y 
