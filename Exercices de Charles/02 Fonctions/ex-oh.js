function exOh(str){
    let arrayOfO = []
    let arrayOfX = []
    for (let letter of str){
        if (letter == "o"){
            arrayOfO.push(letter)
        } else {
            arrayOfX.push(letter)
        }
    }
    return arrayOfO.length == arrayOfX.length
}
console.log(exOh("xooxxo"))
console.log(exOh("xooxxxxooxo"))