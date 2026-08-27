class Spacecraft {
  constructor(name, crew) {
    this.name = name;
    this._crew = crew;
  }
  launch() {
    return `${this.name} is launching with ${this._crew} crew members.`;
  }
}

class CargoShip extends Spacecraft {
  constructor(name, crew, cargoCapacity) {
    super(name, crew);
    this.cargoCapacity = cargoCapacity;
  }
  loadCargo(amount) {
    return `${this.name} is loading ${amount} tons of cargo.`;
  }
  launch() {
    return `${this.name} is launching with ${this.cargoCapacity} tons of cargo space.`;
  }
}

const explorer = new Spacecraft("Explorer One", 5);
const hauler = new CargoShip("Galactic Hauler", 8, 300);

console.log(explorer.launch());
console.log(hauler.launch());
console.log(hauler.loadCargo(120));
/*
  Your Task:
  In the comment block below, explain where you see:
  1. Encapsulation - in both parent and child class, there are specific functions for these classes
  private _crew porperty
  2. Inheritance - creating a child class
  3. Abstraction - launching hauler - launch wasnt defined in this class
  4. Polymorphism - explorer and hauler respond to launc different way
*/