class BankAccount1 {
  public readonly id: number;
  protected name: string;
  private balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  // Getter for balance
  get _balance(): number {
    return this.balance;
  }

  //setter for balance
  set set_balance(value: number) {
    this.balance = value;
  }

  getBalance(): void {
    console.log("my current balance is: ", this.balance);
    // return this.balance;
  }

//   addDeposit(amount: number): void {
//     this.balance += amount;
//   }
}

class student1 extends BankAccount1 {
  constructor(id: number, name: string, balance: number) {
    super(id, name, balance);
  }
  test() {
    // This is allowed as balance is private but accessible within the class
    console.log(this.getBalance());
  }
}

const myAccount1 = new BankAccount1(1, "Sourav", 1000);
// This is allowed as balance is public
// myAccount.balance = 2000;
console.log(myAccount1);

myAccount1.set_balance = 2; // Using setter to update balance)
console.log(myAccount1._balance); // Accessing balance through getter
