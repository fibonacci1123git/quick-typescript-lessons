
let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

let color: string = "blue";
color = "red";
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;

let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// OK
console.log(x[0].substring(1));

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
// by default 0, so
enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;

let notSure: unknown = 4;
notSure = "maybe a string instead";

declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");

let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();

function warnUser(): void {
  console.log("This is my warning message");
}Try

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
