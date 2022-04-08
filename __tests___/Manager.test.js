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

    // describe("Test the name for the manager - should be a string", () => {
    //   test("Have a valid manager name", () => {
    //     expect(manager.name).toBe("Artemis");
    //   });
    // });
    const manager = new Manager(managerResult);
    expect(typeof manager).toBe("object");
    expect(manager.name).toBe("Artemis");
    expect(manager.id).toBe("43223");
    expect(manager.email).toBe("artemis@hello.com");
    expect(manager.role).toBe("Manager");
    expect(manager.officeNumber).toBe("1001");
  });
});
