
const weakset1 = new WeakSet();
const object1 = {'1111': '2222'};

weakset1.add(object1);
console.log(weakset1.has(object1)); 

weakset1.delete(object1)
console.log(weakset1.has(object1)); 

