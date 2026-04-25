let username: string = "sanjay";
let age: number = 25;
let isDev: boolean = true;
const big: bigint = 2n ** 63n - 1n;

// you cannot use two different types in one value
// const mixed = big + age;
//Operator '+' cannot be applied to types 'bigint' and 'number'.

const TOKEN: unique symbol = Symbol("TOKEN");

function yearsToDay(years: number): number {
  return years * 365;
}
