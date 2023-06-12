﻿# NodeJs_Summer_PEP
 
1. If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
const input = [1, -4, 12, 0, -3, 29, -150];

Solution:
const input = [1, -4, 12, 0, -3, 29, -150]; 
const arr1 = input.filter(value => value > 0);
let sum = 0;
for(let i in arr1){
sum = sum + arr1[i];
}
console.log("Sum = " + sum);


2. Square the value of every element in the array. Presume that you will only get numbers in the input array.
const input = [1, 2, 3, 4, 5];

Solution:
const input = [1, 2, 3, 4, 5];
const arrSquare = [];
for(let i in input){
arrSquare[i] = input[i]*input[i];
}
console.log(arrSquare);


3. Calculate the mean and median values of the number elements from the input array.
const input = [12, 46, 32, 64];

Solution:
const input = [12, 46, 32, 64];
let sum = 0; 
for(let i in input){
sum += input[i];
}
console.log("Mean = " + sum/input.length);

let median = 0;
const sortedArr = input.sort();
const middle = Math.floor(sortedArr.length / 2);
if(sortedArr.length % 2 == 1){
median = sortedArr[middle];
}
else{
median = (sortedArr[middle] + sortedArr[middle - 1])/2
}
console.log("Median = " + median);


4. Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.


const input = [
 {
   name: "John",
   age: 13,
 },
 {
   name: "Mark",
   age: 56,
 },
 {
   name: "Rachel",
   age: 45,
 },
 {
   name: "Nate",
   age: 67,
 },
 {
   name: "Jennifer",
   age: 65,
 },
];

Solution:
const input = [
 {
   name: "John",
   age: 13,
 },
 {
   name: "Mark",
   age: 56,
 },
 {
   name: "Rachel",
   age: 45,
 },
 {
   name: "Nate",
   age: 67,
 },
 {
   name: "Jennifer",
   age: 65,
 },
];
let minName = input[0].name;
let min = input[0].age;
for(i in input){
if(input[i].age < min){
min = input[i].age;
minName = input[i].name
}
}
console.log(minName + " is youngest of all with " + min + " years of age.");

let maxName = input[0].name;
let max = input[0].age;
for(i in input){
if(input[i].age > max){
max = input[i].age;
maxName = input[i].name
}
}
console.log(maxName + " is eldest of all with " + max + " years of age.");
console.log("Difference between their age is " + (max - min));


5. If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

Solution: 
function fact(num){
if(num > 0){
return num*fact(num-1);
}
else{
return 1;
}
}
console.log(fact(6));


6. You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use find the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.


const products = [
 { name: "Product 1", price: 20, category: "Electronics" },
 { name: "Product 2", price: 30, category: "Clothes" },
 { name: "Product 3", price: 40, category: "Electronics" },
 { name: "Product 4", price: 50, category: "Clothes" },
 { name: "Product 5", price: 60, category: "Clothes" },
 { name: "Product 6", price: 70, category: "Electronics" },
 { name: "Product 7", price: 80, category: "Clothes" },
 { name: "Product 8", price: 90, category: "Electronics" },
];

Solution: const products = [
 { name: "Product 1", price: 20, category: "Electronics" },
 { name: "Product 2", price: 30, category: "Clothes" },
 { name: "Product 3", price: 40, category: "Electronics" },
 { name: "Product 4", price: 50, category: "Clothes" },
 { name: "Product 5", price: 60, category: "Clothes" },
 { name: "Product 6", price: 70, category: "Electronics" },
 { name: "Product 7", price: 80, category: "Clothes" },
 { name: "Product 8", price: 90, category: "Electronics" },
];

const electArr = products.filter(value => value.category == "Electronics");
const clothesArr = products.filter(value => value.category == "Clothes");

let sumElect = 0;
for(i in electArr){
sumElect += electArr[i].price;
}
console.log("Average price of Electronic products is " + sumElect/electArr.length);

let sumClothes = 0;
for(i in clothesArr){
sumClothes += clothesArr[i].price;
}
console.log("Average price of Clothes products is " + sumClothes/clothesArr.length);
