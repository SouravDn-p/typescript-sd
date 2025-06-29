class Parent {
  name: string;
  age: number;
  role: number;

  constructor(name: string, age: number, role: number) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  makeSleep(hours: number): string {
    return `${this.name} ages : ${hours} `;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, role: number) {
    super(name, age, role);
  }
}

class Teacher extends Parent {
  address: string;
  designation: string;

  constructor(
    name: string,
    age: number,
    role: number,
    address: string,
    designation: string
  ) {
    super(name, age, role);
    this.address = address;
    this.designation = designation;
  }

  takeClass(NumberClass: number) {
    return `This ${this.name} takes ${NumberClass} number of class`;
  }
}
