const inquirer = require("inquirer");
const fs = require("fs");

const readmetxt = ({ projectName, motivation, purpose, problem, learn, instillation, needTo, usage, credit, license, username, email}) => {
  return `
    # ${projectName}

    ## Description 

    ${motivation}
    ${purpose}
    ${problem}
    ${learn}

    ##Installation

    ${instillation}
    ${needTo}

    ## Usage

    ${usage}

    ## Credit

    ${credit}

    ## License

    ${license}

    ## Questions
    
    you can reach me by email at ${email}
    
    Check out my Github progile at github.com/${username}
    `;
};

inquirer
  .prompt([
    {
      name: "projectName",
      message: "What is the name of your project?",
      type: "input",
    },
    {
      name: "motivation",
      message: "Please provide your modivation for this project",
      type: "input",
    },
    {
      name: "purpose",
      message: "What is the purpose of this project?",
      type: "input",
    },
    {
      name: "problem",
      message: "What problem does this solve?",
      type: "input",
    },
    {
      name: "learn",
      message: "What did you learn?",
      type: "input",
    },
    {
      name: "instillation",
      message: "Do you need to install anything?",
      type: "confirm",
    },
    {
      name: "needTo",
      message:
        "If you did need to install something what and how do you install it?(skip if previous answer was no)",
      type: "input",
    },
    {
      name: "usage",
      message: "How do you use this?",
      type: "input",
    },
    {
      name: "credit",
      message: "Do you have anyone you need to credit?",
      type: "input",
    },
    {
      name: "license",
      message: "What license does this project fall under?",
      type: "list",
      choices: ['Berkeley Software Distribution License (BSD)', 'MIT license (Massachusetts Institute of Technology)', 'GNU General Public License (GNU GPL)', 'Apache License 2.0', 'Internet Systems Consortium (ISC) License' ],
    },
    {
        name: "username",
        message: "What is your Github username?",
        type: "input",
      },
      {
        name: "email",
        message: "What is your email?",
        type: "input",
      },


  ])
  .then((answers) => {
    console.log(answers);
    fs.writeFile("README.md", readmetxt(answers), (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("success");
    });
  });
