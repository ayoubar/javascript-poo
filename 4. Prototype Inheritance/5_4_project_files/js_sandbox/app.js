// Person constructor
/*
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};

console.log(customer1.greeting());
*/
/*
  Inheriatnce \ heritage
*/

// Les administrateurs
// les etudiantes
// les professeurs

function Person(nom, prenom, age, nationalite = 'marocaine') {
  this.nom = nom;
  this.age = age;
  this.prenom = prenom;
  this.nationalite = nationalite;
}

Person.prototype.afficherNomEtPrenom = function () {
  console.log(`je suis ${this.nom} ${this.prenom}`);
};

function Admin(nom, prenom, age, post) {
  Person.call(this, nom, prenom, age); // herité les proprietés
  this.post = post;
}

// Herité les methodes dans le prototype de la class Person ( parent )
Admin.prototype = Object.create(Person.prototype);
Admin.prototype.constructor = Admin;

function Student(nom, prenom, age, CNE) {
  Person.call(this, nom, prenom, age);
  this.CNE = CNE;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function Prof(nom, prenom, age, matiere, echelle) {
  Person.call(this, nom, prenom, age);
  this.matiere = matiere;
  this.echelle = echelle;
}

Prof.prototype = Object.create(Person.prototype);
Prof.prototype.constructor = Prof;

// instancier des objets admin
const admin1 = new Admin('nasa', 'mohammed', 24, 'technicien reseaux');

// instancier des objets student
const student = new Student('alaoui', 'nawfel', 22, 13312312312);

// instancier des objets Prof

const prof1 = new Prof('hachmoud', 'ali', 34, 'physique', 10);

console.log(admin1);
// console.log(student);
// console.log(prof1);

admin1.afficherNomEtPrenom();
student.afficherNomEtPrenom();
prof1.afficherNomEtPrenom();
