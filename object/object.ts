class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`${this.name} says : ${this.sound} `);
  }
}

const dog = new Animal("German shepard", "dog", "ghew ghew");
dog.makeSound();
