function dis(value)  { 
    document.getElementById("input-text").value+=value 
} 


function solve() { 
    let x = document.getElementById("input-text").value 
    let y = eval(x) 
    document.getElementById("input-text").value = y 
} 


    document.getElementById("seven").addEventListener("click", function() {
        console.log(7);
    });
