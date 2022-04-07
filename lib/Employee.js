// Set up Employee class
class Employee {
  // Sets up constructor with a parameter of info
  constructor(info) {
    // Sets up the following object to equal info
    const { name, id, email, role } = info;

    // Set up name
    this.name = name;

    // Sets up id
    this.id = id;

    // Sets up email
    this.email = email;

    // Sets up role
    this.role = role;
  }

  // get
  getName() {
    if (this.name === "") {
      return false;
    }
    return true;
  }

  getId() {
    if (this.id === "") {
      return false;
    }
    return true;
  }

  getEmail() {
    if (this.email === "") {
      return false;
    }
    return true;
  }

  getRole() {
    if (this.role === "") {
      return false;
    }
    return true;
  }
  getDescription() {
    return `${this.name}'s employee ID is ${this.id}. Their email address is ${this.email} and their role is ${this.role}`;
  }
}

module.exports = Employee;
