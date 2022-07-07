const fs = require('fs')

const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown')
const questions = 
    {
    title:'Project Title',
    
    description: 'Short description of App',
    
    instuctions:'Requirements to install your project?',
    
    usage:'Instructions and examples for use.',
    
    contribution:'Guidelines for contribution',
    
    test:'Write tests for your application.',
    
    license:'Type of license for project',
    
    gitHubUserName:'Github user name',
    
    email:'Email'
};

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions.title,
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter the name of the project');
                return false;
              }
            }
        },
        {
          type: 'input',
          name: 'description',
          message: questions.description
        },
        {
          type: 'input',
          name: 'instuctions',
          message: questions.instuctions
        },
        {
          type:'input',
          name:'usage',
          message:questions.usage
        },
        {
          type:'input',
          name:'contribution',
          message:questions.contribution
        },
        {
          type:'input',
          name: 'test',
          message: questions.test
        },
        {
          type:'list',
          name:'license',
          message:questions.license,
          choices:["MIT","IPL 1.0","ISC","MPL 2.0"]
        },
        {
          type:'input',
          name:'gitHubUserName',
          message:questions.gitHubUserName
        },
        {
          type:'input',
          name:'email',
          message:questions.email
        }
    ])
}

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

// TODO: Create a function to initialize app
init = () => {
  return promptUser()
  .then(userData => {
      return generateMarkdown(userData)
  })
  .then(markdown => {
      return writeToFile('./dist/readme.md',markdown)
  })
}

// Function call to initialize app
init();

