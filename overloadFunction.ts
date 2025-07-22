//function overloading
/**
 * same function name and number of parameter should be same
 * but different paramenter type and return type
 */

function add(a:number,b:number): number;
function add(a:string,b:string): string;
function add(a:string,b:number):string;

function add(a:any,b:any){
    return a+b;
}

console.log(add(100,200))
console.log(add("welcome ", "to Japan"))

///Not supported
// function overloading with different no. of parameters 
// and types with same function name is not supported

function display(a:number,b:number): void{
    console.log(a+b)
}
function display(a:number): void{
    console.log(a)
}
function display(a:number): number{
    console.log(a)
    return a
}