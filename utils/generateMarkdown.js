// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license) {
      return `![License](https://img.shields.io/badge/license-${license}-green)`;
  }
  return '';
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license) {
      return `[License Information](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license) {
      return `## License\n\nThis project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n${renderLicenseBadge(data.license)}\n\n## Description\n\n${data.description}\n\n${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;