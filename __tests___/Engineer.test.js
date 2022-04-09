const Engineer = require("../lib/Engineer");

// Making engineerResult global

const engineerResult = {
  name: "Athena",
  id: "12124",
  email: "athena@hello.com",
  role: "Engineer",
  github: "athena",
};

describe("Engineer Class", () => {
  test("Create an engineer object", () => {
    const engineer = new Engineer(engineerResult);
    expect(typeof engineer).toBe("object");
    expect(engineer.name).toBe("Athena");
    expect(engineer.id).toBe("12124");
    expect(engineer.email).toBe("athena@hello.com");

    // getRole() should return Engineer
    expect(engineer.role).toBe("Engineer");

    // Can get gitHub information via getGithub()
    expect(engineer.github).toBe("athena");
  });

  describe("Engineer GitHub", () => {
    test("Have a valid GitHub", () => {
      const engineer = new Engineer(engineerResult);
      expect(engineer.github).toBe("athena");
    });
  });

  describe("Engineer Role", () => {
    test("Have Engineer Role", () => {
      const engineer = new Engineer(engineerResult);
      expect(engineer.role).toBe("Engineer");
    });
  });
});
