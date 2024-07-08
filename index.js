//
// try {
//   console.log(test);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

//Throw dastur ichida o`zimiz xatolik yaratish uchun foydalaniladi.
// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Division by zero is not allowed");
//   }
//   return a / b;
// }
// console.log(divide(10, 0));
// try {
//   const res = divide(10, 0);
//   console.log("Result:", res);
// } catch (error) {
//   console.error("An error occurred:", error.message);
// }

//Spread, rest va destructing assignmentni hali o`tmadik

// Massiv va obyektlarga oid masalalar.
//1-masala
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];
// function

//2-masala
const students = [
  { name: "Alice", age: 20, score: 85, status: "active" },
  { name: "Bob", age: 22, score: 92, status: "inactive" },
];
function highScore(students) {
  return students.forEach((element) => {
    return element.score;
  });
}
console.log(highScore(students));

//5-masala
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "John", age: 22, score: 92, status: "inactive" },
//   { name: "Bob", age: 23, score: 88, status: "active" },
// ];

// function findJohn(students) {
//   return students.find((element) => element.name === "John");
// }
// console.log(findJohn(students));

//6-masala
// const students = [
//   { name: "Alice", age: 20, score: 80, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 85, status: "active" },
// ];
// function findIndexElement(students) {
//   return students.findIndex((element) => element.score > 85);
// }
// console.log(findIndexElement(students));

//7-masala
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 88, status: "active" },
// ];
// function findStatus(students) {
//   return students.filter((element) => element.status == "active");
// }
// console.log(findStatus(students));

//8-masala
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 17, score: 88, status: "active" },
// ];
// function findAgeElement(students) {
//   return students.every((element) => element.age > 18);
// }
// console.log(findAgeElement(students));

//9-masala
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 88, status: "active" },
// ];
// function findScoreElement(students) {
//   return students.some((element) => element.score > 90);
// }
// console.log(findScoreElement(students));

//10-masala
// const students1 = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];
// const students2 = [
//   { name: "Charlie", age: 23, score: 88, status: "active" },
//   { name: "David", age: 21, score: 90, status: "inactive" },
// ];
// function concatElement(students1, students2) {
//   return students1.concat(students2);
// }
// console.log(concatElement(students1, students2));

//11-masala
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Alice", age: 23, score: 88, status: "active" },
// ];
// function unikalElement(students){
//     return students
// }

//
// 12-masala
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];

// function changeObject(students) {
//   return students.value;
// }
// console.log(changeObject(students));

//13-masala
// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 88, status: "active" },
// ];

// function takeScoreElement(students) {
//   let res = [];
//   for (iterator of students) {
//     res.push(students.score);
//   }
//   return res;
// }
// console.log(takeScoreElement(students));

//14-masala

//String metodlariga oid masalalar.
//1-masala
// function substringElement(str) {
//   return str.substring(0, 5);
// }
// console.log(substringElement("Hello, world!"));

//2-masala
// function lowerCaseElement(str) {
//   let res = str.split("").map((element) => {
//     if (element === element.toLowerCase()) {
//       return element.toUpperCase();
//     } else {
//       return element.toLowerCase();
//     }
//   });
//   return res.join("");
// }
// console.log(lowerCaseElement("Hello, WORLD!"));

// //3-masala
// function createGapElement(str) {
//   let res = str.split(" ");
//   return res.join(" ");
// }
// console.log(createGapElement("Hello,world,from, JavaScript"));

//4-masala
// function joinElement(str) {
//   return str.join(",");
// }
// console.log(joinElement(["Hello", "world", "from", "JavaScript"]));

//5-masala
// function replaceElement(str) {
//   return str.replace(/a/g, "@");
// }
// console.log(replaceElement("JavaScript"));

//6-masala
// function removeGapElement(str) {
//   return str.trim();
// }
// console.log(removeGapElement("   Hello, world!   "));

//7-masala
// function findElement(str) {
//   return str.charAt(7);
// }
// console.log(findElement("Hello, world!"));

//8-masala
// function isExistElement(str) {
//   return str.includes("world");
// }
// console.log(isExistElement("Hello, world"));

//9-masala
// function findElement(str) {
//   return str.startsWith("Hello");
// }
// console.log(findElement("Hello, world"));

//10-masala
// function endsWithElement(str) {
//   return str.endsWith("world!");
// }
// console.log(endsWithElement("Hello, world!"));
