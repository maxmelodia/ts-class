//1 - number
let x: number = 10;
console.log(x);

//x = 'teste';

x = 16;

console.log(typeof x);

let y: number = 16.456577;

console.log(y);
console.log(typeof y);
console.log(y.toPrecision(3));

//2 - string
const firstName: string = 'Maxwell';
console.log(firstName.toUpperCase());

let fullName: string;
const lastName: string = 'Duarte';

fullName = firstName + ' ' + lastName;
console.log(typeof fullName);
console.log(fullName);

//3 - boolean
let a: boolean = false;
console.log(a);
console.log(typeof a);

a = true;
console.log(a);

//4 - inference e annotation
let annotation: string = 'Teste';
let inferencia = 'Teste';

//annotation = 1;
//inferencia = 1;

//comando: tsc -w 
//hot reload.