const {readFileSync, writeFileSync} = require("fs")

const hachage = () => {
    let password = document.getElementById("userPassword").value;
    console.log(password)
    let salt = "sel"
    let algo = CryptoJS.algo.SHA256.create()
    algo.update(password)
    algo.update(CryptoJS.SHA256(salt))
    let hash = algo.finalize().toString(CryptoJS.enc.Hex)
    console.log(hash)
    let tableauMDP = new Object()
    let username = document.getElementById("username").value;
    tableauMDP.Pass = hash;
    tableauMDP.User = username
    console.log(tableauMDP)
}
document.getElementById("submit").addEventListener("click", hachage)

const test = JSON.stringify(tableauMDP)
console.log(test)