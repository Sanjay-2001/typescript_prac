// goal -> understand when to let typescript infer types
// when ts will writes the types / u r going to write

let count = 0; // ts sees number
const user = "Sanjay"; // ts sees the exact literal "Sanjay"
const score = [10, 20, 30]; // number[] -> number of arrays

// over annotation isn't bad -> just noicy

//annotate when using function
export function add(a: number, b: number): number {
  return a + b;
}

// console.log(add("3",5)) // will give error
console.log(add(3, 4));

//you should also annotate when the type is not obvious
let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 10;
