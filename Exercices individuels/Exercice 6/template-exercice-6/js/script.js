//-------------------- ETAPE 1

function maxDaysInMonth(jour, mois){
    if (jour>30 && mois==2){
        return false;
    } else if (jour>30 && mois==4){
        return false;
    } else if (jour>30 && mois==6){
        return false;
    } else if (jour>30 && mois==9){
        return false;
    } else if (jour>30 && mois==11){
        return false;
    } else { return true;}
}

function isValidDate(date){
    let dateSplit = date.split("/");
    let day = dateSplit[0];
    let month = dateSplit[1];
    let year = dateSplit[2];

    
    if (maxDaysInMonth(day,month) === true && day>=1 && day<=31 && month>=1 && month<=12 && year>999 && year<=9999){
        return true;
    } else if (date = ""){ //si la date n'existe pas
        return false;
    } else { //si la date n'est pas au bon format
        return false;
    }
}

/*
console.log(isValidDate("29/04/1992")) // true
console.log(isValidDate("31/04/1992")) // false
console.log(isValidDate("04/29/1992")) // false
console.log(isValidDate("")) // false
*/


//-------------------- ETAPE 2

function isPalindrome(date2){
    let date3 = date2.replace("/",""); //date2 sans le premier "/"
    let dateOK = date3.replace("/",""); //date2 sans les deux "/"
    let dateReverse = dateOK.split('').reverse().join('');

    console.log(dateReverse)
    console.log(dateOK)

    if (dateOK == dateReverse){
        return true;
    } else {return false;}

}

console.log(isPalindrome("29/04/1992")) // false
console.log(isPalindrome("11/02/2011")) // true


/*
function isPalindromeBis(dateStr){
    let dateArr = Array.from(dateStr); //convertit la string dateStr en array dateArr
    console.log(dateArr)
    for (let i=0; i<dateArr; i++){
        if (dateArr[i] === "/"){
            dateArr.splice(i,2);
        }
        console.log(dateArr)
    }

    let arrDate = dateArr.split('').reverse().join('');

    if (arrDate == dateArr){
        return true;
    } else {return false;}

}

console.log(isPalindromeBis("29/04/1992")) // false
console.log(isPalindromeBis("11/02/2011")) // true
*/

//-------------------- ETAPE 3

function getNextDay(nbJours){
    date = new Date();

    for (let i=0; i<nbJours; i++) {
        date.setDate(date.getDate() + 1);
        //console.log(date.toLocaleDateString())
    }
    return date.toLocaleDateString();
}

//console.log(getNextDay(55))

/*OLD

function getNextDay(nbJours){
    date = new Date();
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();

    for (let i=0; i<nbJours; i++) {
        date.setDate(date.getDate() + 1);
        console.log(date.toLocaleDateString())
        if (maxDaysInMonth(day,month) == false) {
            date.setDate(month += 1);
            date.setDate(1);
            //day = 1
            //month+1
        }
        if (month>12){
            month = 1
            year+1
    }
    return date.toLocaleDateString();
}
*/


function getNextPalindromes(x){
    //donne les x prochaines dates palindromes à compter d’aujourd’hui
    let array = [];
    for (let i=0; i<=x; i++){
        if (isPalindrome(getNextDay([i])) == true){
            array.push(isPalindrome(getNextDay([i])));
        } //else {getNextDay()}
    }
    return array;
}

//console.log(getNextPalindromes(100))


//prendre la date du jour
//déterminer si c'est un palindrome
    //si oui : array.push(date)
    //si non passer à la date suivante
        //déterminer si c'est un palindrome
            //si oui : array.push(date)
            //si non : passer à la date suivante
                // ...
//arrêter de passer à la date suivante lorsqu'on a x dates dans array