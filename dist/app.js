"use strict";
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
activeHobbies.push(...hobbies);
const person = {
    name: 'Sam',
    age: 32,
};
const copiedPerson = Object.assign({}, person);
function add(...numbers) {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
}
const addedNumbers = add(5, 10, 15, 20, 25, 30);
console.log(addedNumbers);
