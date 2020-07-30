// const inquirer = require('inquirer')
// const fs = require('fs')
// const teamProfile = require('./src/teamProfile')

const generateTeamProfile = require('./src/page-template.js')
// const { writeFile, copyFile } = require('./utils/generate-site.js')
const inquirer = require('inquirer')

// array of questions for user
const questions = [
  // Manager's Name
  {
    type: 'input',
    name: 'managerName',
    message: "Pls enter Manager's name? (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log("Pls enter Manager's name!")
        return false
      }
    }
  },

  //  employee -id
  {
    type: 'input',
    name: 'employeeId',
    message: 'Pls enter employee id? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('Pls enter employee id!')
        return false
      }
    }
  },
  // email id
  {
    type: 'input',
    name: 'emailId',
    message: 'Pls enter email id? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('Pls enter email id!')
        return false
      }
    }
  },
  // office number
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Pls enter office number? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('Pls enter office number!')
        return false
      }
    }
  },

  // Add engineer or Intern
  {
    type: 'list',
    name: 'empCategory',
    message: 'Do you want to add an Engineer or Intern? (Required)',
    choices: ['Engineer', 'Intern']
  },
  // Emgineer's Name
  {
    type: 'input',
    name: 'engineerName',
    message: "Pls enter Engineer's name? (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log("Pls enter Engineer's name!")
        return false
      }
    }
  },

  //  employee -id
  {
    type: 'input',
    name: 'empId',
    message: 'Pls enter employee id? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('Pls enter employee id!')
        return false
      }
    }
  },
  // email id
  {
    type: 'input',
    name: 'empEmailId',
    message: 'Pls enter email id? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('Pls enter email id!')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter the GitHub link to your project. (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('Please enter description of the project!')
        return false
      }
    }
  }
]

// function to write README file
function writeToFile (fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) throw new Error(err)
    console.log('Page created! Check out fileName in this directory to see it!')
  })
}

// function to initialize program
function init () {
  inquirer.prompt(questions).then(readmeData => {
    const data = generateTeamProfile(readmeData)
    console.log(data)
    // writeToFile('./dist/index.html', data)
  })
}
// function call to initialize program
init()
