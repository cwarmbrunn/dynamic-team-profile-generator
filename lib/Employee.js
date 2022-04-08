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
    if (this.role === "") {
      console.log("This employee does not have a valid role!");
      return false;
    } else {
      console.log(`${this.name}'s role is: ${this.role}`);
      return true;
    }
  }
  getDescription() {
    return `${this.name}'s employee ID is ${this.id}. Their email address is ${this.email} and their role is ${this.role}`;
  }
}

const christina = new Employee(
  "Christina",
  112124124,
  "christina@me.com",
  "Manager"
);

christina.getDescription();
module.exports = Employee;
