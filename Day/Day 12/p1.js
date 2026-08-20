// Named export
export function add(a,b) {
    return a+b;
}
export function subtract(a,b) {
    return a-b;
}
import { add,subtract } from "./P1.js"; //Named export
import multiply from "./P3.js"; //default export

console.log(add(40,60));
console.log(subtract(90,60));

console.log(multiply(60,60));
