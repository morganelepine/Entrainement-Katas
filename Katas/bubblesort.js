function bubbleSort(array){
    //let arr = []
    for (let i=0; i<array.length; i++){
        for (let j=0; j<array.length; j++){
            if (array[j] > array[j+1]){
                let index = array[j];
                console.log("index : ", index)
                array[j] = array[j+1]
                console.log("next index : ", array[j])
                array[j+1] = index
                console.log("new next index : ", index)
            }
            console.log(array)
        }
    }
    return array
}

console.log(bubbleSort([5,1,30,6,27,3,14,18]))