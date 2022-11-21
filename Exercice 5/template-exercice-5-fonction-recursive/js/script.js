let array = [1,2,3,4,5]

//-------------------- ETAPE 1

function sum1(){
    //prend un tableau d’entiers (array) à additionner entre eux
    let sum = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return sum;
}

console.log(sum1())

//-------------------- ETAPE 2

function sum2(array){
    //prend un tableau d’entiers (array) à additionner entre eux avec une fonction récursive
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + sum2(array.slice(1));
        //slice(1) : enlève le premier élément de array (donc 1, puis 2, puis 3...)
    }
}

console.log(sum2(array))
/*par exemple :
sum([1,2,3])
-> 1 + sum([2,3])
-> 1 + 2 + sum([3])
-> 1 + 2 + 3 + sum([])
-> 1 + 2 + 3 + 0
-> 6 */

//-------------------- ETAPE 3

function factorial(integer){
    //calcule le factoriel de "integer" récursivement
    //ce qui donne : integer * (integer - 1) * ((integer - 1)-1) * etc.
    if (integer === 0){
        return 1;
    } else {
        return integer * factorial(integer-1);
    }
}

console.log(factorial(6))

//-------------------- ETAPE 4

function fibonacci(x){
    //0, 1, 1 (0+1), 2 (1+1), 3 (1+2), 5 (2+3), 8 (3+5), 13 (5+8), 21 (8+13) et 34 (13+21)
    if (x<2){
        return 1;
        // signifie que f(0)=1 et f(1)=1
    } else {
        return fibonacci(x-1) + fibonacci(x-2);
        // par exemple f(8) = f(7) + (f(6);  
        // puis f(8) = f(f(6)+f(5)) + f(f(5)+f(4))
        // etc. jusqu'à f(1) qui retourne 1 et arrête l'appel de la fonction
    }
}

console.log(fibonacci(5))
// 5 (x) = pour trouver le 5e (xe) terme de la suite de Fibonacci commençant par 1


/*-----2 versions avec une boucle for

--V1

const n = 4
const fibo = new Array(n)

fibo[0] = 0
fibo[1] = 1

for (let i = 2; i < n; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2]
}

console.log(fibo)

/*
--V2

function fibonacci(nbr) {
    var n1 = 0;
    var n2 = 1;
    var somme = 0;
  
    for(let i = 2; i <= nbr; i++){
       //somme des deux derniers nombres
       somme = n1 + n2; 
       //assigner la dernière valeur à la première
       n1 = n2; 
       //attribuer la somme au dernier
       n2 = somme; 
    }
  
    return nbr ? n2 : n1;
 }
 console.log(fibonacci(8));

 */