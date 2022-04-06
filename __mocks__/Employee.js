class Employee {
  constructor(name = "") {
    this.name = name;
    this.id = Math.floor(Math.random() * 10 + 3);
    this.email = email;
    this.role = role;
  }

  getName() {
    if (this.name === "") {
      return false;
    }
    return true;
  }

  getId() {
    return `${this.name}'s employee ID is ${this.id}`;
  }

  getEmail() {
    return `${this.name}'s email is ${this.email}`;
  }

  getRole() {
    return `${this.name} is a ${this.role}`;
  }
}

module.exports = Employee;
