// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const render = license => {
    if(!license) {
      return '';
    }
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let badge = data.license;
   switch (badge) {
case 1: MIT = "[License: MIT](https://opensource.org/licenses/MIT)";
case 2: Apache = "[License :Apache](https://opensource.org/licenses/Apache-2.0)";
default: none = 'I do NOT want a license'
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  # Your Project Title
  ${data.title}
  
  ## Description 
  ${data.description}
 
  
  
  ## Table of Contents (Optional)
  ${data.table}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  ${data.installation}
    
  ## Usage 
  ${data.usage}
  
  ## Credits
  ${data.contributing}
    
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-tertiary)
  ${data.license}  
  This license is covered by 
  ---
  
  🏆 
  
  
  
  ## Questions
  ${data.question}
  ${data.email}
  ${data.link}
  
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

`;
}

module.exports = generateMarkdown;
