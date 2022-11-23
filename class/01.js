class node {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}
const Firoz = new node("Firoz", 24);
Firoz.print();
