const Employee = require("../__mocks__/Employee");

test("Create a employee object", () => {
  const employee = new Employee("Manager", "Sara");
  expect(employee.title).toBe("Manager");
  expect(employee.name).toBe("Sara");
});
