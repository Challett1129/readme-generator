// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = data => {
  return `
  # ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#Contributors)
  * [License](#license)
  
  ## Installation

  ## Usage

  ## Contributors 

  ## Tests

  ## License 

  ## Questions 

  * [This is a link to the creators GitHub](https://github.com/${data.github})
  * [This is the email addres of the creator] (${data.email})
`;
}

