const array = [1,2,3,4,5];

// Way 1
const newArray = [];
for(let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 3);
}

console.log(...newArray);

// Map
const newArray2 = [];
array.map(num => newArray2.push(num + 3))

console.log(...newArray2);

// Filter
console.log(...newArray2.filter(num => num >= 6));