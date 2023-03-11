const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const array = []

function numbersDivisibleBy3(num) {
    if (num % 3 === 0) {
        return true
    }
}

function numbersDivisibleBy5(num) {
    if (num % 5 === 0) {
        return true
    }
}

function numbersDivisibleBy3And5(num) {
    if (num % 15 === 0) {
        return true
    }
}

function fizz(){
    for (let i=1; i<=100; i++){
        if (numbersDivisibleBy3And5(i)) {
            array.push("FizzBuzz");
        } else if (numbersDivisibleBy5(i)) {
            array.push("Fizz");
        } else if (numbersDivisibleBy3(i)) {
            array.push("Buzz");
        } else {
            array.push(i);
        }
    }
    return array;
}

console.log("array : ", fizz())