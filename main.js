// pseudocode

// do{
    //   statement
    
    // }while(condition)
    
// do statement at least once



// A journey by Bus 
let zohde = 0
let weekDays = 7
let price = .25
do{
    weekDays--
    console.log('just arrived 😅');
    console.log(`${weekDays} days lift`)
}while(zohde >= .25); // false

console.log(zohde >= .25)

// Next Day
let todayBudget = .50;
// Bus Driver said:
if(todayBudget >= .50){   
    let yesterdayBill = .25 
    zohde = todayBudget - yesterdayBill - price; 
    weekDays--
    console.log(`${weekDays} days lift`)
}

console.log('debt 0')

zohde = .25
// days lift
while(zohde >= .25 && weekDays > 0){
    
    weekDays--
    console.log(`${weekDays} days lift`)
    if(weekDays !== 0){
        console.log('منك لله')
    }else{
        console.log("thank God it's thursday")
    }
}

// how treat with people
// console.log('//////////////////')
// weekDays = 7
// let people = .25
// do{
//     weekDays--
//     console.log(`${weekDays} days lift`)
// }while(zohde >= .25 && weekDays > 0); 


// warning
// alert('ان كل هذه الشخصيات هي من وحي خيال المؤلف ولا تمت للواقع بأي صلة مباشرة أو غير مباشرة أو اي طرف من الاطراف و كل تشابه في الاسماء او الاشخاص هو وليد الصدفة')