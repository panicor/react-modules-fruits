import fruits from "./foods"
import {choice, remove} from "./helpers"

let pickedFruit = choice(fruits);

console.log(`I'd like one ${pickedFruit} please.`);
console.log(`Here you go: ${pickedFruit}`);
console.log(`May I have some more?`)

let others = remove(fruits, pickedFruit);

console.log(`We are all out. We have ${others.length} types of fruit remaining.`);