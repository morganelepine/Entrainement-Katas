/*
Ce jeu se joue avec un joueur qui choisit une combinaison de couleur
et un autre joueur qui doit deviner ces couleurs et dans quel ordre.
Un codemaker et un codebreaker. A chaque tour, le codebreaker doit faire une proposition,
le codemaker doit lui répondre en indiquant le nombre de couleurs bien placées
et le nombre de bonne couleur mais mal placées.
*/


//-------------------- ETAPE 1

/*
const colors = ["bleu", "rouge", "jaune", "vert", "violet", "orange", "gris", "rose"]

let pion1 = prompt("Choisissez le premier pion à trouver", "Couleurs possibles : bleu, rouge, jaune, vert, violet, orange, gris, rose");
if ((pion1 != colors[0] || pion1 != colors[1] || pion1 != colors[2] || pion1 != colors[3] || pion1 != colors[4] || pion1 != colors[5] || pion1 != colors[6] || pion1 != colors[7]))
{
    alert("Veuillez choisir une couleur parmi les suivantes : bleu | rouge | jaune | vert | violet | orange | gris | rose")
    pion1 = prompt("Choisissez le premier pion à trouver", "Couleurs possibles : bleu, rouge, jaune, vert, violet, orange, gris, rose");
}

let pion2 = prompt("Choisissez le deuxième pion à trouver", "Couleurs possibles : bleu, rouge, jaune, vert, violet, orange, gris, rose");
if ((pion2 != colors[0] || pion2 != colors[1] || pion2 != colors[2] || pion2 != colors[3] || pion2 != colors[4] || pion2 != colors[5] || pion2 != colors[6] || pion2 != colors[7]))
{
    alert("Veuillez choisir une couleur parmi les suivantes : bleu | rouge | jaune | vert | violet | orange | gris | rose")
    pion2 = prompt("Choisissez le deuxième pion à trouver", "Couleurs possibles : bleu, rouge, jaune, vert, violet, orange, gris, rose");
}

let pion3 = prompt("Choisissez le troisième pion à trouver", "Couleurs possibles : bleu, rouge, jaune, vert, violet, orange, gris, rose");
if ((pion3 != colors[0] || pion3 != colors[1] || pion3 != colors[2] || pion3 != colors[3] || pion3 !== colors[4] || pion3 != colors[5] || pion3 != colors[6] || pion3 != colors[7]))
{
    alert("Veuillez choisir une couleur parmi les suivantes : bleu | rouge | jaune | vert | violet | orange | gris | rose")
    pion3 = prompt("Choisissez le troisième pion à trouver", "Couleurs possibles : bleu, rouge, jaune, vert, violet, orange, gris, rose");
}

let pion4 = prompt("Choisissez le quatrième pion à trouver", "Couleurs possibles : bleu, rouge, jaune, vert, violet, orange, gris, rose");
if ((pion4 != colors[0] || pion4 != colors[1] || pion4 != colors[2] || pion4 != colors[3] || pion4 != colors[4] || pion4 != colors[5] || pion4 != colors[6] || pion4 != colors[7]))
{
    alert("Veuillez choisir une couleur parmi les suivantes : bleu | rouge | jaune | vert | violet | orange | gris | rose")
    pion4 = prompt("Choisissez le quatrième pion à trouver", "Couleurs possibles : bleu, rouge, jaune, vert, violet, orange, gris, rose");
}

let combinaison = [pion1, pion2, pion3, pion4]

document.getElementById("combinaisonDonnee").innerHTML = "La combinaison à trouver : " + combinaison.join(' - ')
*/

//-------------------- ETAPE 2


let chosenColor1 = prompt("Choisissez le premier pion à trouver", "Le premier pion choisi");
let chosenColor2 = prompt("Choisissez le deuxième pion à trouver", "Le deuxième pion choisi");
let chosenColor3 = prompt("Choisissez le troisième pion à trouver", "Le troisième pion choisi");
let chosenColor4 = prompt("Choisissez le quatrième pion à trouver", "Le quatrième pion choisi");

let combinaison = [chosenColor1, chosenColor2, chosenColor3, chosenColor4]
console.log(combinaison)

