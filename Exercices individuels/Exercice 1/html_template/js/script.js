
function askName(){
    let prenom = prompt("Quel est votre prénom ?", "Votre prénom") 
    return prenom;
}

// si le #moisnaissance est supérieur à 10 (octobre), alors on enlève 1 à #age

function askBirthYear(){
    let mois = prompt ("Quel est votre mois de naissance (en nombre) ?", "Numéro de votre mois de naissance")
    let annee = prompt("En quelle année êtes-vous né·e ?", "Votre année de naissance")
    let age = 2022 - annee
    if (mois > 10){ 
        result = age - 1 
    } else {
        result = age
    }
    return result;
}

document.getElementById("Name").innerHTML = "👋 Bonjour " + askName() + " !"
document.getElementById("BirthYear").innerHTML = "Vous avez " + askBirthYear() + " ans."





// -----------ETAPE 1

//let prenom = prompt("Quel est votre prénom ?", "Votre prénom")

//if (prenom != null) {
    //document.getElementById("bonjourprenom").innerHTML += "👋 Bonjour " + prenom + " !"}

//let naissance = prompt("En quelle année êtes-vous né·e ?", "Votre année de naissance")

//const encours = 2022

//var age = encours - naissance

//if (age != null){
    //document.getElementById("vousavezage").innerHTML += "Vous avez " + age + " ans."}



// -----------ETAPE 2

//function askName(){
    //let prenom = prompt("Quel est votre prénom ?", "Votre prénom") 
    //return prenom;}

//function askBirthYear(){
    //let naissance = prompt("En quelle année êtes-vous né·e ?", "Votre année de naissance")
    //let age = 2022 - naissance
    //return age;}

//document.getElementById("Name").innerHTML = "👋 Bonjour " + askName() + " !"
//document.getElementById("BirthYear").innerHTML = "Vous avez " + askBirthYear() + " ans."



// -----------ETAPE 3

//function askName(){
    //return prompt("Quel est votre prénom ?", "Votre prénom") ;}

//function askBirthYear(){ 
    //return 2022 - prompt("En quelle année êtes-vous né·e ?", "Votre année de naissance");}

//document.getElementById("Name").innerHTML = "👋 Bonjour " + askName() + " !"
//document.getElementById("BirthYear").innerHTML = "Vous avez " + askBirthYear() + " ans."


