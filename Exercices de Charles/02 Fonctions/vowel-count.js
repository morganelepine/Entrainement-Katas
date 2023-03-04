function vowelCount(str){
    let voyelles = ["a", "e", "i", "o", "u", "y"]
    let array = []
    for (let voyelle of voyelles){
        for (let letter of str){
            if (letter == voyelle){
                array.push(letter)
            }
        }
    }
    return array.length
}
console.log(vowelCount("thereactor"))
console.log(vowelCount("hello"))
