const ROLES = ["admin", "user", "operator"] as const; // its like readonly cannot be reassigned

// derive a union from the array
type Role = (typeof ROLES)[number]; // -> type Role = "admin" | "user" | "operator";

function setRole(r: Role) {
    console.log(r);
}

// setRole('admin1'); // Argument of type '"admin1"' is not assignable to parameter of type '"admin" | "user" | "operator"'.
setRole('admin');
