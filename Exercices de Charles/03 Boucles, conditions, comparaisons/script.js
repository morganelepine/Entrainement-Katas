//---------------EX 01

const generateString = num => {
    let str = "";
    for (let i=0; i<num; i++){
        str = str + "-"
    }
    return str;
  };
  
  console.log(generateString(1)); // Doit afficher `-`
  console.log(generateString(2)); // Doit afficher `--`
  console.log(generateString(4)); // Doit afficher `----`
  console.log(generateString(19)); // Doit afficher `-------------------`


//---------------EX 02

const generateStr = num => {
    let str = "";
    for (let i=0; i<num; i++){
        str = str + "-"
    }
    str = str + "o"
    return str;
};

console.log(generateStr(1)); // Doit afficher `o`
console.log(generateStr(2)); // Doit afficher `-o`
console.log(generateStr(4)); // Doit afficher `---o`
console.log(generateStr(19)); // Doit afficher `------------------o`


//---------------EX 03

console.log("o---o\n|   |\no---o");

// En testant ce script, vous pourrez constater que la combinaison `\n` 
// déclenche un retour à la ligne


//---------------EX 04

/*
  L'objectif de cet exercice est d'afficher "o---o" sur plusieurs lignes.
  Exemple si `height` vaut 4 :
  o---o
  o---o
  o---o
  o---o
*/

const generateStrings = height => {
    let str = ""
    for (let i=0; i<height; i++){
        str = str + "o---o" + "\n"
    }
    return str
}
const height = 4;
console.log(generateStrings(height));


//---------------EX 05

/*
  L'objectif de cet exercice est d'afficher les 3 lignes de 5 caractères
  suivantes :
  -----
  -----
  -----
*/

/*
  Aide :
  Vous aurez besoin de créer une boucle dans une boucle et d'utiliser '\n'
  pour déclencher des retours à la ligne
*/

const genString = (height, width) => {
    let str = "";
    for (let i=0; i<height; i++){
        for (let j=0; j<width; j++){
            str = str + "-"
        }
        str = str + "\n"
    }  
    return str;
  };
  
  const hauteur = 3;
  const width = 5;
  console.log(genString(hauteur, width));