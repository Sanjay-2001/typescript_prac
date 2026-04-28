type Direction = "left" | "right" | "up";

function move(d: Direction) {
    console.log(d);
}

const d1 = "left"; // TS keeps literal type "left"
move(d1);

let d2 = "left"; // TS widens to string, as d2 can be changed later
d2 = "down";
// TS wont allow to use function if it has type mentioned
// move(d2); // Argument of type 'string' is not assignable to parameter of type 'Direction'.
move(d2 as Direction); // you can initate the type using as

// so we need to mention the type if you want to use let to assign value
let d3: Direction = "left";
move(d3);