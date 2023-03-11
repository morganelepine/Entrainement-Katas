const app = require('../app.js');

//describe() pour définir un scénario -> ce que doit faire le test
//it() ou test() pour décrire un test
//it.todo pour se rappeler des tests à mettre en place
//expect() pour gérer les assertions -> on s'attend à ce que quelque chose s'applique à une certaine condition (toEqual par exemple)

describe('Palindrom', () => {
    it('should retrieve a sentence', () => {
        expect(app.sentence.length).toBeGreaterThan(0);
        // APP doit avoir une variable SENTENCE qui a une LONGUEUR supérieure à 0
    });
    it('should be a palindrome', () => {
        expect(app.isPalindrome(app.sentence)).toEqual(true);
    });
    it('should NOT be a palindrom', () => {
        expect(app.isPalindrome("azerty")).toEqual(false);
    });
});

describe('Moderator', () => {
    it('contains forbidden words', () => {
        expect(app.containsForbiddenWords(app.message)).toEqual(true);
    });
    it.todo('remove forbidden words');
})