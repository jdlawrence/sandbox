var data = `fileName,owner,docType,applicationId,contentLength
bank_statement_123,Tony Stark,bank_statement,1,1000
tax_document_1,Tony Stark,tax_return,1,16001
tax_document_2,Steve Rogers,tax_return,2,2000
document_423,Thor Odinson,tax_return,3,1500
medical_report_1,Thor Odinson,medical_history,3,15000
prescription_1,Stephen Strange,medical_history,4,200
steven_asset,Stephen Strange,bank_statement,4,4000`;

var data2 = `fileName,owner,docType,applicationId,contentLength
bank_statement_123,Tony Stark,bank_statement,1,1000
tax_document_1,Tony Stark,tax_return,1,16001
tax_document_2,Steve Rogers,tax_return,2,2000
document_423,Thor Odinson,tax_return,3,1500
medical_report_1,Thor Odinson,medical_history,3,15000
prescription_1,Stephen Strange,medical_history,5,200
steven_asset,Stephen Strange,bank_statement,5,4000
john_paystub,John Snow,paystub,0,2000
curry_insurance,Stephen Curry,proof_insurance,-1,6000`;

var splitData = data2.split('\n').slice(1);

function transform(arr) {
  return arr.map(function (row) {
    var delimited = row.split(',')
    return {
      fileName: delimited[0],
      owner: delimited[1],
      docType: delimited[2],
      applicationId: delimited[3],
      contentLength: delimited[4]
    }
  });
}

var transformed = transform(splitData);

var doctypes = {};
transformed.forEach(function (doc) {
  doctypes[doc.docType] = true;
});

var docIDs = {};
transformed.forEach(function (doc) {
  docIDs[doc.applicationId] = true;
});

var numIDs = Object.keys(docIDs).length;

var typeObj = {};
var missing = '';
var sortedDoctypes = Object.keys(doctypes).sort();
sortedDoctypes.forEach(type => {

  typeObj = {};
  console.log(type);
  transformed.forEach(function (record) {
    if (record.docType === type) {
      typeObj[record.applicationId] = true;
    }
  });


  debugger;
  // console.log(typeObj);
  var docIDArr = Object.keys(docIDs).sort((a, b) => {
    return parseInt(a) - parseInt(b);
  });
  docIDArr.forEach(id => {
    if (typeObj[id] === undefined) {
      missing += id + ' ';
    }
  });
  console.log(missing);
  missing = '';
});