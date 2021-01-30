//Object.prototype
//Person.prototype

/*
// Person constructor
function Person(firstName, lastName, dob) {
  // dob : date of birth
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff =  Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMaried = function (newLastName) {
  this.lastName = newLastName;
};

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMaried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));
*/

function Person(nom, prenom, age) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  // this.salut = function () {
  //   console.log(`hello i'm ${this.nom}`);
  // };
}

Person.prototype.salut = function () {
  console.log(`hello i'm ${this.nom}`);
};

// methode pour changer l'age
Person.prototype.changeAge = function (a) {
  this.age = a;
};

// methode pour changer nom et prenom
Person.prototype.changeNomPrenom = function (nom, prenom) {
  this.nom = nom;
  this.prenom = prenom;
};

// method pour calculer année de naissance
Person.prototype.calculAnneeNaissance = function () {
  today = new Date().getFullYear();
  return today - this.age;
};

// instancier des objets
let nawfel = new Person('trump', 'nawfel', 24);
let anass = new Person('Beiden', 'anass', 30);

nawfel.salut();
anass.salut();

nawfel.changeAge(20);
nawfel.cin = 'EZAEAZEAZ';
nawfel.changeNomPrenom('Nouri', 'nawfel');
console.log(nawfel);
console.log(nawfel.calculAnneeNaissance());
console.log(anass.calculAnneeNaissance());

console.log(nawfel.hasOwnProperty('nom'));
