//Arrray declaration and initalization
var empname: string[] = ["divakar","rupa","baba"]
console.log("employe name",empname)

//Array type is defined
var depart: Array<string>
depart=["IT","CSC"]
console.log("Department name",depart)

//multi type array and with array<>
var company: (string | number)[]
company=["meetsmore",5]
console.log("Company name",company)

var company1: Array<string | number > = [2,"TCS"]
console.log("company1", company1)

//Access array elements
var countries: string[] =["india","usa","nepal","japan"]
console.log(countries[0])
console.log(countries[1])
console.log(countries[2])
console.log("===========================")

//******for loop */
for(var i=0;i<countries.length;i++){
    console.log(countries[i])
}
console.log("===========================")
//*** for in loop */
for(var j in countries){
    console.log(countries[j])
}

console.log("===========================")
//***for each */
countries.forEach(element => {
    console.log(element)
});