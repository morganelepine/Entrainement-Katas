const wordCount = (str) => {
    let word = 0
    for (const letter of str){
        if (letter === " "){
            word++
        }
    }
    if (str.length > 0){
        word++
    }
    return word
}

console.log(wordCount("Hello my name is Morgane"))