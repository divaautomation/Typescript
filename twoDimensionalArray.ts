var empDetails: string[][] = [["divakar","India"],["rupa","Japan"]]
console.log("empDetails:    ",empDetails)
console.log("======================================")
var empDetails1: (number|string)[][] = [["divakar","India"],["rupa","Japan"]]
console.log("empDetails1.   ",empDetails1)

// Reading data from for loop 
for(let i=0;i<empDetails.length;i++){
    console.log(i)
    for(let j=0;j<empDetails[i].length;j++){
        console.log(empDetails[i][j])
    }
}

//Reading the for loop using in 
console.log("Using for in loop examples")

for( let i in empDetails){
    console.log(i)
    for (const k in empDetails[i]) {
       console.log(empDetails[i][k])
        }
}