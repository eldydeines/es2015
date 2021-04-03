//objects exercise
//Eldy Deines


//Before code (Same Keys and Values)
/* function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  } */
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
};


//Before code (Computed Property Names)
/* 
var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"
*/
// Originally had this 

let favoriteNumber = 42;

let instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
  //in brackets as it is dynamic
};

//Before code (Object Methods)
/* var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }
 */
let instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + " says bye!";
    }
};


//createAnimal function
/* Write a function which generates an animal object. 
The function should accepts 3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered. */

function createAnimal(animal,verb,noise){
    return {
        animal, 
        [verb]: function () {
        return console.log(noise)
        //solution states: return noise;
        }
    }
}