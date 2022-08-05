/***********************************************************************
Write a function `setKeyInObject(obj, string, value)` that takes in three 
parameters. The first parameter is an object, the second parameter will be a 
string and the third parameter will be a value. Your job is to return the object
adding the second parameter as a key using the third parameter as its value.

Examples:


***********************************************************************/
//declare a value variable thats equal to string
function setKeyInObject(obj, string, value) {
  obj[string] = value;
  return obj;
}

// function setKeyInObject(obj, string, value) {
//   let val = string;
//   obj[val] = value;
//   return obj;
 
//  }




let obj = {}
console.log(setKeyInObject(obj, "apple", "yum")); // => {apple: "yum"}

let obj1 = {str: "hello"}
console.log(setKeyInObject(obj1, "num", 3)); // => {str: "hello", num: 3}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = setKeyInObject;
