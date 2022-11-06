const display = document.getElementById('display');
display.innerHTML = 'result in console'

let result = '';
for(let i= 0; i<11; i++){
    if(i == 1){
        result += ' '+ i
        console.log(result);
        result = ''
    }
    if(i >= 2 && i < 4){
        result += ' '+ i
        if(i == 3){
            console.log(result)
            result = ''
        }
    }
    if(i > 3 && i < 7){
        result += ' '+ i
        if(i == 6){
            console.log(result)
            result = ''
        }
    }
    if(i > 6 && i < 11){
        result += ' '+ i
        if(i == 10){
            console.log(result)
            result = ''
        }
    }
}

