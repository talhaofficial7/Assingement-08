// 1. Calculate your age based on the current year and your birth year:
let currentYear = 2024;
let birhdaYear = 1999;
let age = currentYear- birhdaYear;
console.log(age);
//age=25

// 2. Program to calculate the area of a rectangle:


let length = 5;
let width = 3;
let area = length * width;
console.log(area);
//area=15

// 3. Program to calculate the area of a circle:

let radius = 4;
let area1 = Math.PI * radius * radius;
console.log(area1);
//area1=50.2654

//4. Program to calculate the area of a cube:

let side = 5;
let area2 = 6 * side * side;
console.log(area2);
//area2=150

//5. Program to convert temperature from Fahrenheit to Celsius and vice versa:


let fahrenheit = 100;
let celsius = (fahrenheit - 32)* 5/9;
console.log(celsius);
//37.77

let celsius2 = 38;
let fahrenheit2 = celsius2 *9/5 +32;
console.log(fahrenheit2);
//100.4

//6.Program to convert seconds into minutes and seconds:

let seconds = 120 ;
let minutes = Math.floor(seconds/60);
let remainingSeconds = seconds % 60;
console.log("Time is:", minutes, "minutes and", remainingSeconds, "seconds");
//2 min and 0 sec

//7. Program to calculate percentage:

let marks = 80;
let total = 100;
let percentage = (marks / total) * 100;
console.log("Percentage is:", percentage);
// per 80


//8. Program to convert days into weeks and days:

let days = 17;
let weeks = Math.floor(days / 7);
let remainingDays = days % 7;
console.log("Time is:", weeks, "weeks and", remainingDays, "days");
// 2 weeks and 3 days

//Increment and Decrement Operator:

//Q1
let a = 2 ;
let b = ++a *2 ;
console.log(b);
//b=6

//Q2
let x = 5;
let y =x-- +2;
console.log(y);
//y=7

//Q3
let x1 =3;
let y2 = ++x1 +x1++ + ++x1;
console.log(y2);
//y2=14

//Q4
let m = 2;
let n= ++m * m++ * --m;
console.log(n);
//n=27

//Q5
let  a3 = 3
let b3 = 5;
let result = ++a3 + b3-- - a3++ + --b;
console.log(result);
//result=10

//Q6
let m1 =2;
let n1 = 4;
let p =m1++ + ++n1 - --m1 + n1--;
console.log(p);
//p=10

//Q7
var a4 =5;
var b4= 3;
var c4=2;
var d4=7;
var result5 = ++a4 *(b4-- +c4)/--d4;
console.log(result5);
//a=6, b=2 , c=3, d=6
//results5=5

//Q2
let m6=2;
let n6=3;
let o=4;
let results6 = m6++ *(--n6 +m6)/(o-- - n);
console.log(results6);
//m6=3, n6=2 o=3
//results6=-0.43478260869565216



