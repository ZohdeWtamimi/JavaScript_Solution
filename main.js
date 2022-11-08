// pseudocode

// do{
    //   statement
    
    // }while(condition)
    
// do statement at least once



// A journey by Bus 
// let zohde = 0
// let weekDays = 7
// let price = .25
// do{
//     weekDays--
//     console.log('just arrived 😅');
//     console.log(`${weekDays} days lift`)
// }while(zohde >= .25); // false

// console.log(zohde >= .25)

// // Next Day
// let todayBudget = .50;
// // Bus Driver said:
// if(todayBudget >= .50){   
//     let yesterdayBill = .25 
//     zohde = todayBudget - yesterdayBill - price; 
//     weekDays--
//     console.log(`${weekDays} days lift`)
// }

// console.log('debt 0')

// zohde = .25
// // days lift
// while(zohde >= .25 && weekDays > 0){
    
//     weekDays--
//     console.log(`${weekDays} days lift`)
//     if(weekDays !== 0){
//         console.log('منك لله')
//     }else{
//         console.log("thank God it's thursday")
//     }
// }

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





// PRESENTION 7/ 11

// trim()
// const greeting = '   Hello world!   ';
// console.log(greeting);
// console.log(greeting.trim());


// split()
// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// console.log(words);

// const chars = str.split('');
// console.log(chars[8]);
// console.log(chars);

// const strCopy = str.split();
// console.log(strCopy);

// STARTSWITH
// let text = "Hello world, welcome to the universe.";
// let result = text.startsWith("world", 6);
// console.log(result);

// REAPAT()
// A = "hello";
// a = A.repeat(2);
// console.log(a);


// let arr = [23,4, 54, 29]
// arr.sort(function(a, b){return a-b});
// console.log(arr)
// console.log('hello')


// console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1, 7,  9, 45 ]

 ["Str" "alex","moh"]

 ['the','fox' 'over' lazy, 'dog' ]

*/


/*
2
What the index of "Banana","Tomato"

*/
// var fruits=["Tomato","Banana","Watermelon"]
// console.log(fruits.indexOf('Tomato'))
// console.log(fruits.indexOf('Banana'))

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
// let food = ['shawerma', 'pizza', 'burger', 'fried chicken', 'salad'] 
// let sport = ['yoga', 'football', 'jogging'] 
// let movie = ['focus', 'inception', 'the godfather', 'shutter island']

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
// function firstOfArray(arr){
//     return arr[0]
// }
// console.log(firstOfArray([1,4,5]))
// console.log(firstOfArray(["t","u","g","x"]))


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
// function lastOfArray(arr){
//     return arr[arr.length - 1]
// }
// console.log(lastOfArray([1,4,5]))
// console.log(lastOfArray(["t","u","g","x"]))


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
console.log()
array.shift()
array.shift()
array.shift()
array.unshift(8)
array.unshift(6)
array.unshift(4)
array.unshift(3)
array.unshift(1)
array.push(10)
// console.log(array)


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
// function middleOfArray(arr){
//     let middle = arr.length / 2
//     if(arr.length % 2 == 0){
//         let result = arr.slice(middle -1, middle +1)
//         return result
//     }else{
//         let result = arr.slice(middle , middle + 1)
//         return result
//     }
// }
// console.log(middleOfArray(["t","u","g","x"]))
// console.log(middleOfArray([1,4,5]))
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
// var animals = ['cat', 'ele', 'bird']
// animals[0] = 'zebra';
// animals[1] = 'elephant';
// animals.pop();
// console.log(animals)

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
// var nums= [1,2,3,8,9]
// function indexOfArray(nums, pos){
//     return nums[pos]
// }
// console.log(indexOfArray(nums,3))
// console.log(indexOfArray(nums,1))
// console.log(indexOfArray(nums,4))



/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/