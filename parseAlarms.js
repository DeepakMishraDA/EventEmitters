const tt = [
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_KE.boiler_no_response",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Gaskessel, Gaskessel SK",
     "severity":2,
     "manually_fixed":false,
     "message":" Gaskessel, Gaskessel SK | Es wurde keine Betriebsmeldung registriert.",
     "node_id":"ns=6;s=AlarmsConditions|CC_KE.boiler_no_response",
     "unix_timestamp":"2022-06-29T09:39:53.633Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.heat_pump_no_response",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Erdwärmepumpe, Abluftwärmepumpe WP2",
     "severity":2,
     "manually_fixed":false,
     "message":" Erdwärmepumpe, Abluftwärmepumpe WP2 | Es wurde keine Betriebsmeldung registriert.",
     "node_id":"ns=6;s=AlarmsConditions|CC_WP2.heat_pump_no_response",
     "unix_timestamp":"2022-06-29T06:27:26.244Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.heat_pump_malfunction",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Erdwärmepumpe, Abluftwärmepumpe WP2",
     "severity":2,
     "manually_fixed":false,
     "message":" Erdwärmepumpe, Abluftwärmepumpe WP2 | Es liegt eine Störung vor.",
     "node_id":"ns=6;s=AlarmsConditions|CC_WP2.heat_pump_malfunction",
     "unix_timestamp":"2022-06-19T22:32:19.933Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.pump_manual",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Kollektorkreis, Pumpe PU Sk",
     "severity":3,
     "manually_fixed":false,
     "message":" Kollektorkreis, Pumpe PU Sk | Der manuelle Betrieb wurde aktiviert.",
     "node_id":"ns=6;s=AlarmsConditions|CC_KK.pump_manual",
     "unix_timestamp":"2022-06-17T17:39:29.494Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL2.pump_manual",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Solarer Ladekreis, Pumpe PU SPk",
     "severity":3,
     "manually_fixed":false,
     "message":" Solarer Ladekreis, Pumpe PU SPk | Der manuelle Betrieb wurde aktiviert.",
     "node_id":"ns=6;s=AlarmsConditions|CC_SPL2.pump_manual",
     "unix_timestamp":"2022-06-17T16:53:00.081Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.radiation_manual",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Kollektorkreis, Strahlungssensor ST",
     "severity":3,
     "manually_fixed":false,
     "message":" Kollektorkreis, Strahlungssensor ST | Die manuelle Vorgabe der Strahlungsleistung wurde aktiviert.",
     "node_id":"ns=6;s=AlarmsConditions|CC_KK.radiation_manual",
     "unix_timestamp":"2022-06-17T16:42:14.051Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.radiation_error",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Kollektorkreis, Strahlungssensor ST",
     "severity":2,
     "manually_fixed":false,
     "message":" Kollektorkreis, Strahlungssensor ST | Der Strahlungssensor ist defekt oder nicht angeschlossen.",
     "node_id":"ns=6;s=AlarmsConditions|CC_KK.radiation_error",
     "unix_timestamp":"2022-06-17T16:42:14.040Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.volume_flow_manual",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Kollektorkreis, Volumenstromzähler VZ Sk",
     "severity":3,
     "manually_fixed":false,
     "message":" Kollektorkreis, Volumenstromzähler VZ Sk | Die manuelle Vorgabe des Volumenstroms wurde aktiviert.",
     "node_id":"ns=6;s=AlarmsConditions|CC_KK.volume_flow_manual",
     "unix_timestamp":"2022-06-17T16:42:14.025Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_WK.humidity_manual",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Quellenkreis, Hygrometer HG",
     "severity":3,
     "manually_fixed":false,
     "message":" Quellenkreis, Hygrometer HG | Die manuelle Vorgabe des Taupunkts wurde aktiviert.",
     "node_id":"ns=6;s=AlarmsConditions|CC_WK.humidity_manual",
     "unix_timestamp":"2022-06-17T16:42:13.988Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_WK.humidity_error",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Quellenkreis, Hygrometer HG",
     "severity":9,
     "manually_fixed":false,
     "message":" Quellenkreis, Hygrometer HG | Das Hygrometer ist defekt oder nicht angeschlossen.",
     "node_id":"ns=6;s=AlarmsConditions|CC_WK.humidity_error",
     "unix_timestamp":"2022-06-17T16:42:13.968Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.pump_no_response",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Kollektorkreis, Pumpe PU Sk",
     "severity":9,
     "manually_fixed":false,
     "message":" Kollektorkreis, Pumpe PU Sk | Es wurde keine Betriebsmeldung der Pumpe registriert.",
     "node_id":"ns=6;s=AlarmsConditions|CC_KK.pump_no_response",
     "unix_timestamp":"2022-06-17T16:42:13.924Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_QK.volume_flow_manual",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Quellenkreis, Volumenstromzähler VZ Qk",
     "severity":3,
     "manually_fixed":false,
     "message":" Quellenkreis, Volumenstromzähler VZ Qk | Die manuelle Vorgabe des Volumenstroms wurde aktiviert.",
     "node_id":"ns=6;s=AlarmsConditions|CC_QK.volume_flow_manual",
     "unix_timestamp":"2022-06-17T16:42:13.889Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_QK.pump manual",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Quellenkreis, Pumpe PU Qk",
     "severity":1,
     "manually_fixed":false,
     "message":" Quellenkreis, Pumpe PU Qk | Der manuelle Betrieb wurde aktiviert.",
     "node_id":"ns=6;s=AlarmsConditions|CC_QK.pump manual",
     "unix_timestamp":"2022-06-17T16:42:13.874Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
     "alarm_id":"ns=6;s=AlarmsConditions|CC_QK.pump_no_response",
     "location":{
        "building":"Mendelstrasse 5"
     },
     "device":"Quellenkreis, Pumpe PU Qk",
     "severity":2,
     "manually_fixed":false,
     "message":" Quellenkreis, Pumpe PU Qk | Es wurde keine Betriebsmeldung der Pumpe registriert.",
     "node_id":"ns=6;s=AlarmsConditions|CC_QK.pump_no_response",
     "unix_timestamp":"2022-06-17T16:42:13.861Z",
     "resolved":true,
     "read":false,
     "relevant":false
  },
  {
    "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL2.TXSPo_error",
    "location":{
       "building":"Mendelstrasse 5"
    },
    "device":"Solarer Ladekreis, Temperaturfühler TSSPo",
    "severity":12,
    "manually_fixed":false,
    "message":" Solarer Ladekreis, Temperaturfühler TSSPo | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
    "node_id":"ns=6;s=AlarmsConditions|CC_SPL2.TXSPo_error",
    "unix_timestamp":"2022-06-17T16:42:13.806Z",
    "resolved":true,
    "read":false,
    "relevant":false
 },
 {
    "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL2.TXSPm_manual",
    "location":{
       "building":"Mendelstrasse 5"
    },
    "device":"Solarer Ladekreis, Temperaturfühler TSSPm",
    "severity":5,
    "manually_fixed":false,
    "message":" Solarer Ladekreis, Temperaturfühler TSSPm | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
    "node_id":"ns=6;s=AlarmsConditions|CC_SPL2.TXSPm_manual",
    "unix_timestamp":"2022-06-17T16:42:13.791Z",
    "resolved":true,
    "read":false,
    "relevant":false
 },
 {
    "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL2.TXSPu_manual",
    "location":{
       "building":"Mendelstrasse 5"
    },
    "device":"Solarer Ladekreis, Temperaturfühler TSSPu",
    "severity":4,
    "manually_fixed":false,
    "message":" Solarer Ladekreis, Temperaturfühler TSSPu | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
    "node_id":"ns=6;s=AlarmsConditions|CC_QK.pump manual",
    "unix_timestamp":"2022-06-17T16:42:13.778Z",
    "resolved":true,
    "read":false,
    "relevant":false
 }
]

async function queryReturn(){
  const queryString = sql`Select read_flag,relevant_flag,save_for_later_flag,archived_flag,node_id From
  alarm_type alt Join user_alarm_interaction usi On alt.id = usi.alarm_type_id;`
  const results = await carryOutPostgresQuery({
    queryString,
    schema: this.schema,
  }); 
  return results;
}

queryReturn().then((results)=>{
  for (let i = 0; i<results.length; i++){
    tt.forEach((element)=>{
      if (element.node_id==results[i].node_id) {
         element.unread = results[i].read_flag;
         element.saved_for_later = results[i].save_for_later_flag;
         element.relevant = results[i].relevant_flag;
         element.archive = results[i].archived_flag;
      } else {
        return;
      }
     return element
   }) 
  }
})



































// var op = [];
// for (let i = 0; i<op.length; i++){
//   tt.forEach((element)=>{
//     if (element.severity==op[i]) {
//        element.read = true;
//        element.saved_for_later = false;
//        element.relevant = true;
//        element.notread = false;
//     } else {
//       return;
//     }
//    return element
//  }) 
// }

// console.log(tt);
