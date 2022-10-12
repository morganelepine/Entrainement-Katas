
function askName(){
    let prenom = prompt("Quel est votre prénom ?", "Votre prénom") 
    return prenom;
}


// si le #moisnaissance est inférieur à 11, alors on enlève 1 à #age

var mois = [1,2,3,4,5,6,7,8,9,10,11,12]

let mois = prompt ("Quel est votre mois de naissance (en nombre) ?", "Numéro de votre mois de naissance")
let annee = prompt("En quelle année êtes-vous né·e ?", "Votre année de naissance")

if (mois < moisactuel){
    var moisAge = currentMonth - dtMonth;  
}
else {
    anneAge--;  
    var moisAge = 12 + currentMonth - dtMonth;  
}


function askBirthYear(){
    let age = 2022 - annee
    return age;
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


