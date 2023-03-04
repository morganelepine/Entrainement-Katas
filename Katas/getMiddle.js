function getMiddle(s){
    //let arrayOfLetters = s.split('')
    let length = s.length
    let array = []

    if (length % 2 != 0){
        array.push(s[(length - 1) / 2])
    } else {
        array.push(s[(length / 2) - 1], s[(length) / 2])
    }
    
    return array.join('')
}

console.log(getMiddle("test")) //es
console.log(getMiddle("middle")) //dd
console.log(getMiddle("testing")) //t
console.log(getMiddle("Ordinateurs")) //a