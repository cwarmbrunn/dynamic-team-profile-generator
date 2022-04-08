const Manager = require("../lib/Manager.js");

describe("Manager Class", () => {
  test("Create a manager object", () => {
    const managerResult = {
      name: "Artemis",
      id: "43223",
      email: "artemis@hello.com",
      role: "Manager",
      officeNumber: "1001",
    };

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
  describe("Test the name for the manager - should be a string", () => {
    test("Have a valid manager name", () => {
      expect(manager.name).toBe("Artemis");
    });
  });
  describe("Test the manager's employee ID - should be a number", () => {
    test("Have a valid employee ID", () => {
      expect(manager.id).toBe("43223");
    });
  });
});
