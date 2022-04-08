const Employee = require(".//Employee");

class Manager extends Employee {
  //getRole() // Overridden to return 'Manager'
  constructor(info) {
    super(info);
    // Sets up the following object to equal info
    const { name, id, email, role, officeNumber } = info;

    // Set up name
    this.name = name;

    // Sets up id
    this.id = id;

    // Sets up email
    this.email = email;

    // Sets up role
    this.role = role;

    // Sets up an office number for the manager
    this.officeNumber = officeNumber;
  }

  getName() {
    if (this.name === "") {
      console.log("This is not a valid employee!");
      return false;
    } else {
      console.log(`${this.name} works here!`);
      return true;
    }
  }

  getId() {
    if (this.id === "") {
      console.log("This is not a valid employee ID!");
      return false;
    } else {
      console.log(`${this.name}'s employee ID is: ${this.id}`);
      return true;
    }
  }

  getEmail() {
    if (this.email === "") {
      console.log("This is not a valid employee email!");
      return false;
    } else {
      console.log(`${this.name}'s work email is: ${this.email}`);
      return true;
    }
  }

  getRole() {
    if (this.role != "Manager") {
      console.log("This employee is not a manager!");
      return false;
    } else {
      console.log(`${this.name}'s role is: ${this.role}`);
      return true;
    }
  }
  getDescription() {
    return `${this.name}'s employee ID is ${this.id}. Their email address is ${this.email} and their role is ${this.role}`;
  }

  getOfficeNumber() {
    if (this.officeNumber === "") {
      console.log("There is no office number!");
      return false;
    } else {
      console.log(
        `${this.name} is a ${this.role} and their office number is: ${this.officeNumber} `
      );
      return true;
    }
  }
}

module.exports = Manager;
