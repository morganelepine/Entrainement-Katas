const str = "le reacteur c'est super !";
let counter = 0;

for (const letter of str){
    if (letter == "e" || letter == "r"){
        counter++
    }
}

console.log(counter);