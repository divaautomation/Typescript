//Rest parameter is denoted by ... so that we can pass any number of parameters
function Greet(greetingmsg: string, ...name:string[]){
    return greetingmsg+" "+name
}
console.log(Greet("Hello", "Diva"))
console.log(Greet("Hello", "Diva", "Rupa"))
console.log(Greet("Hello", "Diva", "Rupa","Kumar"))


