class BankAccount {
  public readonly id: number;
  protected name: string;
  private balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  getBalance(): void {
    console.log("my current balance is: ", this.balance);
    // return this.balance;
  }
  addDeposit(amount: number): void {
    this.balance += amount;
  }
}

class student extends BankAccount {
  constructor(id: number, name: string, balance: number) {
    super(id, name, balance);
  }
  test() {
    // This is allowed as balance is private but accessible within the class
    console.log(this.getBalance());
  }
}

const myAccount = new BankAccount(1, "Sourav", 1000);
// This is allowed as balance is public
// myAccount.balance = 2000;
console.log(myAccount);
