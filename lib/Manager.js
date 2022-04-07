const Employee = require(".//Employee");

class Manager extends Employee {
  //getRole() // Overriden to return 'Manager'
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

    this.officeNumber = officeNumber;
  }
}
