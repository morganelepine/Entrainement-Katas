function palindrome(str){
    let string1 = str.split(" ").join("").toLowerCase()
    console.log(string1)

    let array = []
    for (let i=string1.length-1; i>=0; i--){
        array.push(string1[i])
    }

    let string2 = array.toString().split(",").join("")
    console.log(string2)

    return string2 === string1
}

console.log(palindrome("Aromate et Amora"))
console.log(palindrome("Un bon snob nu"))
console.log(palindrome("C'est un test"))