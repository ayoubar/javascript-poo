class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Thompson');

console.log(mary);

console.log(Person.addNumbers(1, 2));

// ES6

class Voiture {
  constructor(marque, model, couleur, matricule = 'TEST') {
    // definition des attributes / ou des proprietés
    this.marque = marque;
    this.model = model;
    this.couleur = couleur;
    this.matricule = matricule;
  }

  static PI = 23;

  getFullDescription() {
    console.log(`description
      marque : ${this.marque}
      model: ${this.model}
      couleur: ${this.couleur}
      matricule: ${this.matricule}
  `);
  }

  changeModel(m) {
    this.model = m;
  }

  // getter
  getMarque() {
    return this.marque;
  }

  // setter
  setMarque(m) {
    this.marque = m;
  }

  balabla() {
    console.log('bla nla');
  }

  static methodDeclass() {
    console.log('HELLO');
  }
}

const v = new Voiture('BMW', 'x5', 'noir', 'AA-123-AA');
Voiture.methodDeclass();
console.log(v.PI);
