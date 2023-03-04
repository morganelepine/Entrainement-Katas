const box = (width, height) => {
    let str = ""
    if (width==1 && height==1){
        str = "o"
    } else if (width==1 && height!=1){
        for (let i=0; i<height; i++){
            let firstChar = str.charAt(0)
            firstChar = "o\n"
            let lastChar = str.charAt(height-1)
            lastChar = "o"
            let middle = ""
            for (let j=0; j<height-2; j++){
                middle = middle + "|\n"
            }
            str = firstChar + middle + lastChar 
        }
    } else if (height==1 && width!=1){
        for (let k=0; k<width; k++){
            let firstChar = str.charAt(0)
            firstChar = "o"
            let lastChar = str.charAt(width-1)
            lastChar = "o"
            let middle = ""
            for (let l=0; l<width-2; l++){
                middle = middle + "-"
            }
            str = firstChar + middle + lastChar
        }
    }
    //else {
    //     let firstChar = str.charAt(0)
    //     firstChar = "o"
    //     let lastChar = str.charAt(width-1)
    //     lastChar = "o"
    //     let middle = ""
    //     for (let l=0; l<width-2; l++){
    //         middle = middle + "-"
    //     }
    //     str = firstChar + middle + lastChar
    // }
    console.log(str)
    return str
}

console.log("essai 1 :\n", box(5, 3));
console.log("essai 2 :\n", box(5, 1));
console.log("essai 3 :\n", box(1, 1));
console.log("essai 4 :\n", box(1, 5));
console.log("essai 5 :\n", box(4, 4));