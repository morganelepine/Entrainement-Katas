const email = "nono@lereacteur.io";
let valid = false

for (const element of email){
    if (element == "@"){
        valid = true
    }
}

console.log(valid);