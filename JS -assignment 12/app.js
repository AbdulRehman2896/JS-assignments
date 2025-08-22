// Simple Bank Account Class
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
    } else {
      console.log("Deposit amount must be positive!");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}. Remaining Balance: ${this.balance}`);
    } else {
      console.log("Invalid withdrawal amount!");
    }
  }

  checkBalance() {
    console.log(`Account Balance: ${this.balance}`);
    return this.balance;
  }
}


const account = new BankAccount("Ali", 1000);
account.deposit(500);
account.withdraw(300);
account.checkBalance();


//  Todo List Class
class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log(`Task Added: "${task}"`);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      console.log(`Task Removed: "${task}"`);
    } else {
      console.log(`Task "${task}" not found!`);
    }
  }

  listTasks() {
    console.log("Todo List:");
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

const myTodos = new TodoList();
myTodos.addTask("Study JavaScript");
myTodos.addTask("Do homework");
myTodos.listTasks();
myTodos.removeTask("Do homework");
myTodos.listTasks();


// Class Hierarchy for School
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
}


const student = new Student("Ayesha", 16, 10);
student.introduce();
student.study();

const teacher = new Teacher("Mr. Ahmed", 40, "Mathematics");
teacher.introduce();
teacher.teach();

