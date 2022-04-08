const Intern = require("../lib/Intern");

// Making internResult global
const internResult = {
  name: "Juno",
  id: "45312",
  email: "juno@hello.com",
  role: "Intern",
  school: "Michigan State University",
};

describe("Intern Class", () => {
  test("Create an intern object", () => {
    const intern = new Intern(internResult);
    expect(typeof intern).toBe("object");
    expect(intern.name).toBe("Juno");
    expect(intern.id).toBe("45312");

    // getRole() should return Intern
    expect(intern.role).toBe("Intern");

    // Can get intern school from getSchool()
    expect(intern.school).toBe("Michigan State University");
  });

  describe("Intern Role", () => {
    test("Have an Intern role", () => {
      const intern = new Intern(internResult);
      expect(intern.role).toBe("Intern");
    });
  });

  // Test Intern's school
  describe("Intern's School", () => {
    test("Have school listed", () => {
      const intern = new Intern(internResult);
      expect(intern.school).toBe("Michigan State University");
    });
  });
});
