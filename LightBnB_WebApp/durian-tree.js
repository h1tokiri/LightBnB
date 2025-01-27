class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }
  get numberOfSubordinates() {
    return this.subordinates.length;
  }
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }
    return numberOfPeople;
  }
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
  employeesThatMakeOver(amount) {
    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }
    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }
    return employees;
  }
  get totalEmployees () {
    let totalEmployees = 1; // 1
    // use depth first traversal to calculate the total employees

    this.subordinates.forEach(subordinate => {
      totalEmployees += subordinate.totalEmployees;
    });
    return totalEmployees;
  }
}

const ada = new Employee ("Ada", "CEO", 1000000000.00);

const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

const simone   = new Employee("Simone", "Software Engineer", 100000);
const ali      = new Employee("Ali", "Software Engineer", 100000);
const sarah    = new Employee("Sarah", "Software Dev", 60000);
const andrew   = new Employee("Andrew", "DevOps", 70000);

const florida  = new Employee("Florida", "Social Media Specialist", 50000);
const david    = new Employee("David", "Business Leads Generator", 80000);
const brian    = new Employee("Brian", "Industry Engagement Officer", 900000);
const emma     = new Employee("Emma", "Marketing Intern", 20000);
const jeremy   = new Employee("Jeremy", "Marketing Intern", 20000);

const karia    = new Employee("Karia", "Retail Operations Specialist", 100000);
const chandler = new Employee("Chandler", "Retail Ops Support", 60000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

angela.addSubordinate(karia);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

ali.addSubordinate(sarah);
ali.addSubordinate(andrew);

david.addSubordinate(emma);
david.addSubordinate(jeremy);

karia.addSubordinate(chandler);

console.log(craig.boss.name);
console.log(craig.numberOfSubordinates);
console.log(craig.numberOfPeopleToCEO);

let wealthyEmployees = ada.employeesThatMakeOver(418401);

console.log(ada.employeesThatMakeOver(418401));
console.log(ada.totalEmployees); // Returns the total number of employees in the entire company.
console.log(craig.totalEmployees); // Returns the total number of employees working in software development.