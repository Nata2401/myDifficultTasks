/*jshint esversion: 9 */
const num = 266219;

const myArray = Array.from(String(num)).map(i=>Number(i));
console.log(myArray);

const res = myArray.reduce((acc, rec) => acc * rec);
console.log(res);

const deg = res**3; 
console.log(deg);

console.log(String(deg).substr(0,2)); 


let lang = 'en';
if (lang === 'ru') {
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if (lang === 'en') {
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
} else {
    console.log('Некорректное значение');
}

switch (lang) {
    case 'ru':
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break;
    case 'en':
        console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
        break;
    default:
        console.log('Некорректное значение');
}

let langArr = [];
langArr.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
langArr.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(langArr[lang]);

let namePerson = '';

console.log((namePerson === 'Артем') ? 'директор' :
    (namePerson === 'Александр') ? 'преподаватель' :
    'студент');