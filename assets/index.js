class Person {
  constructor(nome, età) {
    this.name = nome;
    this.age = età;
  }

  Maggiore(ageA, ageB) {
    if (ageA > ageB) {
      return this.name + "" + "E' più vecchio di" + " " + ageB + "anni";
    } else {
      return this.name + "" + "E' più giovane di" + " " + ageB + "anni";
    }
  }
}

let persone = [
  new Person("Filippo", 16),
  new Person("Luca", 30),
  new Person("Grazia", 19),
];

let piuVecchio = function () {
  for (let i = 0; i < persone.length; i++) {
    console.log(persone[i].Maggiore(persone[i].age, 18));
  }
};
console.log(piuVecchio());
