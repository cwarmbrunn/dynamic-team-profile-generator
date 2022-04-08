const Manager = require("../lib/Manager.js");

// Making managerResult global
const managerResult = {
  name: "Artemis",
  id: "43223",
  email: "artemis@hello.com",
  role: "Manager",
  officeNumber: "1001",
};

describe("Manager Class", () => {
  test("Create a manager object", () => {
    const manager = new Manager(managerResult);
    expect(typeof manager).toBe("object");
    expect(manager.name).toBe("Artemis");
    expect(manager.id).toBe("43223");
    expect(manager.email).toBe("artemis@hello.com");

    // getRole() should return Manager
    expect(manager.role).toBe("Manager");

    // Can get office number via getOffice()
    expect(manager.officeNumber).toBe("1001");
  });

  // Test the manager's name
  describe("Test the name for the manager - should be a string", () => {
    test("Have a valid manager name", () => {
      const manager = new Manager(managerResult);
      expect(manager.name).toBe("Artemis");
    });
  });

  // Test the manager's employee ID
  describe("Test the manager's employee ID - should be a number", () => {
    test("Have a valid employee ID", () => {
      const manager = new Manager(managerResult);
      expect(manager.id).toBe("43223");
    });
  });

  // Test the manager's email
  describe("Test the manager's email - should be a string", () => {
    test("Have a valid email", () => {
      const manager = new Manager(managerResult);
      expect(manager.email).toBe("artemis@hello.com");
    });
  });

  // Test the manager's role
  describe("Test the manager's role - should be Manager", () => {
    test("Have the role be Manager", () => {
      const manager = new Manager(managerResult);
      expect(manager.role).toBe("Manager");
    });
  });

  // Test the office Number
  describe("Test the manager's office number - should be a number", () => {
    test("Have the office number run", () => {
      const manager = new Manager(managerResult);
      expect(manager.officeNumber).toBe("1001");
    });
  });
});
