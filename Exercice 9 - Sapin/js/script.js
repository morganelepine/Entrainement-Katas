//-------------------- ETAPE 1

//-----V1

function sapin(etages){
    let espace = " "
    let star = ["+ \n"]
        star.unshift(espace.repeat(etages+2))
    let branch = ["/", "*", "\\", "\n"]
        branch.unshift(espace.repeat(etages+1))
    let branchRight = ["\\", "\n"]
    let leaf = "**"
    let christmasTree = [star.join("").toString(), branch.join("").toString()] //join = supprimer les virgules
    
    for (let i=etages; i>0; i--){
        let espace = " "
        let branchLeft = ["/", "*"]
        branchLeft.unshift(espace.repeat(i))
        branchRight.unshift(leaf)
        christmasTree.push(branchLeft.join("").toString(), branchRight.join("").toString())
    }

    return christmasTree.join("")
}

console.log(sapin(5))

//document.getElementById("p").innerHTML = sapin(5)






/*---------------------Action au clic sur un bouton

document.getElementById("bouton").onclick = function () {
    combinationOK();
};

OU

let btn = document.querySelector("input");
btn.addEventListener("click", combinationOK);
*/