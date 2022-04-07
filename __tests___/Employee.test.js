const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  test("Create a employee object", () => {
    const employeeResult = {
      name: "Sara",
      id: "12343",
      email: "sara@hello.com",
      role: "Employee",
    };
    const employee = new Employee(employeeResult);
    expect(typeof employee).toBe("Object");
    expect(employee.name).toBe("Sara");
    expect(employee.id).toBe("12343");
    expect(employee.email).toBe("sara@hello.com");
    expect(employee.role).toBe("Employee");
  });
});
