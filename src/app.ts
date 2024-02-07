const userName = 'Sam';
// userName = "Samuel";
let age = 26;

age = 27;

const add = (a: number, b: number) => {
    let result;
    result = a + b;
    return result;
};

if (age > 20) {
    let isOld = true;
}

// console.log(isOld);

const printOutput = (output: string | number) => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', (event) => console.log(event));
}
