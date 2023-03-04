const checkNums = (num1,num2) => {
    if (num1 < num2){
        return "num1 est inférieur à num2"
    } else if (num1 === num2){
        return "num1 et num2 sont équivalents"
    } else {
        return "num1 est supérieur à num2"
    }
}
console.log(checkNums(3,122))
console.log(checkNums(67,67))