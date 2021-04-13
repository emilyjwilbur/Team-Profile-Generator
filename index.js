// this is where your main logic will lie

// You would first require ALL of the files and node packages needed
// Engineer, Intern, Manager

// REQUIRE that page-template.js
// We are receiving that anonymous function
// Giving the name of pageTemplate
const inquirer = require (`inquirer`);
const Manager = require('./lib/Manager');
const pageTemplate = require('./src/page-template.js');
// And now we can use that pageTemplate as a function, which can ACCEPT a parameter
pageTemplate(answers_from_inquirer_prompt);

// INDEX FILES ARE CONSIDERED THE ENTRY POINT TO YOUR APPLICATION

// IF THIS IS YOUR ENTRY POINT, YOU MUST DO YOUR INQUIRER HERE

// THIS IS WHERE YOU DO YOUR FS WRITEFILE STUFF

// THE DIST FOLDER IS WHERE THE OUTPUT HTML FILES WILL LAND



//   ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.
//   LOGIC GOES HERE 
const membersArray[]

function runApp() {
  inquirer.prompt( [
    {
      type: 'input',
      name: 'managerName',
      message: "What is your team manager's name?",
    },
    {
      type: 'input',
      name: 'managerID',
      message: 'What is the team managers name?',
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'What is the team managers email?',
    },
    {
      type: 'input',
      name: 'managerOfficeNum',
      message: 'What is your team managers office number?',
    }
  ]).then(answers => {

    console.log(answers);
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeName);
    console.log(manager);
    membersArray.push(manager);
    console.log(membersArray);
  })



}

runApp();


