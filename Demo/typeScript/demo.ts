let user = (a: string, b: number): string => a+b;
let hob:any[];
hob = ["hi"];
enum color {
    gray,
    blue = 100,
    green
}
console.log(color.green);

function mult(val1: number, val2:number): number{
    return val1*val2;
}
function mult2(val1: number, val2:number): void{
     val1*val2;
}
let my: (a:number, b:number) => number;
my = mult;
//my = mult2;
let thing: string | number | string[] | boolean;
let fun = (p:string | number | string[] | boolean) => p;

type thing1 = string | number | string[] | boolean;
let fun1 = (p:thing1) => p;

interface courseInt {
    name: string;
    code: number;
    project?: boolean;
}

class Course{
    constructor(public name: string, public code: number){}
}