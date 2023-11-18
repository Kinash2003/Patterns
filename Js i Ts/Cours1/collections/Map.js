
let map = new Map();

map.set('1111', 'Roman');  
map.set(11, '19');     
map.set(true, 'Hello'); 

console.log(map.get(11)); 
console.log(map.get('1111')); 
console.log(map.get(true)); 
console.log(map.size ); 