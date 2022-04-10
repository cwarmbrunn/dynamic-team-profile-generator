const Employee = require(".//Employee");

class Manager extends Employee {
  //getRole() // Overridden to return 'Manager'
  constructor(info) {
    super(info);
    // Sets up the following object to equal info
    const { name, id, email, officeNumber } = info;

    // Set up name
    this.name = name;

    // Sets up id
    this.id = id;

    // Sets up email
    this.email = email;

    // Sets up role
    this.role = "Manager";

    // Sets up an office number for the manager
    this.officeNumber = officeNumber;
  }

  // Get name of employee
  getName() {
    // If name is blank - console.log the following and return false
    if (this.name === "") {
      console.log("This is not a valid employee!");
      return false;
    } else {
      console.log(`${this.name} works here!`);
      return true;
    }
  }

  // Get ID of employee
  getId() {
    // If ID is blank - console.log the following and return false
    if (this.id === "") {
      console.log("This is not a valid employee ID!");
      return false;
    } else {
      console.log(`${this.name}'s employee ID is: ${this.id}`);
      return true;
    }
  }
  // Get email of employee
  getEmail() {
    // If email is blank - console.log the following and return false
    if (this.email === "") {
      console.log("This is not a valid employee email!");
      return false;
    } else {
      console.log(`${this.name}'s work email is: ${this.email}`);
      return true;
    }
  }
  // Get role of employee
  getRole() {
    // If role is NOT manager - console.log the following and return false
    if (this.role != "Manager") {
      console.log("This employee is not a manager!");
      return false;
    } else {
      console.log(`${this.name}'s role is: ${this.role}`);
      return true;
    }
  }
  // get office number of manager
  getOfficeNumber() {
    // If office number is blank - console.log the following and return false
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
// Export Manager
module.exports = Manager;
