
let set = new Set();

const array = [200, 9, -200, 110, -93, 12, 45, 99, 330, 49, 12, 77, 570, 24, 410, 61, 71, 82, 65, 88, 17, 31, 91, 47, 910, 66, 22, 510, -97, -17, -23, -4, -7, -51, 9, 7]

function Sort (array){
    for(let n = 0; n < array.length; n++ ){
        for(let i = 0; i < array.length -1 -n; i++ ){
            if(array[i] > array[i + 1]){
                const change = array[i]
                array[i] = array[i + 1]
                array[i + 1] = change
            }
        }
    }
}

Sort(array)
let numbers = {number: array};
set.add(numbers);

set.forEach( user => console.log(user.number ) );
console.log( set.size );