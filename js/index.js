// ARRAY //

//The Basics

//1.
// let fruits = ["apple", "orange", "blueberry", "strawberry", "lemon"];
// //2.
// let datatypes = ["string", 23, ["orange", "apple"]];
// //3.
// let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
// console.log(animals.length);
// //4.
// console.log(animals[0]);
// //5.
// console.log(animals[3]);
// //6.
// let animal = animals.splice(1, 1, "tiger");
// console.log(animals);
// //7.
// // let a = [1, 2, 3];
// // let b = [4, 5, 6];
// // let ab = a.concat(b);
// // console.log(ab);
// //8.
// let a = [1, 2, 3, 7, 8, 9];
// let b = [4, 5, 6];
// let ab = a.concat(b).sort();
// console.log(ab);
// //9.
// let arr = ["a", "b", "c"];
// let clone = [...arr];
// console.log(clone);

// Methods

// let fruits = ["kiwi", "apple", "pear"];

//10.
// let addFruit = fruits.push("orange");
// console.log(fruits);
//11.
// let addFruit = fruits.unshift("lemon");
// console.log(fruits);
//12.
// let removeFruit = fruits.splice(2);
// console.log(fruits);
//13.
// let removeFruit = fruits.shift();
// console.log(fruits);
//14.
// let addFruit = fruits.splice(1, 0, "orange");
// console.log(fruits);
//15.
// let addFruit = fruits.splice(2, 0, "orange", "lemon", "blueberry");
// console.log(fruits);
//16.
// let names = ["David", "Christoffer", "Johan", "Maja"];
// let removeNames = names.splice(1, 2);
// console.log(names);
// //17.
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let mirror = nums.reverse();
// console.log(nums);
// //18.
// let str = "Supercalifragilisticexpialidocious";
// console.log(str.includes("n"));
// //19.
// console.log(str.includes("x"));
// //20.
// console.log(str.indexOf("p"));
// //21.
// console.log(str.slice(0, 5));
// //22.
// console.log(str.slice(-7));

// OBJECTS //

// Bibblan
const book = {
  title: "Iceman",
  author: "Wimhof",
  numPages: 354,
  moreBooks: ["Breathing", "Pushup", "Meditating"],
  getTitle: function (Breathing, Pushup, Meditating) {
    return moreBooks;
  },
};

console.log(book.getTitle());

// Letter Frequency
letterFrequency("kalle"); // => {"k": 1. "a": 1, "l": 2, "e": 1}
letterFrequency("aaaa"); // => {"a": 4}
letterFrequency("ni talar bra latin"); // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }
