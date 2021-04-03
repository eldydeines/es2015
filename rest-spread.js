//Rest and Spread Exercises
//Eldy Deines
//Referenced MDN Site
//Given 

/* function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  } */

//Write an ES2015 version

const filterOutOdds = (...argmnts) => argumnts.filter((num)=> num % 2 === 0);

//write a function: 
// called findMin that accepts a variable number of arguments 
// and returns the smallest argument.(Use rest and spread)
const findMin = (...args) => args.reduce((arg,next)=>arg<next?arg:next);

//write a function: 
// called mergeObjects, which accepts two obj and returns
// new obj with keys and values of the first and second obj.
//------------------------------------------------------------
//@ first, tried this, but realized this was not a function:
//const newMergedObj = {...firstObj, ...secondObj};
//@ second try, I realized that this would produce syntax error
//const newMergedObj = (firstObj, secondObj) => {...firstObj, ...secondObj};
const newMergedObj = (firstObj, secondObj) => ({...firstObj, ...secondObj});

//Write a function: 
// called doubleAndReturnArgs, which accepts array and # of args.
// return new array with original values, plus additional args doubled
//---------------------------------------------------------------
// Tried this but returned that arguments wasn't declared
// const doubleAndReturnArgs = () => 
// arguments.forEach((arguments)!== 0 ? arguments * 2 : arguments);
//-----------------------------------------------------------------
//Tried this, but this returned ["1,2,3,410,5"]
//joined and forced as a string
/* const doubleAndReturnArgs = ((arguments, ...args) => {
    return [arguments + args.map((arg)=>arg * 2)];
    });

    */
//-----------------------------------------------------------------
    //had to look at solution to resolve
//realized the spread makes the array vs string
    const doubleAndReturnArgs = ((arguments, ...args) =>[...arguments, ...args.map((arg)=>arg * 2)]);

/*     For this section, write the following functions using rest, 
       spread and refactor these functions to be arrow functions!
       Make sure that you are always returning a new 
       array or object and not modifying the existing inputs. */

/** remove a random element in the items array
and return a new array without that item. */
//looked at stackoverflow to pickup random element
//array[Math.floor(Math.random() * array.length)]
   const removeRandom = items => {
        const randomOne = Math.floor(Math.random() * items.length);
        //this line slices from everything before the randomone
        //then all restarts the array join after randomOne
        return [...items.slice(0,randomOne),...items.slice(randomOne)];
    }
    
    /** Return a new array with every item in array1 and array2. */
    const extend = (array1, array2) =>{
        return [...array1,...array2];
    };
    
    /** Return a new object with all the keys and values
    from obj and a new key/value pair */
    
    function addKeyVal(obj, key, val) {
    return {...obj, key:val};
    }
    //After reviewing the solution I need key in brackets
    
    /** Return a new object with a key removed. */
    
    const removeKey = (obj, key) => {
        delete obj[key];
        return obj;
    }
    
    
    /** Combine two objects and return a new object. */
    
    const combine = (obj1, obj2) => {
        return {...obj1,...obj2};
    }
    
    
    /** Return a new object with a modified key and value. */
    
    const update = (obj, key, val) => {
        return {...obj, key:val};
    }

