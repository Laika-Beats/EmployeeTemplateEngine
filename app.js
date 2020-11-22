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
    inquirer.prompt 
    (
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
    ).then( (answers) => {
        if (answers.employeeTitle === 0) {
            inquirer.prompt
            (
                [
                    {
                        type: "input",
                        message: "What is the office number?",
                        name: "officeNum"
                    },
                    {
                        type: "list",
                        message: "Would you like to add another employee to the team?",
                        name: "newEmployee",
                        choices:
                        [
                            {
                                name: "Yes",
                                value: 0
                            },
                            {
                                name: "No",
                                value: 1
                            }
                        ]
                    }
                ]
            ).then ( (answers) => {
                let manager = new Manager (answers.name, answers.id, answers.email, answer.officeNum)
                EmployeeTeam.push (manager)
                if (answers.newEmployee === 0) {
                    console.log ("Adding new employee...")
                    addEmployee ()
                } else {
                    render (EmployeeTeam)
                    fs.writeFile ("team.html", render (EmployeeTeam), err => {
                        if (err) {
                            console.log ("Error!")
                        } else {
                            console.log("Sucuess!")
                        }
                    })
                }
            })
        }
        if (answers.employeeType === 1) {
            inquirer.prompt (
                [
                    {
                        type: "input",
                        message: "What is the Github username for this employee?",
                        name: "github"
                    },
                    {
                        type: "list",
                        message: "Would you like to add another employee to the team?",
                        name: "newEmployee",
                        choices:
                        [
                            {
                                name: "Yes",
                                value: 0
                            },
                            {
                                name: "No",
                                value: 1
                            }
                        ]
                    }

                ]
            ).then ( (answers))
        }
        
    })
}
