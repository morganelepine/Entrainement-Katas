/* -------------------- ETAPE 1

let givenNumber = prompt("Choisissez un nombre entre 1 et 100", "Votre nombre");

function numberGiven(){
    return givenNumber;
 }

document.getElementById("nombreChoisi").innerHTML = "Vous avez choisi le nombre " + numberGiven()

-------------------- ETAPE 2

function didIWin(){
    let chosenNumber = 22
    if (givenNumber == chosenNumber){
        alert("Bravo ! Vous avez deviné le nombre !");
        result = "Bravo ! Vous avez deviné le nombre !";
    }
    else if (givenNumber > chosenNumber){
        alert("Plus petit !");
        result = "Plus petit !";
    }
    else {
        alert("Plus grand !");
        result = "Plus grand !";
    }
    return result
}

function gamePlay(){
    // Gère les appels de fonctions et la transmission de la variable d’une fonction à une autre
}

document.getElementById("Number").innerHTML = didIWin()

-------------------- ETAPE 3

function didIWin(){
    let givenNumber = prompt("Choisissez un nombre entre 1 et 100", "Votre nombre");
    let chosenNumber = 22
    if (givenNumber == chosenNumber){
        return true
    }
    else {
        return false
    }
}

function gamePlay(){
    // Gère les appels de fonctions et la transmission de la variable d’une fonction à une autre
    const result = didIWin();
    if (result == true){
        alert("Bravo ! Le jeu est fini.");
    } else {
        didIWin();
    }
}
gamePlay()


-------- essais ETAPE 3

/*function gamePlay(){
    // Gère les appels de fonctions et la transmission de la variable d’une fonction à une autre
    didIWin();
    do {
        prompt("Choisissez un nombre entre 1 et 100", "Votre nombre");
    } while (givenNumber != chosenNumber);
}
gamePlay()*/

/*function gamePlay(){
    // Gère les appels de fonctions et la transmission de la variable d’une fonction à une autre
    didIWin();
    while (false){
        prompt("Choisissez un nombre entre 1 et 100", "Votre nombre");
    }
}
gamePlay()*/

/*
//-------------------- ETAPE 4

let numberToGuess = prompt("Choisissez un nombre entre 0 et 50", "Votre nombre");

function willYouWin(){
    numberToGuess = prompt("Choisissez un nombre entre 0 et 50", "Votre nombre");
    if (numberToGuess < 0 || numberToGuess > 50){
        alert("Attention ! Vous devez choisir un nombre entre 0 et 50.");
        return willYouWin();
    } else {
        didIWin();
    }
    //return willYouWin;
}
willYouWin()

function didIWin(){
    let givenNumber = prompt("Trouvez le nombre choisi par la joueuse 1 (entre 0 et 50)", "Votre nombre");
    if (givenNumber == numberToGuess){
        //alert("Bravo ! Vous avez trouvé le bon nombre");
        return true
    } else {
        alert("Oops ! Essayez encore !");
        return false
    }
}

function gamePlay(){
    // Gère les appels de fonctions et la transmission de la variable d’une fonction à une autre
    const result = didIWin();
    if (result == false){
        return didIWin();
    } else {
        alert("Bravo ! Le jeu est fini.");
    }
}
gamePlay()

function numberOfAttempts(){
    let attempts = 1 ;
    return attempts;
}
*/


//-------------------- ETAPE 5

const numberToGuess = prompt("Choisissez un nombre entre 0 et 50", "Votre nombre");

function theAnswer(){
    let answer = document.getElementById("numberId").value;
    if (answer > numberToGuess){
        result = "INFÉRIEUR à " + answer;
    } else if (answer < numberToGuess){
        result = "SUPÉRIEUR à " + answer;
    } else {
        result = "bien celui-ci !";
    }
    return result;
}
theAnswer();

document.getElementById("numberOfAttempts").innerHTML = "Nombre de tentatives : " + numberOfAttempts()
document.getElementById("yourAnswer").innerHTML = "Le nombre à trouver est " + theAnswer()