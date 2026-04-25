// strictNullChecks

let title: string = "dutta";
// title = undefined; // Type 'undefined' is not assignable to type 'string'.  as in tsconfig.json strict is true

// if you don't want error and want the string to be undefined then
let subtitle: string | undefined = "dutta";
subtitle = undefined;

// for function dont use return type any for callbacks whose value will be ignored
// instead use type: void for function when it doesnt return useful values
function log(msg: string): void {
  console.log(msg);
}

// when function doesnt return value use type never
function fail(msg: string): never {
  throw new Error(msg);
}

// DO NOT USE ANY, TRY TO IGNORE AS MUCH AS POSSIBLE
const valueAny: any = JSON.parse('{"x" : "1"}');

valueAny.notThere.toFixed(2); // this will compile but can break/explode at runtime
