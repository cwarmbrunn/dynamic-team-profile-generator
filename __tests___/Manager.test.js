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
  // Test the manager's role
  describe("Manager Role", () => {
    test('getRole() should return "Manager"', () => {
      const manager = new Manager(managerResult);
      expect(manager.role).toBe("Manager");
    });
  });

  // Test the office Number
  describe("Manager Office Number", () => {
    test("Can get office number via getOfficeNumber()", () => {
      const manager = new Manager(managerResult);
      expect(manager.officeNumber).toBe("1001");
    });
  });
});
