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
// 16;
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

// Övning: Bibblan;
// const book = {
//   title: "Iceman",
//   author: "Wimhof",
//   numPages: 354,
// };

// const book2 = {
//   title: "Storm",
//   author: "Gustaf",
//   numPages: 123,
// };

// const book3 = {
//   title: "Storm",
//   author: "Gustaf",
//   numPages: 123,
// };

// const moreBooks = [book, book2, book3];

// function findBookTitle(array, searchTerm) {
//   for (let i = 0; i < array.length; i++) {
//     if (searchTerm === array[i].title) {
//       console.log(searchTerm);
//       console.log(array[i].title);
//     }
//   }
// }

// findBookTitle(moreBooks, "Storm");

// function findBook(booksArr, searchTitle) {
//   console.log("bookArr:", booksArr);
//   console.log("title:", searchTitle);

//   for (let i = 0; i < booksArr.length; i++) {
//     // console.log("i:", i);
//     // console.log(booksArr[i]);
//     const book = booksArr[i];
//     // console.log(book.title);
//     if (book.title == searchTitle) {
//       // console.log("Hittade boken", book);
//       return book;
//     }
//   }

//   // for (const book of booksArr) {
//   //   console.log("book", book);
//   // }

//   return null;
// }

// function searchBooks() {
//   let books = [
//     { title: "Storm", author: "Gustaf", numPages: 123 },
//     { title: "Fire", author: "Lasse", numPages: 323 },
//     { title: "Iceman", author: "Wimhof", numPages: 454 },
//     { title: "Stoneman", author: "Kajsa", numPages: 254 },
//   ];
//   const searchResult = findBook(books, "Iceman");
//   console.log(searchResult);
// }

// searchBooks();

// /**
//  * 1. Loopa ut vår sträng i en for-loop
//  * 2. Om vi hittar tecknet för första gången lägg till det i objektet med värde 1
//  * 3. Ifall vi redan har hittat första förekomsten av tecknet, addera med 1
//  */

// function letterFrequency(text) {
//   let result = {};

//   for (let char of text) {
//     console.log(char);
//     if (result[char] == undefined) {
//       result[char] = 1;
//       console.log(result);
//     } else {
//       result[char] = result[char] + 1; // En kortate variant result[char]++;
//     }
//   }

//   console.log(result);
// }

// letterFrequency("kalle");
// letterFrequency("aaaa");
// letterFrequency("ni talar bra latin");

// console.log(users);

// filterByCountry;
function filterByCountry(arr, country) {
  let searchResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nat === country) {
      console.log(arr.nat);
      searchResult.push(arr[i]);
    }
  }
  return searchResult;
}
console.log(filterByCountry(users, "FR"));
console.log(filterByCountry(users, "IR"));

// filterByGender;
function filterByGender(arr, genderSex) {
  let searchResult = [];
  let males = ["Mr", "Monsieur"];
  let females = ["Ms", "Mrs", "Miss", "Madame", "Mademoiselle"];

  for (let i = 0; i < arr.length; i++) {
    if (genderSex === "Male") {
      if (males.includes(arr[i].name.title)) {
        searchResult.push(arr[i]);
      }
    }
    if (genderSex === "Female") {
      if (females.includes(arr[i].name.title)) {
        searchResult.push(arr[i]);
      }
    }
  }
  return searchResult;
}

console.log(filterByGender(users, "Female"));

// listEmails

function listEmails(arr) {
  let searchResult = [];
  for (let i = 0; i < arr.length; i++) {
    searchResult.push(arr[i].email);
  }
  return searchResult;
}

console.log(listEmails(users));
// return arr.map(item => item.email)

// Utmaning! - Reformat Emails

function newListEmails(arr) {
  let searchResult = [];
  for (let i = 0; i < arr.length; i++) {
    searchResult.push(
      `${arr[i].name.last}.${arr[i].name.first}@evilcorp.${arr[
        i
      ].nat.toLowerCase()}`
    );
  }
  return searchResult;
}
console.log(newListEmails(users));

// function newListEmails(arr) {
//   return arr.map(item => `${item.name.last}.${item.name.first}@evilcorp.${item.nat.toLowerCase()}`);
// }
// console.log(newListEmails(users))

// let oscar = [
//   "b",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "a",
//   "a",
//   "d",
//   "e",
//   "k",
//   "j",
//   "d",
//   "o",
//   "p",
//   "p",
//   "a",
//   "d",
//   "l",
//   "k",
// ];

// for (let index = 2; index < oscar.length; index++) {
//   console.log(index, oscar[index]);
// }
// console.log(oscar);
