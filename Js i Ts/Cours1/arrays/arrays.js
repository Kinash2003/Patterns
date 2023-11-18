

var scores = [60, 50, 62, 58, 54, 54, 58, 50, 52, 54];
var solution = scores[2];
console.log(solution);
console.log("Багатовимірні масиви");

let matrix = [
	[1, 12, 3, 4],
	[14, 35, 26, 10],
	[97, 48, 79, 21]
];
console.log(matrix[1][3]);

let arr = ['Роман', 'Андрій', 'Павло'];
console.log(arr);
console.log(arr.length);

console.log("Змінюємо існуюче");
arr[0] = 'Олег';
console.log(arr);

console.log("Додаємо нове");
arr[3] = 'Ігор';
console.log(arr);

console.log("Метод push - додає елемент до кінця масиву");
arr.push('Діма', 'Катя');
console.log(arr);

console.log("Метод shift - видаляє елемент на початку");
arr.shift();
console.log(arr);

console.log("Метод pop - видаляє останній елемент");
arr.pop();
console.log(arr);

console.log("Метод unshift - додає елемент на початок масиву");
arr.unshift('Василь');
console.log(arr);

console.log("Удаляем элемент");
delete arr[2];
console.log(arr);
arr.splice(2, 1); 
console.log(arr);

console.log("Додаємо елементи");
arr.splice(2, 0, 'Юля', 'Cофія');
console.log(arr);

console.log("Копіюємо частину");
let arr1 = arr.slice(0, 2);
console.log(arr1);

console.log("Копіюємо весь масив");
let arr2 = arr.slice();
console.log(arr2);

let arr3 = [
	{ name: 'Роман', age: 36 },
	{ name: 'Павло', age: 18 },
	{ name: 'Олег', age: 6 },
]
let result = arr3.filter(function (item) {
	return item.age >= 18;
});
console.log(result);


let srt = arr.join(",");
console.log(srt);

const fruits2 = new Array("Олег", "Петро"); 
console.log(fruits2.length); 
