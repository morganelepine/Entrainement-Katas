function filter_list(l) {
    let array = []
    for (let el of l){
        if (typeof(el) == "number"){
            array.push(el)
        }
    }
    return array
}

console.log(filter_list([1,2,'aasf','1','123',123]))