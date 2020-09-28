class User {
  constructor(name, email, accountBalance) {
    this.name = name;
    this.email = email;
    this.accountBalance = accountBalance;
  }
  makeDeposit(amount) {
    this.accountBalance += amount;
  }
  makeWithdraw(amount) {
    this.accountBalance -= amount;
  }
  display() {
    console.log(
      "the user name is: " +
        this.name +
        "  ,and the Balance is: " +
        this.accountBalance
    );
  }
  transfer(amount, from, to) {
    from.accountBalance -= amount;

    to.accountBalance += amount;
    console.log(
      from.name +
        " transfered money to " +
        to.name +
        " and the account balance now is " +
        from.accountBalance
    );
    console.log(to.name + " account balance now is: " + to.accountBalance);
  }
}
const user1 = new User("Rasha Zayed", "abc.gmail.com", 2000);
const user2 = new User("Nuha Sadek", "fgh.outlook.com", 5000);
const user3 = new User("Ahmed Adel", "mnk@gmail.com", 8000);

user1.makeDeposit(1000);
user1.makeDeposit(500);
user1.makeDeposit(500);
user1.makeWithdraw(800);
user1.display();

user2.makeDeposit(300);
user2.makeDeposit(700);
user2.makeWithdraw(100);
user2.makeWithdraw(400);
user2.display();

user3.makeDeposit(2000);
user3.makeWithdraw(500);
user3.makeWithdraw(800);
user3.makeWithdraw(200);
user3.display();

user1.transfer(500, user1, user3);
