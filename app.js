// NAME : AYAN NAEEM
// DATE : 23/08/2025

// QUESTION NO : 01

let age = prompt("Please Enter Your Age.")
if (age < 13) {
    alert("Child");
}else if(age >= 13 && age<= 19){
    alert("Teenager");
}else{
    alert("Adult");
}

// QUESTION NO : 02

let divisible = prompt("Enter a Number");
if (divisible % 2 === 0 && divisible % 3 === 0) {
    alert("Divisible By Both");
} else {
    alert("Not Divisible By Both");
}

// QUESTION NO : 03

let password = prompt("Enter A Password");
if (password === "Saylani123") {
    alert("Access Granted!");
}else{
    alert("Access Denied");
}

// QUESTION NO : 04

let num1 = (prompt("Enter First Number"));
let num2 = (prompt("Enter Second Number"));

if (num1 > num2) {
    console.log("The Larger Number is " + num1);    
}else if(num2 > num1){
    console.log("The Larger Number is " + num2);
}else{
    console.log("Both Number Are Equal");
}

// QUESTION NO : 05

let color = ["Red ","Green ","Blue ","Cyan ","Yellow "];
alert(color[0] + color[4]);

// QUESTION NO : 06

let fruits = ["Mango ","Banana ","Apple "];
fruits.push("Guava");
console.log(fruits);

// QUESTION NO : 07

let city = ["Karachi ","Paris ","Tokyo ","Prague ","Istanbul "];
city.shift();
console.log(city);

// QUESTION NO : 08

let number = [10, 20, 30, 40, 50];
number.splice(2,1);
console.log(number);

// QUESTION NO : 09

let hundred = [100, 200, 300, 400, 500];
hundred.slice(1, 4);
console.log(hundred);

// QUESTION NO : 10

let maths = Number(prompt("Enter Maths Marks"));
let eng = Number(prompt("Enter English Marks"));
let comp = Number(prompt("Enter Computer Marks"));
let subject = [maths, eng, comp];
let total = maths + eng + comp
let average = total / 3
alert("Your Total Marks Are " + total + " Here are average of your total marks " + average);

// QUESTION NO : 11

let month = Number(prompt("Enter A Month Number (1 - 12)"));
if (month <= 2 || month === 12){
    alert("Winter");
}else if(month >= 3 && month <= 5){
    alert("Spring");
}else if(month >=6 && month <=8){
    alert("Summer");
}else if(month >=9 && month <=11){
    alert("Autumn");
}else{
    alert("invalid Value Please Write Value Under 12");
}

// QUESTION NO : 12

for (let index = 1; index <= 10; index++){
    console.log(index*2)
}

// QUESTION NO : 13

let names = ['Ali', 'Sara','Ahmed', 'Ayesha'];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// QUESTION NO : 14

let table = Number(prompt("Enter Any Number For Its Table"));
for (let  multiplication = 1; multiplication <= 10; multiplication++) {
    console.log(table + " x " + multiplication + " = " + table*multiplication);    
}

// QUESTION NO : 15

let even = [2, 4, 6, 8, 10]
let sum = 0
for (let add = 0; add < even.length; add++){
    sum = sum + even[add]
    console.log(sum);
}

// QUESTION NO : 16

let admin = prompt("Enter Your Name");
if (admin == "Alice" || admin == "Bob") {
    alert("Welcome")
}else{
    alert("You are not Authorized");
}

// QUESTION NO : 17