
var a = 2, b = 10;
var c = false;
if (a == b && c == false) { 
	console.log("Number 1");
} else if (a == 2 || c == true) { 
	console.log("Number 2");
} else if (a <= b) { 
	console.log("Number 3");
} else {
	console.log("Error");
}

var x = 8, y = 90;
var res = x < y ? (x + y) : (x - y);
console.log(res);