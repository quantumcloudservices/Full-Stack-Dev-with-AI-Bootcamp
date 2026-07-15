let x: string[] = [];

x.push("5"); // No error: Argument of type 'string' is assignable to parameter of type 'string'.

let t: (string | number)[] = [];

t.push("5"); // No error: Argument of type 'string' is assignable to parameter of type 'string'.
t.push(5);   // No error: Argument of type 'number' is assignable to parameter of type 'number'.

interface Person {
    name: string;
    age: number;
} // Interface Person defines a structure for a person object with two properties: name (string) and age (number).
// Interface is a contract that defines the shape of an object, ensuring that any object adhering to this interface will have the specified properties with the correct types.
let people: Person[] = [];


