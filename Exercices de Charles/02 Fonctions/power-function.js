const powerFunc = (num, power) => {
    //let option1 = num ** power
    //let option2 = Math.pow(num, power)
    let result = 0
    for (let i=0; i<=power; i++){
        result = result * num + num
    }
    return result
}

console.log(powerFunc(4, 7))

//pas réussi