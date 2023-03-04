function highAndLow(numbers){
    //transformer la string en array
    numbers = numbers.split(' ')
    console.log(numbers)
    
    //trier les chiffres du plus petit au plus grand
    //let sortedNumbers = arrNum.sort()
    numbers.sort((a, b) => a - b);
    console.log(numbers)

    //mettre dans le tableau le plus petit et le plus grand
    let array = []
    array.push(numbers[0], numbers[numbers.length-1])

    //transformer l'array en string
    array = array.join(' ')

    return array
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))