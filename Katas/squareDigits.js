function squareDigits(num){
    let str = num.toString().split('')
    let arr = []
    for (letter of str){
        letter = Number(letter) * Number(letter)
        arr.push(letter)
    }
    let arrToString = arr.join('')
    let integer = Number(arrToString)
    
    return integer;
}

console.log(squareDigits(765))
console.log(squareDigits(9119))