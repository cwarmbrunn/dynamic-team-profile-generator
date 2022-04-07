// This is where the application will run
// Use the command "node index.js" to begin!

// Set up Inquirer requirement
const inquirer = require("inquirer");

const { writeFile } = require("./src/template");

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
      name: "manager.name",
      message: "Enter the manager's name (Required):",

      // Validation
      validate: (nameInput) => {
        if (nameInput) {
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
      name: "manager.id",
      validate: (answer) => {
        if (isNaN(answer) || !answer) {
          return "Please enter a number - delete your entry with the backspace key and try again";
        }
        return true;
      },
    },

    // Question #3 - Manager Email Address
    {
      type: "input",
      name: "manager.email",
      message: "Enter the manager's email address (Required):",

      // Validation
      validate: (nameInput) => {
        if (nameInput) {
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
      name: "manager.office",
      validate: (answer) => {
        if (isNaN(answer) || !answer) {
          return "Please enter a number - delete your entry with the backspace key and try again";
        } else return true;
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
        endPrompt();
      }
    });
};

// Function to getEngineer data
const getEngineer = () => {
  inquirer.prompt([
    // Question #1 - Engineer #1 Name
    {
      type: "input",
      name: "engineer.name",
      message: "Enter the engineer's name (Required):",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          return false;
        }
      },
    },

    // Question #2 - Engineer #1 ID
    {
      type: "input",
      message: "Enter the engineer's Employee Id (Numbers ONLY!):",
      name: "engineer.id",

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
      name: "engineer.email",
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
      name: "engineer.github",
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
  ]);

  return createTeam();
};

// Function to getIntern data
const getIntern = () => {
  inquirer.prompt([
    // Question #1 - Intern Name
    {
      type: "input",
      name: "intern.name",
      message: "What's the intern's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          return false;
        }
      },
    },

    // Question #2 - Intern ID
    {
      type: "input",
      name: "intern.id",
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
      name: "intern.email",
      message: "What's the intern's email?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          return false;
        }
      },
    },

    // Question #4 - Intern School
    {
      type: "input",
      name: "intern.school",
      message: "What school does the intern attend?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          return false;
        }
      },
    }.then(
      console
        .log("All done with your intern's data - returning to the main page.")
        .then(createTeam())
    ),
  ]);
};

// End prompt is called to generate the data in a file then transitions to template.js

const endPrompt = () => {
  console.log("Generating a file....");
  console.log("Done! Check index.html under the dist folder.");
  return writeFile(data);
};

promptUser().then((data) => {
  createTeam();
});
