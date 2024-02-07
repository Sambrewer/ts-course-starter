const userName = 'Sam';
// userName = "Samuel";
let age = 26;

age = 27;

const add = (a: number, b: number = 1) => a + b;

if (age > 20) {
    let isOld = true;
}

// console.log(isOld);

const printOutput = (output: string | number) => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', (event) => console.log(event));
}

printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);
