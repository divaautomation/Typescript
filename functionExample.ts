//Named function
function greeting(){
    console.log("Welcome to Automation")
}
greeting();

//Named function witha arguments and return value
function sum(x: number,y:number): number{
    console.log(x+y)
    return x+y
}
let sumValue=sum(10,10)
console.log("the sum of two number :"+ sumValue)

function greet(greeting :string, name:string) : string{
    return greeting + " " + name + "!"
}
console.log(greet("hello","divakar"))
let card =greet("hello","Rupa")
console.log(card)

//optional parameter
function greetOptional(greet : string, name?:string){
    console.log(greet+" "+name)
}

greetOptional("Hello Everyone")
greetOptional("Hello teammember","Divakar")
