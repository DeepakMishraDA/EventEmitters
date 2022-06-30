const tt = require('./data/data')

function parseAlarmText(alarmText) {
  let textParsedDict = {};
  if (alarmText.startsWith('Notfall')) {
    textParsedDict.severity = 1;
  } else if (alarmText.startsWith('Störung')) {
    textParsedDict.severity = 2;
  } else if (alarmText.startsWith('Warnung')) {
    textParsedDict.severity = 3;
  } else if (alarmText.startsWith('Info')) {
    textParsedDict.severity = 4;
  } else {
    textParsedDict.severity = 3;
  }
  const barSplit = alarmText.split('|');
  if (barSplit.length > 1) {
    textParsedDict.device = barSplit[1].trim();
    textParsedDict.nicerText = barSplit.slice(1).join('|');
  } else {
    textParsedDict.device = '';
    textParsedDict.nicerText = alarmText;
  }
  return textParsedDict;
}


// for (const element of tt) {
//     console.log("This is it",element);
//   }
let op = []
let rt = tt.map((element)=>{
     if (element.severity= 3) {
        element.ok = 0;
     } else {
        element.ok = 45
     }
    return element
  }) 
 //console.log(rt);
 const dict = {
   '18128886-8f75-4a09-9123-f4f27a1843e4':"name"
 }
console.log(dict['18128886-8f75-4a09-9123-f4f27a1843e4'])

