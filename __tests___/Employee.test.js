const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

// Making employeeResult global

const employeeResult = {
  name: "Sara",
  id: "12343",
  email: "sara@hello.com",
  role: "Employee",
};

describe("Employee Class", () => {
  test("Create a employee object", () => {
    const employee = new Employee(employeeResult);
    expect(typeof employee).toBe("object");

    // Can set name via constructor arguments
    expect(employee.name).toBe("Sara");
    expect(employee.id).toBe("12343");
    expect(employee.email).toBe("sara@hello.com");
    expect(employee.role).toBe("Employee");
  });

  // Test the Employee's name
  describe("Employee Name", () => {
    test("Test the employee name via constructor arguments", () => {});
    const employee = new Employee(employeeResult);
    expect(employee.name).toBe("Sara");
  });

  // Test the Employee's ID
  describe("Employee ID", () => {
    test("Can set id via constructor argument", () => {
      const employee = new Employee(employeeResult);
      expect(employee.id).toBe("12343");
    });
  });

  // Test the Employee's email
  describe("Employee Email", () => {
    test("Can set email via constructor argument", () => {
      const employee = new Employee(employeeResult);
      expect(employee.email).toBe("sara@hello.com");
    });
  });
});
