var Animal = /** @class */ (function () {
    function Animal(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " says : ").concat(this.sound, " "));
    };
    return Animal;
}());
var dog = new Animal("German shepard", "dog", "ghew ghew");
dog.makeSound();
