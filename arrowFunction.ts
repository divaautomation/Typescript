let sum1 = (x: number,y: number) =>{
    console.log(x+y)
};
sum1(10,10)

let addNumbers = (num1: number, num2: number): number => {
    return num1 + num2;
};

console.log(addNumbers(100, 40));  // Output: 140
console.log(addNumbers(150, 30));  // Output: 180
console.log(addNumbers(120, 70));  // Output: 190

let printSample = ()=>{
    console.log("welcome to typescript")
}
printSample()

let printSample1=(x:number,y:number) =>{
    console.log(x+y)
}
printSample1(100,100)

let printSample2=(x:number,y:number) : number =>{
   return x-y;
}
let result=printSample2(400,100)
console.log(result)
console.log(printSample2(400,300))

