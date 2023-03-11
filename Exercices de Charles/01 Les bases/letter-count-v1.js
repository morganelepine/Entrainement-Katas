const str = "le reacteur c'est super !";
let counter = 0; // stocke le nombre de e

const letters = str.split('')
console.log(letters)

for (const letter of letters){
    if (letter == "e"){
        counter+=1
    }
}

console.log(counter);