//Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

let numbers = prompt("Enter 10 numbers")
ArrayNumbers.push(numbers);

console.log(ArrayNumbers); 

function Max (arr){
    let max=ArrayNumbers[0]
    for(let i=0; i<ArrayNumbers.length; i++)
    if (max<ArrayNumbers[1]){
        max = ArrayNumbers[i]
    }
    

} 
console.log(max);