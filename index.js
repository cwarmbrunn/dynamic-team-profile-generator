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
  return inquirer
    .prompt([
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
        message:
          "Now that you've added a manager - what do you want to do now?",
        choices: ["Add an Engineer", "Add an Intern", "Done with my Team"],
      },
    ])
    .then((userSelection) => {
      // If user selects "Add an Engineer" - run the following
      if (userSelection === "Add an Engineer") {
        getEngineer();

        // Else if user selects "Add an Intern" - run the following
      } else if (userSelection === "Add an Intern") {
        return getIntern();

        // Else if user selects "Done with my Team" - run the following
      } else if (userSelection === "Done with my Team") {
        return endPrompts();
      }
    });
};

// TODO: Create a function to write responses into userResponses.json
const endPrompts = promptUser().then((data) => {
  console.log("Generating a file....");
  console.log("Done! Check index.html under the dist folder.");
  return writeFile(data);
});
