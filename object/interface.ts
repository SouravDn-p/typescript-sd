// interface IVehicle {
//     make: string;
//     name: string;
//     model: string;
// }

// const vehicle: IVehicle = {
//     make: "Toyota",
//     name: "Corolla",
//     model: "2023"
// };

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  drive(): void;
}

abstract class vehicle implements IVehicle {
  constructor(public name: string, public make: string, public model: string) {}

  abstract startEngine(): void;
  abstract stopEngine(): void;

  drive(): void {
    console.log("Vehicle is driving");
  }

  test(): void {
    console.log("Testing vehicle interface implementation");
  }
}

// const myVehicle = new vehicle();
class Car extends vehicle {
  startEngine(): void {
      throw new Error("Method not implemented.");
  }
  stopEngine(): void {
      throw new Error("Method not implemented.");
  }
  constructor(name: string, make: string, model: string) {
    super(name, make, model);
  }

  drive(): void {
    console.log(`${this.name} is driving`);
  }
}