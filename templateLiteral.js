const greeting = (name) => {
    return 'my name is ' + name;
} 
const greetingWithTemplate = (name) => {
    return `my name is ${name}`;
}
console.log(greeting('John'));
console.log(greetingWithTemplate('Doe'));