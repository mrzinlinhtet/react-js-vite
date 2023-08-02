class School{
     constructor(name,age,gender){
          // console.log("I am constructor");
          this.name = name;
          this.age = age;
          this.gender = gender;
     }
     schoolName = "No 43 high School";
     location = "Yangon";

     #countOfStdent = 10

     gettingStudent(){
          return this.#countOfStdent
     }

     settingStudent(x){
          return this.#countOfStdent = this.#countOfStdent + x
     }

     static test = "ok br";
     static description() {
          return "testing br";
     }
     greeting(){
          return "Hello Min galar pr";
     }
}

// console.log(School.test,School.description());
// const gamani = new School("Gamani",22,"male");

// console.log(gamani,gamani.settingStudent(3));     

class School2 extends School{
     constructor(name,age,gender,nrc){
          super(name,age,gender);
          this.nrc = nrc;
     }
     bello = "Min galar br";
}

const nerry = new School2("Terry",44,"male","9/32i32jdjfjf");

console.log(nerry);