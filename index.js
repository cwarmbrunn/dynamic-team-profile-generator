// This is where the application will run
// Use the command "node index.js" to begin!

// Set up a global variable for data
// This will be where user input is stored and then called for generating the HTML
const data = {
  // Manager Data - Name
  managerName: "",

  // Manager Data - ID
  managerId: "",

  // Manager Data - Email
  managerEmail: "",

  // Manager Data - Office
  managerOffice: "",

  // Team Data - Intern and Engineer Data Below
  team: [
    {
      // Engineer Data Will Go Here
    },
    {
      // Intern Data Will Go Here
    },
  ],
};
// Set up Inquirer requirement
const inquirer = require("inquirer");

const { writeFile } = require("./src/template.js");

// Grants access to the file system functionality
const fs = require("fs");
const { number } = require("yargs");
const { create } = require("domain");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      // Question #1 - Manager Name
      type: "input",
      name: "managerName",
      message: "Enter the manager's name (Required):",

      // Validation
      validate: (managerName) => {
        if (managerName) {
          return true;
        } else {
          console.log("Please enter the manager's name!");
          return false;
        }
      },
    },

    // Question #2 - Manager Employee ID
    {
      type: "input",
      message: "Please enter the manager's Employee Id (Numbers ONLY!):",
      name: "managerId",
      validate: (managerId) => {
        if (isNaN(managerId) || !managerId) {
          return "Please enter a number - delete your entry with the backspace key and try again";
        }
        return true;
      },
    },

    // Question #3 - Manager Email Address
    {
      type: "input",
      name: "managerEmail",
      message: "Enter the manager's email address (Required):",

      // Validation
      validate: (managerEmail) => {
        if (managerEmail) {
          return true;
        } else {
          console.log("Please enter the manager's email address!");
          return false;
        }
      },
    },

    // Question #4 - Manager Office Number
    {
      type: "input",
      message: "Please enter the manager's office number (Numbers ONLY!):",
      name: "managerOffice",
      validate: (managerOffice) => {
        if (isNaN(managerOffice) || !managerOffice) {
          return "Please enter a number - delete your entry with the backspace key and try again";
        } else {
          return true;
        }
      },
    },
  ]);
};

const createTeam = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "nextSteps",
        message: "What do you want to do now?",
        choices: ["Add an Engineer", "Add an Intern", "Done with my Team"],
      },
    ])
    .then((userSelection) => {
      if (userSelection.nextSteps === "Add an Engineer") {
        getEngineer();
      } else if (userSelection.nextSteps === "Add an Intern") {
        getIntern();
      } else if (userSelection.nextSteps === "Done with my Team") {
        endPrompt(data);
      }
    });
};

// Function to getEngine
const getEngineer = () => {
  return (
    inquirer
      .prompt([
        // Question #1 - Engineer #1 Name
        {
          type: "input",
          name: "engineerName",
          message: "Enter the engineer's name (Required):",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the engineer's name!");
              return false;
            }
          },
        },

        // Question #2 - Engineer #1 ID
        {
          type: "input",
          message: "Enter the engineer's Employee Id (Numbers ONLY!):",
          name: "engineerId",

          // Validation
          validate: (answer) => {
            if (isNaN(answer) || !answer) {
              return "Please enter a number - delete your entry with the backspace key and try again";
            }
            return true;
          },
        },
        // Question #3 - Engineer #1 Email
        {
          type: "input",
          name: "engineerEmail",
          message: "Enter the engineer's email (Required):",

          // Validation
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the engineer's email address!");
              return false;
            }
          },
        },

        // Question #4 - Engineer #1 GitHub
        {
          type: "input",
          name: "engineerGithub",
          message: "Enter the engineer's GitHub username (Required):",

          // Validation
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the engineer's GitHub username!");
            }
            return false;
          },
        },
      ])

      // Console log user answers and redirect to menu
      .then((answers) => {
        console.log(answers);
        console.log("You have added an engineer to your team.");
        console.log("You will be redirected to the menu.");
      })
      .then((data) => {
        createTeam();
      })
  );
};

// Function to getIntern data
const getIntern = () => {
  return (
    inquirer
      .prompt([
        // Question #1 - Intern Name
        {
          type: "input",
          name: "internName",
          message: "What's the intern's name?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the intern's name!");
              return false;
            }
          },
        },

        // Question #2 - Intern ID
        {
          type: "input",
          name: "internId",
          message: "What is the intern's Employee ID? (Numbers ONLY!):",
          validate: (answer) => {
            if (isNaN(answer) || !answer) {
              return "Please enter a number - delete your entry with the backspace key and try again";
            }
            return true;
          },
        },

        // Question #3 - Intern Email
        {
          type: "input",
          name: "internEmail",
          message: "What's the intern's email?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the intern's email!");
              return false;
            }
          },
        },

        // Question #4 - Intern School
        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the intern's school!");
              return false;
            }
          },
        },
      ])
      // Console log user answers and redirect to menu
      .then((answers) => {
        console.log(answers);
        console.log("You have added an intern to your team.");
        console.log("You will be redirected to the menu.");
      })

      .then((data) => {
        createTeam();
      })
  );
};

// End prompt is called to generate the data in a file then transitions to template.js

// Write File
const endPrompt = (answers) => {
  console.log("Generating a file....");
  console.log("Done! Check index.html under the dist folder.");
  console.log(
    "This is the team data for your HTML file",

    answers
  );
};

promptUser().then((answers) => {
  console.log("LINE 292 - promptUser().then", answers);
  // const count = data.push(answers);
  // console.log("CHECK LINE 295", count);
  console.log(" LINE 297- DATA", data);

  createTeam();
});
