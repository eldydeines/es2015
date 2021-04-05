//Maps and Sets Exercise
//Eldy Deines

//Quick Question #1
//what does the following code return? 
new Set([1,1,2,2,3,4])
// returns - [1,2,3,4]



//Quick Question #2
//what does the following code return? 
[...new Set("referee")].join("")
//Returns new array with "ref" 



//Quick Questions #3
//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// M = [1,2,3],false
//Reviewed solution and it actually has both lines in the map
//assume this is because of reference point



//hasDuplicates - accepts array and returns true/false if array contains dupe
function hasDuplicates(...arr){
    const mySet = new Set(arr);
    return (arr.length !== mySet.size)
}



//vowelCount - accepts string, returns map where keys are numbers
//values are count of the vowels in string
function vowelCount(myString){
    let vowelsMap = new Map();
 
    for (let char of myString){
        if ("aeiou".indexOf(myString)){
            if (vowelsMap.has(char)){
                vowelsMap.set(char,((vowelsMap.get(char))+1));
            }
            else{
                vowelsMap.set(char,1);
             
            }
   			 }
    }
  
    return vowelsMap;
}

