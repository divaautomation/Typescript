var empID: number =101
var empName: string = "divakar"
var empSal:number = 5000000

//Declare tuple without type
var employee = [101,"diva",50000]
var employee1: [number,string,number]  // pass the value according to the order like num,string, number
employee1 = [101,"diva",50000]
console.log(employee1)
console.log(employee1[0])

for(let i in employee1){
    console.log(employee1[i])
}

//add element into tuple : Push()
employee1.push(301,"raja",540000)
console.log("=================")
console.log(employee1)

//remove elements from tuple
employee1.pop() //removes last element by default one at atime
console.log(employee1)