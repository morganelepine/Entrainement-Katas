function findShort(s){
    s = s.split(' ')
    s.sort((a, b) => a.length - b.length);
    let answer = s[0].length
    return answer
}

console.log(findShort("turns out random test cases are easier than writing out basic ones"))