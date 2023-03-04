function getSum(a, b){
    if (a == b){
        return a
    } else if (b == a+1 || b == a-1){
        return a + b
    } else {
        return "oops i don't know"
    }
}

console.log(getSum(1, 2))
console.log(getSum(3, 2))
console.log(getSum(3, 5))
console.log(getSum(1, 1))
console.log(getSum(-1, 2))