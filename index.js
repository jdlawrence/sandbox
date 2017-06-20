const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const { spreadsheets } = require('googleapis').sheets('v4');
const authenticate = require(`../authenticator`);
const getValues = Promise.promisify(spreadsheets.values.get.bind(spreadsheets));
const writeFileAsync = Promise.promisify(fs.writeFile);

// CONFIG OPTIONS
const SPREADSHEET_ID = '1_6IoYgQjjBvweU49rsMZhjGiU7xc_UwJodfwbMTDT5Q';
const SPREADSHEET_RANGE = 'HROS: Names, Github, Email!A:G';
const DATA_FILEPATH = path.resolve(__dirname, '../', 'data');
const CONTACT_INFO_FILENAME = `${DATA_FILEPATH}/contactInfo.json`;
const HANDLES_FILENAME = `${DATA_FILEPATH}/handles.json`;

// HELPER FUNCTIONS 
const isCohortStart = (str) => str && str.toLowerCase().indexOf('hr') > -1;

const getCohortFromString = (str) => str.match(/\d+/)[0];

const getColumnIndices = (row) => {
  const preferredName = row.indexOf('Preferred Name');
  const email = row.indexOf('Email');
  const github = row.indexOf('Github');
  const firstName = row.indexOf('First Name');
  const lastName = row.indexOf('Last Name');

  return {
    preferredName,
    lastName,
    firstName, 
    email, 
    github
  };
};

const makeContactInfoObj = (map, row) => ({
  firstName: row[map.firstName],
  lastName: row[map.lastName],
  preferred: row[map.preferredName],
  email: row[map.email]
})

const writeDataToJSONFile = ({filename, data}) => {
  console.log("data: ", data);
  
  writeFileAsync(filename, JSON.stringify(data, null, 2));
}
// ACTUAL SHIT
const getStudentInfo = () => {
  authenticate().then(auth => {
    return getValues({
      auth,
      spreadsheetId: SPREADSHEET_ID,
      range: SPREADSHEET_RANGE,
    })
    .then(studentData => {
      
      const contactInfo = {}; // obj with github handle as key
      const handles = {}; // obj with cohort as key
      let cohortIdentifier;
      // This assumes that the first row is blank in students.hackreactor.com
      const idxMap = getColumnIndices(studentData.values[0]);
      console.log("idxMap: ", studentData.values[0]);
      // console.log("idxMap: ", idxMap);
      
      // Process all rows starting with row 2
      studentData.values.slice(1).forEach(spreadsheetRow => {
        let githubHandle = spreadsheetRow[idxMap.github]
        // console.log("git: ", githubHandle);
        
        if(githubHandle) { //if there is a github handle in that row
          contactInfo[githubHandle] = makeContactInfoObj(idxMap, spreadsheetRow);
          handles[cohortIdentifier].push(githubHandle);
        } else if(isCohortStart(spreadsheetRow[idxMap.firstName])) {
          cohortIdentifier = `HR${getCohortFromString(spreadsheetRow[idxMap.firstName])}`;
          handles[cohortIdentifier] = [];
        }
      });
      console.log("data : ", contactInfo);
      return [{
        filename: CONTACT_INFO_FILENAME,
        data: contactInfo,
      }, {
        filename: HANDLES_FILENAME,
        data: handles,
      }];
    })
    .then(infoObjects => Promise.all(infoObjects.map(obj => writeDataToJSONFile(obj))))
  });
}


// Invoke function
getStudentInfo();