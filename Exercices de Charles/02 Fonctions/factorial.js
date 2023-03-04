const factorial = (num) => {
    let total = 1
    for (let i=1; i<=num; i++){
        total = total * i
    }
    return total
}

console.log(factorial(4))
console.log(factorial(8))