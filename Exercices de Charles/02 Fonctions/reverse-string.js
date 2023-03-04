const reverseString = (str) => {
    let reversedString = ""
    for (let i=str.length - 1; i>=0; i--){
        reversedString = reversedString + str.charAt(i)
    }
    return reversedString
}

let str1 = "Le Reacteur"
let str2 = "ruetcaeR eL"

console.log(reverseString(str1))
console.log(reverseString(str2))