function disemvowel(str) {
    let strWithoutVowels = []
    let strWithVowels = []
    for (let letter of str){
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"
            || letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U"){
            strWithVowels.push(letter)
        } else {
            strWithoutVowels.push(letter)
        }
    }
    console.log(strWithoutVowels)
    
    str = strWithoutVowels.join("")
    return str;
}

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
//N ffns bt,\nYr wrtng s mng th wrst 'v vr rd