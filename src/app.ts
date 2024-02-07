// const userName = 'Sam';
// // userName = "Samuel";
// let age = 26;

// age = 27;

// const add = (a: number, b: number = 1) => a + b;

// if (age > 20) {
//     let isOld = true;
// }

// // console.log(isOld);

// const printOutput = (output: string | number) => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', (event) => console.log(event));
// }

// printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const person = {
    firstName: 'Sam',
    age: 32,
};

const copiedPerson = { ...person };

function add(...numbers: number[]) {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
}

const addedNumbers = add(5, 10, 15, 20, 25, 30);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { firstName: userName, age } = person;

console.log(userName, age);
