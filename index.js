// This is where the application will run
// Use the command "node index.js" to begin!

// Set up Inquirer requirement
const inquirer = require("inquirer");

const { writeFile } = require("./src/template");

// Grants access to the file system functionality
const fs = require("fs");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      // Question #1 - Manager Name
      type: "input",
      name: "manager.name",
      message: "What is the manager's name?",

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
      name: "manager.id",
      message: "What is the manager's employee ID?",

      // Validation
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's employee ID!");
          return false;
        }
      },
    },

    // Question #3 - Manager Email Address
    {
      type: "input",
      name: "manager.email",
      message: "What is the manager's email address?",

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
      type: "number",
      name: "manager.office",
      message: "What is the office number for the manager?",

      // Validation
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's office number!");
          return false;
        }
      },
    },

    // Question #5 - Finish or Add an Engineer/Intern
  ]);
};

// TODO: Create a function to write responses into userResponses.json
promptUser().then((data) => {
  console.log("Generating a file....");
  console.log("Done! Check index.html under the dist folder.");
  return writeFile(data);
});
