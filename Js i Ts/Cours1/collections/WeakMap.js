
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, 'Roman');

console.log(weakmap1.get(object1));

console.log(weakmap1.has(object1));

console.log(weakmap1.has(object2));
