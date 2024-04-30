/* Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.*/

let user = prompt("Please enter your username");
let age = prompt("Enter your age");
let movielist = prompt ("Please enter your favorite movies"); 
let arrayMovieList = movielist.split(','); 


console.log(user); 
console.log(age);
console.log(arrayMovieList);
console.log(arrayMovieList[0]);

