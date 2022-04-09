const Employee = require(".//Employee");

class Intern extends Employee {
  constructor(info) {
    super(info);

    // Sets up the following object to equal info
    const { name, id, email, role, school } = info;

    // Set up name
    this.name = name;

    // Set up id
    this.id = id;

    // Set up email
    this.email = email;

    // Set up role
    this.role = role;

    // Set up school
    this.school = school;
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
    // If role is NOT intern - console.log the following and return false
    if (this.role != "Intern") {
      console.log("This employee is not an intern!");
      return false;
    } else {
      console.log(`${this.name}'s role is ${this.role}`);
      return true;
    }
  }
  // Get school of employee
  getSchool() {
    // If school is blank - console.log the following and return false
    if (this.school === "") {
      console.log("This is not a valid school!");
      return false;
    } else {
      console.log(`${this.name} attended/is attending ${this.school}`);
    }
  }
}

module.exports = Intern;
