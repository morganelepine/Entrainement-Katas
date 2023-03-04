function descendingOrder(n){
    let str = n.toString().split('')
    let array = []
    for (letter of str){
        array.push(Number(letter))
    }
    for (let i=0; i<array.length; i++){
        for (let j=0; j<array.length; j++){
            if (array[j] < array[j+1]){
                let index = array[j]
                array[j] = array[j+1]
                array[j+1] = index
            }
        }
    }
    let integer = Number(array.join(''))
    return integer
}

console.log(descendingOrder(145263))
console.log(descendingOrder(0))