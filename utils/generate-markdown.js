// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge 
  let licenseLink 
  if(license === 'None') {
    return ``
  }
  switch(license) {
    case 'MIT': 
    licenseBadge = `<img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="image of MIT badge">`
    licenseLink = `[link to ${license} license website](https://opensource.org/licenses/MIT)`;
    break;
    
    case 'ISC': 
    licenseBadge = `<img src="https://img.shields.io/badge/License-ISC-blue.svg" alt ="image of ISC badge">`
    licenseLink = `[link to ${license} license website](https://opensource.org/licenses/ISC)`
    break;

    case 'MPL 2.0': 
    licenseBadge = `<img src="https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg" alt="image of Mozilla Public License 2.0 badge">`
    licenseLink = `[link to ${license} license website](https://opensource.org/licenses/MPL-2.0)`
    break;
    
    case 'Boost':
    licenseBadge = `<img src="https://img.shields.io/badge/License-Boost%201.0-lightblue.svg" alt="image of Boost license badge">`
    licenseLink = `[link to ${license} license website](https://www.boost.org/LICENSE_1_0.txt)`
    break;

    case 'Apache 2':
    licenseBadge= `<img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="image of Apache license badge">`
    licenseLink= `[link to ${license} license website](https://opensource.org/licenses/Apache-2.0)`
    break;
    
    default: `error`
    }
  return `
  ## License 
  ${licenseBadge}

  ${licenseLink}
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseToc(license) {
  if(license ==='None'){
    return ``
  } else {
  return `
  * [License](#license)
  `
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
   ${licenseToc(data.license)}
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ${renderLicenseBadge(data.license)}

  ## Questions 
  * [Link to the creators GitHub](https://github.com/${data.github})
  * Reach the creator at this email: ${data.email}
`;
}


module.exports = generateMarkdown;