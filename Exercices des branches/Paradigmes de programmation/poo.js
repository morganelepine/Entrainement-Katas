//CONSTRUCTEUR : une fonction ou une classe

//Version fonction
function Person(surname, name, age){
	//Attributs du constructeur
			this.surname = surname;
			this.name= name;
			this.age = age;
}

//OBJETS
let user1 = new Person("Agathe", "Sorlet", 30)
let user2 = new Person("Arthur", "Montagne", 34)

user1.age = 28
console.log(user1)

//Version classe
class Pet{
	constructor(name, type, owner){
			this.name = name;
			this.type = type;
			this.owner = owner;
	}
	//Fonction-méthode propre au constructeur
	get relation() {
		return this.relationPetOwner();
	}
	relationPetOwner() {
		return this.name + " is " + this.owner.surname + "'s " + this.type
	}
}

//OBJETS
let pet = new Pet("Kiwi", "cat", user2)
console.log(pet.owner.surname) //Arthur
console.log(pet.relationPetOwner()) //Kiwi is Arthur's cat
console.log(pet.relation) //Kiwi is Arthur's cat