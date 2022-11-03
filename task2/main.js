let x = prompt("Please enter first value");
let opreator = prompt('opretor pls')
let y = prompt("Please enter your second");




// TASK 2
let xNum = parseInt(x) 
let yNum = parseInt(y) 

if(opreator == '+'){
    let sum = xNum + yNum;
    console.log(sum)
    document.getElementById("demo").innerHTML =
    x + opreator + y;

}else if(opreator == '-'){
    let abstract = xNum - yNum;
    console.log(abstract)
    document.getElementById("demo").innerHTML =
    x + opreator + y

}else if(opreator == '*'){
    let multi = xNum * yNum;
    console.log(multi)
    document.getElementById("demo").innerHTML =
    x + opreator + y;

}else if(opreator == '/'){
    let divid = xNum / yNum;
    console.log(divid)
    document.getElementById("demo").innerHTML =
    x + opreator + y;
    
}