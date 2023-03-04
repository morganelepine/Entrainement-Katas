function accum(string) {
    let newString = []
    newString.push(string[0].toUpperCase())
    for (let i=0; i<string.length; i++){
        newString.push(string[i] * i)
        //newString[i].charAt(0).toUpperCase()
    }
    return newString.join('-')
}

console.log(accum("abcd")) //"A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")) //"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")) //"C-Ww-Aaa-Tttt"