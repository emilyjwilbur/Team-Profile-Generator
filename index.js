
const inquirer = require ('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer')
const pageTemplate = require('./src/page-template.js');
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");




//   ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.
//   LOGIC GOES HERE 

const membersArray = [];

const initialQuestions = () => {
  inquirer.prompt([{
    type: 'list',
    message: 'What type of employee?',
    name: 'employeeType',
    choices: [Manager, Engineer, Intern]
  },

  ])
    .then(answer => {
      if (answer.employeeType === 'Manager') {
        createManager();
      } else if
        (answer.employeeType === 'Engineer') {
          createEngineer();
        }else if
        (answer.employeeType === 'Intern') {
          createIntern();
        }
        else {
          console.log('Done');
          return;
        }
    })
}

initialQuestions();

const createIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'What is the interns name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the interns employee id?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the interns email address?'
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school does the intern go to?'
    },
  ])
    .then(answers => {
      const intern = new Intern(answers.internName, answers.id, answers.email, answers.school);
      console.log(intern)
      membersArray.push(intern);
      console.log(membersArray)


    })
}

const createEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'What is the engineers name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the engineers employee id?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the engineers email address?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineers github username?'
    },
    
  ])
    .then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.id, answers.email, answers.github);
      console.log(engineer);
      membersArray.push(engineer);
      console.log(membersArray);
    })
}

const createManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is your team manager's name?"
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'What is the team managers id?',
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
    },
  ])
    .then(answers => {
      console.log(answers);
      const manager = new Manager(answers.managerName, answers.managerId, answers.managersEmail, answers.managerOfficeNum);
      console.log(manager);
      membersArray.push(manager);
      console.log(membersArray)
    })
}







