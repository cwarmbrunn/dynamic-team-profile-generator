// This is where the application will run
// Use the command "node index.js" to begin!

// Set up Inquirer requirement
const inquirer = require("inquirer");

const { writeFile } = require("./src/template");

// Grants access to the file system functionality
const fs = require("fs");
const { number } = require("yargs");

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
      type: "input",
      message: "Please enter the manager's office number (Numbers ONLY!):",
      name: "manager.office",
      validate: (answer) => {
        if (isNaN(answer) || !answer) {
          return "Please enter a number - delete your entry with the backspace key and try again";
        }
        return true;
      },
    },

    // Question #5 - Finish or Add an Engineer/Intern
    {
      type: "list",
      name: "next.steps",
      message: "What do you want to do now?",
      choices: ["Done with my team", "Add an Intern", "Add an Engineer"],

      // Validation
      validate: (answer) => {
        if (answer === "Done with my team") {
          // Generate the file
          promptUser().then((data) => {
            console.log("Generating a file....");
            console.log("Done! Check index.html under the dist folder.");
            return writeFile(data);
          });
        } else if (answer === "Add an Intern") {
          return console.log("You selected to add an intern!"); // Add logic to proceed with the intern questions
        } else if (answer === "Add an Engineer") {
          return console.log("You selected to add an engineer!");
          // Add logic to proceed with engineer questions
        }
      },
    },
  ]);
};

// TODO: Create a function to write responses into userResponses.json
promptUser().then((data) => {
  console.log("Generating a file....");
  console.log("Done! Check index.html under the dist folder.");
  return writeFile(data);
});
