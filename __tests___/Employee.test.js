const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

const employeeResult = {
  name: "Sara",
  id: "1",
  email: "sara@hello.com",
  role: "Employee",
};

test("Create a employee object", () => {
  const employee = new Employee(employeeResult);
  expect(employee.name).toBe("Sara");
  expect(employee.id).toBe("1");
  expect(employee.email).toBe("sara@hello.com");
  expect(employee.role).toBe("Employee");
});
