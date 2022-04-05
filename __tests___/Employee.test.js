test("Create a employee object", () => {
  const employee = new Employee("Dave");
  expect(employee.name).toBe("Dave");
});
