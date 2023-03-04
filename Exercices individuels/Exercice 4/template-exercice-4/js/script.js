//Annexe1

const latinToMorse = {
    'A':'.-',
    'B':'-...',
    'C':'-.-.',
    'D':'-..',
    'E':'.',
    'F':'..-.',
    'G':'--.',
    'H':'....',
    'I':'..',
    'J':'.---',
    'K':'-.-',
    'L':'.-..',
    'M':'--',
    'N':'-.',
    'O':'---',
    'P':'.--.',
    'Q':'--.-',
    'R':'.-.',
    'S':'...',
    'T':'-',
    'U':'..-',
    'V':'...-',
    'W':'.--',
    'X':'-..-',
    'Y':'-.--',
    'Z':'--..'
  }


//-------------------- ETAPE 1

function getLatinCharacterList(quote){
    let quoteMaj = quote.toUpperCase();
    //let array = quote.split("");
    let array = Array.from(quoteMaj);
    return array
}
getLatinCharacterList("Hello, world")

document.getElementById("h2").innerHTML = "Étape 1 : " + getLatinCharacterList("Hello, world")

//-------------------- ETAPE 2

function translateLatinCharacter(latinChar){ /*reçoit le paramètre latinChar */
    //return latinToMorse.A
    let value = latinToMorse[latinChar] /*ouvre son dico et cherche la clé qui correspond à latinChar*/
    //console.log(value)
    return value
}
translateLatinCharacter("A")

document.getElementById("h3").innerHTML = "Étape 2 : " + translateLatinCharacter("A")

//-------------------- ETAPE 3

function encode(text){ /*reçoit un "text" à "encoder"*/
    let arrayChar = getLatinCharacterList(text) /*tableau contenant les caractères du "text" */    
    let result = ""
    arrayChar.forEach(element => {  /*on applique la fonction forEach au tableau*/
        result += " " + translateLatinCharacter(element) /*pour ne pas perdre les traductions précédentes*/
    });
    console.log(result);
    return result;;
}
encode("Ada")
/*"element" vaut A, donc translateLatinCharacter transforme A en morse, puis on recommence la boucle pour les lettres suivantes*/

document.getElementById("h4").innerHTML = "Étape 3 : " + encode("Ada")
