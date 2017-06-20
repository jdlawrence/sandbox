const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please provide input separated by a comma: ', (answer) => {
  // TODO: Log the answer in a database
  var row = answer.split(',')[0];
  var col = answer.split(',')[1];

  console.log(`You entered: ${row}, ${col}`);

  rl.close();
});