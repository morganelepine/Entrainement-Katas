const sentence = "Snobs aptes et pas bons";
const message = "Vous êtes toustes des truffes";
const forbiddenWords = ["truffe", "truffes"];

function isPalindrome(sentence){
    sentence = sentence.toLowerCase().split(' ').join("");
    const reversedSentence = sentence.toLowerCase().split('').reverse().join('');
    const result = reversedSentence === sentence;
    return result;
}

function containsForbiddenWords(message){
    const messageWords = message.split(' ');
    let detectedForbiddenWords = [];
    for (let word of messageWords){
        if (forbiddenWords.includes(word)) {
            detectedForbiddenWords.push(word);
        }
    }
    if (detectedForbiddenWords.length > 0) {
        return true;
    }
    return false;
}

module.exports = {
    sentence,
    message,
    forbiddenWords,
    isPalindrome,
    containsForbiddenWords
}