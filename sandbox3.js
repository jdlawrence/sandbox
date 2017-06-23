function telephoneGame(messages) {
  var answer = -1;
  debugger;
  for (var i = 0; i < messages.length-1; i++) {
    console.log(messages[i], messages[i+1]);
    console.log(messages[i], messages[i] !== messages[i+1]);
    if (messages[i] !== messages[i + 1]) {
    //RV 1#if ( ... ) {
      answer = i;
      break;
    }  
  }
  return answer;
}

var messages = ["a", 
 "a", 
 "a"];

telephoneGame(messages);