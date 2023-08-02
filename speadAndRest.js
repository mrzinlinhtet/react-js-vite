//spread operator
const id = {
    name : "gamani",
    age : 20,
    gender : "male"
}
const Terry = {
    ...id
}

// console.log(id);
console.log(Terry);

const one = [1,2,3,4,5];
const two = [6,7,8,9,10];

const three = [...one, ...two];

console.log(three);

//rest para
const rest = (x,y,...rest) => {
    console.log(x,y,rest);
}

rest(2,3,8,3)

//default para
const test = (a=4,b=5) => {
    return a + b;
}

console.log(test(3,3));

const data = [1,2,3,4,5];

const [a,b,...ary] = data;

console.log(a,b,ary);