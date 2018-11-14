var eventTypes = ["casual" , "semi-formal" , "formal"];
var userEventType = prompt("What type of event are you attending: casual, semi-formal, or formal?");
var result = '';

var eventSug = '';
var tempSug = '';

var tempFahr = prompt("What's the temperature outside?");

if (tempFahr < 54) {
  tempSug = 'a coat.';
}
else if (tempFahr >= 54 && tempFahr <=70) {
  tempSug = 'a jacket.';
}
else if (tempFahr > 70) {
  tempSug = 'no jacket.';
}


if (userEventType == "casual") {
  eventSug = 'something comfy';
}
else if (userEventType == "semi-formal") {
  eventSug = 'a polo';
}
else if (userEventType == "formal") {
  eventSug = 'a suit';
}

result = 'Since it is ' + tempFahr +
  ' degrees and you are going to a ' + userEventType +
  ' event, you should wear ' + eventSug + ' and ' + tempSug;


console.log(result);