document.getElementById("combinaisonDonnee").innerHTML = "La combinaison à trouver : " + combinaison.join(' - ')



//-------------------- ETAPE 3

//--V1 : pas d'indications sur les couleurs bien placées ou non

/*function combinationOK(){
    //retourne true ou false si la bonne combinaison est trouvée ou non    
    //gère la partie (continuer tant que/fin si gagné)
    let pion1 = document.getElementById("pion1").value;
    let pion2 = document.getElementById("pion2").value;
    let pion3 = document.getElementById("pion3").value;
    let pion4 = document.getElementById("pion4").value;
    let result = ""

    if (pion1 == chosenColor1 && pion2 == chosenColor2
        && pion3 == chosenColor3 && pion4 == chosenColor4){
        result = true
        document.getElementById("yourAnswer").innerHTML = "La combinaison est correcte."
    } else {
        result = false
        document.getElementById("yourAnswer").innerHTML = "La combinaison est incorrecte."
    }
    return result;
}*/


//--V2 : indications sur les couleurs bien placées ou non

function combinationOK(){
    let pion1 = document.getElementById("pion1").value;
    let pion2 = document.getElementById("pion2").value;
    let pion3 = document.getElementById("pion3").value;
    let pion4 = document.getElementById("pion4").value;

    let proposition = [pion1, pion2, pion3, pion4]
    console.log(proposition)

    let result = ""
    let goodColors = 0
    let placedColors = 0

    for (let i=0; i<combinaison.length; i++){

        //si la couleur proposée est au même emplacement que la couleur à trouver
        if (combinaison[i] == proposition[i]){
            combinaison[i] = null; //on "supprime" la couleur pour qu'elle ne soit pas recomparée si elle est en double
            proposition[i] = null;
            placedColors += 1
            if (placedColors == 1){
                document.getElementById("yourAnswer1").innerHTML = "1 couleur est correctement placée." //fonctionne
            } else if (placedColors == 4) {
                goodColors = 0
                result = true
                document.getElementById("yourAnswer1").innerHTML = "La combinaison est correcte." //fonctionne
                document.getElementById("yourAnswer2").innerHTML = ""
            } else {
                document.getElementById("yourAnswer1").innerHTML = placedColors + " couleurs sont correctement placées." //fonctionne
            }

        //si la couleur proposée fait partie des couleurs à trouver
        } else {
            for (let j=0; j<proposition.length; j++){
                if ((combinaison[i] != null) && (proposition[i] != null) && (combinaison.includes(proposition[j]))){
                    goodColors += 1
                    if (goodColors == 1){
                        document.getElementById("yourAnswer2").innerHTML = "1 couleur est correcte."
                    } else {
                        document.getElementById("yourAnswer2").innerHTML = goodColors + " couleurs sont correctes."
                    }
                }
            }
        }

        //si la couleur proposée fait partie des couleurs à trouver
        /*for (let j=0; j<proposition.length; j++){
            if ((combinaison.includes(proposition[i])) && (combinaison[i] != null) && (proposition[i] != null)){
                goodColors += 1
                if (goodColors == 1){
                    document.getElementById("yourAnswer2").innerHTML = "1 couleur est correcte."
                } else {
                    document.getElementById("yourAnswer2").innerHTML = goodColors + " couleurs sont correctes."
                }
            }
        }*/

    }
    return result
}


//-------------------- ETAPE 4

let essai = 13;
function gameOK(){   
    if(essai<1){
        document.getElementById("bouton").disabled = true;
        document.getElementById("essaisMax").innerHTML = "Dommage ! Vous avez atteint le nombre maximal de tentatives...";
    } else if (combinationOK() == true) {
        document.getElementById("bouton").disabled = true;
        document.getElementById("gagne").innerHTML = "Félicitations !";  
    } else {
        combinationOK(); 
        essai-=1
        document.getElementById("numberOfAttempts").innerHTML = "Nombre d'essais restants : " + essai
        console.log(essai);
    }}
gameOK()









/*---------------------Action au clic sur un bouton

document.getElementById("bouton").onclick = function () {
    combinationOK();
};

OU

let btn = document.querySelector("input");
btn.addEventListener("click", combinationOK);
*/