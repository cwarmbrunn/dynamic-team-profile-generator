const Employee = require(".//Employee");

class Intern extends Employee {
  constructor(info) {
    super(info);

    const { name, id, email, role, school } = info;
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.school = school;
  }

  getRole() {
    if (this.role != "Intern") {
      console.log("This employee is not an intern!");
      return false;
    } else {
      console.log(`${this.name}'s role is ${this.role}`);
      return true;
    }
  }

  getSchool() {
    if (this.school === "") {
      console.log("This is not a valid school!");
      return false;
    } else {
      console.log(`${this.name} attended/is attending ${this.school}`);
    }
  }
}

module.exports = Intern;
