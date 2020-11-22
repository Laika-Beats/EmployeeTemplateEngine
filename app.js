const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let EmployeeTeam = []

function addEmployee () {
    inquirer.prompt (
        [
            {
                type: "input",
                message: "What is the employee's full name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the employee's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the e-mail address for this employee?",
                name: "email"
            },
            {
                type: "list",
                message: "Choose a title for this employee:",
                name: "employeeTitle",
                choices: 
                [
                    {
                        name: "Manager",
                        value: 0
                    },
                    {
                        name: "Engineer",
                        value: 1
                    },
                    {
                        name: "Intern",
                        value: 2
                    },
                ]
            }

        ]
    )
}
