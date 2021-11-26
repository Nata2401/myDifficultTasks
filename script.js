/*jshint esversion: 9 */
const num = 266219;
String(num);
Array.from(String(num));

const myArray = Array.from(String(num)).map(i=>Number(i));
console.log(myArray);

const res = myArray.reduce((acc, rec) => acc * rec);
console.log(res);

const deg = res**3; 
console.log(deg);

console.log(String(deg).substr(0,2));