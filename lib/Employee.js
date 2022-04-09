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
    if (this.role === "") {
      console.log("This employee does not have a valid role!");
      return false;
    } else {
      console.log(`${this.name}'s role is: ${this.role}`);
      return true;
    }
  }
}

module.exports = Employee;
