//----------Afficher les chiffres dans le cadran au clic

let number0 = document.getElementById("0").value   
let number1 = document.getElementById("1").value
let number2 = document.getElementById("2").value
let number3 = document.getElementById("3").value
let number4 = document.getElementById("4").value
let number5 = document.getElementById("5").value
let number6 = document.getElementById("6").value
let number7 = document.getElementById("7").value
let number8 = document.getElementById("8").value
let number9 = document.getElementById("9").value

document.getElementById("0").addEventListener("click", function(){
    afficher(document.getElementById("0").value)
});

document.getElementById("1").addEventListener("click", function(){
    afficher(number1)
});

document.getElementById("2").addEventListener("click", function(){
    afficher(number2)
});

document.getElementById("3").addEventListener("click", function(){
    afficher(number3)
});

document.getElementById("4").addEventListener("click", function(){
    afficher(number4)
});

document.getElementById("5").addEventListener("click", function(){
    afficher(number5)
});

document.getElementById("6").addEventListener("click", function(){
    afficher(number6)
});

document.getElementById("7").addEventListener("click", function(){
    afficher(number7)
});

document.getElementById("8").addEventListener("click", function(){
    afficher(number8)
});

document.getElementById("9").addEventListener("click", function(){
    afficher(number9)
});


//----------Afficher les signes dans le cadran

let coma = document.getElementById(",").value
let add = document.getElementById("+").value
let substract = document.getElementById("-").value
let multiply = document.getElementById("*").value
let divide = document.getElementById("/").value
let modulo = document.getElementById("%").value

document.getElementById(",").addEventListener("click", function(){
    afficher(coma)
});

document.getElementById("+").addEventListener("click", function(){
    afficher(add)
});

document.getElementById("-").addEventListener("click", function(){
    afficher(substract)
});

document.getElementById("*").addEventListener("click", function(){
    afficher(multiply)
});

document.getElementById("/").addEventListener("click", function(){
    afficher(divide)
});

document.getElementById("%").addEventListener("click", function(){
    afficher(modulo)
});



//----------Afficher le calcul dans le cadran

let cadran = document.getElementById("cadran")

function afficher(number){
    cadran.value = cadran.value + number
}


//----------Faire le calcul

document.getElementById("equal").addEventListener("click", function(){
    let result = eval(cadran.value)
    cadran.value = result
});


//----------Effacer le cadran

let erase = document.getElementById("erase")

document.getElementById("erase").addEventListener("click", function(){
    cadran.value = "0"
});