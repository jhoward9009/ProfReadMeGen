const renderLicenseBadge = (license) => {
    if (license) {
        return `![License: ${license}](https://img.shields.io/badge/License-${license.replace(' ','_')}-yellow.svg)`
    }
    return ""
}


const renderLicenseLink = (license) => {
    if (license) {
        return `[Click here for more information](https://opensource.org/licenses/${license.replace(' ','-')})`
    }
    return ""
}

const renderLicenseSection = (license) =>
{
    if (license) {
        return `This project is cover under the license type ${license}
        `
    }
    return ""
}

const generateMarkdown = (data) => {
    return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)
## Installation

${data.Instructions}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Test

${data.Instructions}

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Questions

[GitHub Repo](https://github.com/${data.gitHubUserName})

email: ${data.email}
`;
}

module.exports = generateMarkdown;
