
const data = ['first','second','third']
console.log ("For in");
for (let i in data) {
    console.log(i);
    console.log(data[i]);
}

console.log ("For of");
for (let i of data) {
     console.log(i);
     console.log(data[i]);
}