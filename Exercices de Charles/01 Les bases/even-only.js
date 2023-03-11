const limit = 20;

let array = []
for (let i=2; i<=limit; i+=2){
    array.push(i)
}
console.log(array)

for (let i=2; i<=limit; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}