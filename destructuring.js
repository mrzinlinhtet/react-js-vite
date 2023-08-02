const obj = {
    name : "Gamani",
    age : 22,
    gender : "Male",
    school : {
        schoolName: "Govt.High School",
        classRoom: 12
    }
};

const {name,age,gender,school:{schoolName,classRoom}} = obj;
// const {schoolName,classRoom} = school;

console.log(name,age,gender);

console.log(schoolName,classRoom);

// const arr = ["Gamani",22,"Male"];

// const [name,age,gender] = arr;

// console.log(name,age,gender);


