const Employee = require(".//Employee");

class Engineer extends Employee {
  // getRole() // Overridden to return 'Engineer'
  constructor(info) {
    super(info);

    // Sets up the following object to equal info
    const { name, id, email, role, github } = info;

    // Set up name

    this.name = name;

    // Set up id
    this.id = id;

    // Set up email
    this.email = email;

    // Set up role
    this.role = role;

    // Set up GitHub
    this.github = github;
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
    // If role is NOT engineer - console.log the following and return false
    if (this.role != "Manager") {
      console.log("This employee is not a manager!");
      return false;
    } else {
      console.log(`${this.name}'s role is: ${this.role}`);
      return true;
    }
  }
  // get GitHub account
  getgitHub() {
    // If github is blank - console.log the following and return false
    if (this.github === "") {
      console.log("There is no input gitHub account!");
      return false;
    } else {
      console.log(
        `${this.name} is a ${this.role} and their GitHub account is: ${this.github} `
      );
      return true;
    }
  }
}
// Export Engineer
module.exports = Engineer;
