First create an empty file and run `npm init -y`.

Followed by that run `npm i simple-math-akp111` to install the package.

Create a file named `index.js` and write the following code to add two numbers:

```js
const { add, sub, mul } =  require("simple-math-akp111");

console.log("Add 1 and 2");
console.log(add(1,2))
console.log("Subtract 1 from 2");
console.log(sub(1,2))
console.log("Multiply 1 and 2");
console.log(mul(1,2))

```