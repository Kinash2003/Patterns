
let set = new Set();

let vasily = {name: "Vasily"};
let peter = {name: "Peter"};
let roman = {name: "Roman"};

set.add(vasily);
set.add(peter);
set.add(peter);

console.log( set.size ); 

set.forEach( user => console.log(user.name ) ); 