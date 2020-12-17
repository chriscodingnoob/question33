/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let dailyOne = prompt("Day one sales total");
let dailyTwo = prompt("Day two sales total");
let dailyThree = prompt("Day three sales total");
let dailyFour = prompt("Day four sales total");
let dailyFive = prompt("Day five sales total");
let dailySix = prompt("Day six sales total");
let dailySeven = prompt("Day seven sales total");

let salesArray = [dailyOne, dailyTwo, dailyThree, dailyFour, dailyFive, dailySix, dailySeven];
let salesArraytotal = (dailyOne + dailyTwo + dailyThree + dailyFour + dailyFive + dailySix + dailySeven); 
document.write(salesArraytotal);
document.write("test");
let weeklyAverage = salesArraytotal/7;

document.write(weeklyAverage);

