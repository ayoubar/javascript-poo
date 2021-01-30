/*
// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());
*/

// ES5 syntax

// decalartion de la class
function Voiture(marque, model, couleur, matricule = 'TEST') {
  // definition des attributes / ou des proprietés
  this.marque = marque;
  this.model = model;
  this.couleur = couleur;
  this.matricule = matricule;
}

Voiture.prototype.getFullDescription = function () {
  console.log(`description
      marque : ${this.marque}
      model: ${this.model}
      couleur: ${this.couleur}
      matricule: ${this.matricule}
  `);
};

Voiture.prototype.changeModel = function (m) {
  this.model = m;
};

// getter
Voiture.prototype.getMarque = function () {
  return this.marque;
};

// setter
Voiture.prototype.setMarque = function (m) {
  this.marque = m;
};

Voiture.prototype.balabla = function () {
  console.log('bla nla');
};

//instancier des objets
let voiture1 = new Voiture('BMW', 'x5', 'noir', 'AA-123-AA');
let voiture2 = new Voiture('Merecedes', 'cls 350', 'noir');

voiture1.getFullDescription();
voiture1.changeModel('X3');
voiture1.balabla();

voiture1.model = 'ZADAZDAZ';
console.log(voiture1);
// voiture2.getFullDescription();

// console.log('avant changement  du model', voiture1);

// voiture1.model = 'X6'; // changer le model
// voiture1.couleur = 'rouge';
// voiture1.matricule = 'DEZDEZDEZ';
// console.log('aprés changement du  model', voiture1);

// console.log(voiture2);

/*
  Le JavaScript est un langage orienté objet à prototype

*/

// let somme = function (a, b) {
//   return a + b;
// };

// function somme1(a,b) {
//   return a+b
// }

// console.log(somme(2, 3));
