function fizzbuzz(n){
    let array = []

    for (let i=1; i<=n; i++){
        if (i % 15 == 0){
            array.push("FizzBuzz")
        } else if (i % 3 == 0){
            array.push("Fizz")
        } else if (i % 5 == 0){
            array.push("Buzz")
        } else {
            array.push(i)
        }
    }

    return array
}

console.log(fizzbuzz(3))
// [1, 2, "Fizz"]
console.log(fizzbuzz(18))
console.log(fizzbuzz(100))

//If the value is a multiple of 3: use the value "Fizz" instead
//If the value is a multiple of 5: use the value "Buzz" instead
//If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead


function buzzfizz(n){
    let array = []

    for (let i=1; i<=n; i++){
        if ((i + '').includes(3)){
            array.push(i)
        }
    }

    return array
}

console.log(buzzfizz(50))