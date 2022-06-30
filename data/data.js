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
      "severity":2,
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
      "severity":2,
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
      "severity":3,
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
      "alarm_id":"ns=6;s=AlarmsConditions|CC_QK.valve_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Quellenkreis, RV Qk",
      "severity":3,
      "manually_fixed":false,
      "message":" Quellenkreis, RV Qk | Der manuelle Betrieb wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_QK.valve_manual",
      "unix_timestamp":"2022-06-17T16:42:13.845Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL2.TXSPo_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Solarer Ladekreis, Temperaturfühler TSSPo",
      "severity":3,
      "manually_fixed":false,
      "message":" Solarer Ladekreis, Temperaturfühler TSSPo | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL2.TXSPo_manual",
      "unix_timestamp":"2022-06-17T16:42:13.818Z",
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
      "severity":2,
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
      "severity":3,
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
      "severity":3,
      "manually_fixed":false,
      "message":" Solarer Ladekreis, Temperaturfühler TSSPu | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL2.TXSPu_manual",
      "unix_timestamp":"2022-06-17T16:42:13.778Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL2.TXSPm_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Solarer Ladekreis, Temperaturfühler TSSPm",
      "severity":2,
      "manually_fixed":false,
      "message":" Solarer Ladekreis, Temperaturfühler TSSPm | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL2.TXSPm_error",
      "unix_timestamp":"2022-06-17T16:42:13.761Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL2.TXSPu_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Solarer Ladekreis, Temperaturfühler TSSPu",
      "severity":2,
      "manually_fixed":false,
      "message":" Solarer Ladekreis, Temperaturfühler TSSPu | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL2.TXSPu_error",
      "unix_timestamp":"2022-06-17T16:42:13.747Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.pump_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Pumpe PU L",
      "severity":3,
      "manually_fixed":false,
      "message":" Ladekreis, Pumpe PU L | Der manuelle Betrieb wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.pump_manual",
      "unix_timestamp":"2022-06-17T16:42:13.735Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.pump_no_response",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Pumpe PU L",
      "severity":2,
      "manually_fixed":false,
      "message":" Ladekreis, Pumpe PU L | Es wurde keine Betriebsmeldung der Pumpe registriert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.pump_no_response",
      "unix_timestamp":"2022-06-17T16:42:13.716Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPos_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Temperaturfühler TLSPos",
      "severity":2,
      "manually_fixed":false,
      "message":" Ladekreis, Temperaturfühler TLSPos | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPos_error",
      "unix_timestamp":"2022-06-17T16:42:13.662Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPo_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Temperaturfühler TLSPo",
      "severity":3,
      "manually_fixed":false,
      "message":" Ladekreis, Temperaturfühler TLSPo | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPo_manual",
      "unix_timestamp":"2022-06-17T16:42:13.649Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPm_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Temperaturfühler TLSPm",
      "severity":3,
      "manually_fixed":false,
      "message":" Ladekreis, Temperaturfühler TLSPm | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPm_manual",
      "unix_timestamp":"2022-06-17T16:42:13.636Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPm_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Temperaturfühler TLSPm",
      "severity":2,
      "manually_fixed":false,
      "message":" Ladekreis, Temperaturfühler TLSPm | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPm_error",
      "unix_timestamp":"2022-06-17T16:42:13.624Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPo_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Temperaturfühler TLSPo",
      "severity":2,
      "manually_fixed":false,
      "message":" Ladekreis, Temperaturfühler TLSPo | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPo_error",
      "unix_timestamp":"2022-06-17T16:42:13.612Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPos_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Temperaturfühler TLSPos",
      "severity":3,
      "manually_fixed":false,
      "message":" Ladekreis, Temperaturfühler TLSPos | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPos_manual",
      "unix_timestamp":"2022-06-17T16:42:13.600Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_QK.TRQ_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Quellenkreis, Temperaturfühler TRQ",
      "severity":3,
      "manually_fixed":false,
      "message":" Quellenkreis, Temperaturfühler TRQ | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_QK.TRQ_manual",
      "unix_timestamp":"2022-06-17T16:42:13.587Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_QK.TRQ_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Quellenkreis, Temperaturfühler TRQ",
      "severity":2,
      "manually_fixed":false,
      "message":" Quellenkreis, Temperaturfühler TRQ | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_QK.TRQ_error",
      "unix_timestamp":"2022-06-17T16:42:13.574Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL2.pump_no_response",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Solarer Ladekreis, Pumpe PU SPk",
      "severity":2,
      "manually_fixed":false,
      "message":" Solarer Ladekreis, Pumpe PU SPk | Es wurde keine Betriebsmeldung der Pumpe registriert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL2.pump_no_response",
      "unix_timestamp":"2022-06-17T16:42:13.552Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.TRX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Temperaturfühler TRL",
      "severity":3,
      "manually_fixed":false,
      "message":" Ladekreis, Temperaturfühler TRL | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.TRX_manual",
      "unix_timestamp":"2022-06-17T16:42:13.531Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPu_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Temperaturfühler TLSPu",
      "severity":3,
      "manually_fixed":false,
      "message":" Ladekreis, Temperaturfühler TLSPu | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPu_manual",
      "unix_timestamp":"2022-06-17T16:42:13.519Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.TRX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Temperaturfühler TRL",
      "severity":2,
      "manually_fixed":false,
      "message":" Ladekreis, Temperaturfühler TRL | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.TRX_error",
      "unix_timestamp":"2022-06-17T16:42:13.508Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.TVX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Temperaturfühler TVL",
      "severity":2,
      "manually_fixed":false,
      "message":" Ladekreis, Temperaturfühler TVL | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.TVX_error",
      "unix_timestamp":"2022-06-17T16:42:13.493Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WM.electricity_meter_manual_f",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Erdwärmepumpe, Stromzähler EZ HS",
      "severity":3,
      "manually_fixed":false,
      "message":" Erdwärmepumpe, Stromzähler EZ HS | Die manuelle Vorgabe der elektrischen Leistung wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WM.electricity_meter_manual_f",
      "unix_timestamp":"2022-06-17T16:42:13.479Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.TVX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Temperaturfühler TVL",
      "severity":3,
      "manually_fixed":false,
      "message":" Ladekreis, Temperaturfühler TVL | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.TVX_manual",
      "unix_timestamp":"2022-06-17T16:42:13.465Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPu_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Ladekreis, Temperaturfühler TLSPu",
      "severity":2,
      "manually_fixed":false,
      "message":" Ladekreis, Temperaturfühler TLSPu | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_SPL1.TXSPu_error",
      "unix_timestamp":"2022-06-17T16:42:13.441Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WM.TA_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Wärmemanager, Temperaturfühler TA",
      "severity":3,
      "manually_fixed":false,
      "message":" Wärmemanager, Temperaturfühler TA | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WM.TA_manual",
      "unix_timestamp":"2022-06-17T16:42:13.427Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WM.TA_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Wärmemanager, Temperaturfühler TA",
      "severity":2,
      "manually_fixed":false,
      "message":" Wärmemanager, Temperaturfühler TA | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WM.TA_error",
      "unix_timestamp":"2022-06-17T16:42:13.409Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.electricity_meter_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Erdwärmepumpe, Stromzähler EZ WP2",
      "severity":3,
      "manually_fixed":false,
      "message":" Erdwärmepumpe, Stromzähler EZ WP2 | Die manuelle Vorgabe der elektrischen Leistung wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP2.electricity_meter_manual",
      "unix_timestamp":"2022-06-17T16:42:13.396Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.pressure_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Kollektorkreis, Drucksensor PS",
      "severity":3,
      "manually_fixed":false,
      "message":" Kollektorkreis, Drucksensor PS | Die manuelle Vorgabe des Drucks wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KK.pressure_manual",
      "unix_timestamp":"2022-06-17T16:42:13.349Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.pressure_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Kollektorkreis, Drucksensor PS",
      "severity":2,
      "manually_fixed":false,
      "message":" Kollektorkreis, Drucksensor PS | Der Drucksensor ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KK.pressure_error",
      "unix_timestamp":"2022-06-17T16:42:13.337Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.TSR_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Kollektorkreis, Temperaturfühler TSR",
      "severity":3,
      "manually_fixed":false,
      "message":" Kollektorkreis, Temperaturfühler TSR | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KK.TSR_manual",
      "unix_timestamp":"2022-06-17T16:42:13.319Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.TSQ_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Kollektorkreis, Temperaturfühler TSQ",
      "severity":2,
      "manually_fixed":false,
      "message":" Kollektorkreis, Temperaturfühler TSQ | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KK.TSQ_error",
      "unix_timestamp":"2022-06-17T16:42:13.304Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.TSP_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Kollektorkreis, Temperaturfühler TSP",
      "severity":3,
      "manually_fixed":false,
      "message":" Kollektorkreis, Temperaturfühler TSP | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KK.TSP_manual",
      "unix_timestamp":"2022-06-17T16:42:13.291Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.TSQ_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Kollektorkreis, Temperaturfühler TSQ",
      "severity":3,
      "manually_fixed":false,
      "message":" Kollektorkreis, Temperaturfühler TSQ | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KK.TSQ_manual",
      "unix_timestamp":"2022-06-17T16:42:13.278Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.TSK_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Kollektorkreis, Temperaturfühler TSK",
      "severity":2,
      "manually_fixed":false,
      "message":" Kollektorkreis, Temperaturfühler TSK | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KK.TSK_error",
      "unix_timestamp":"2022-06-17T16:42:13.265Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.TSR_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Kollektorkreis, Temperaturfühler TSR",
      "severity":2,
      "manually_fixed":false,
      "message":" Kollektorkreis, Temperaturfühler TSR | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KK.TSR_error",
      "unix_timestamp":"2022-06-17T16:42:13.252Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WK.pump_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Weichenkreis, Pumpe PU Wk",
      "severity":3,
      "manually_fixed":false,
      "message":" Weichenkreis, Pumpe PU Wk | Der manuelle Betrieb wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WK.pump_manual",
      "unix_timestamp":"2022-06-17T16:42:13.238Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WK.pump_no_response",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Weichenkreis, Pumpe PU Wk",
      "severity":2,
      "manually_fixed":false,
      "message":" Weichenkreis, Pumpe PU Wk | Es wurde keine Betriebsmeldung der Pumpe registriert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WK.pump_no_response",
      "unix_timestamp":"2022-06-17T16:42:13.226Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.TSK_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Kollektorkreis, Temperaturfühler TSK",
      "severity":3,
      "manually_fixed":false,
      "message":" Kollektorkreis, Temperaturfühler TSK | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KK.TSK_manual",
      "unix_timestamp":"2022-06-17T16:42:13.214Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KK.TSP_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Kollektorkreis, Temperaturfühler TSP",
      "severity":2,
      "manually_fixed":false,
      "message":" Kollektorkreis, Temperaturfühler TSP | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KK.TSP_error",
      "unix_timestamp":"2022-06-17T16:42:13.202Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.TRQX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Erdwärmepumpe, Temperaturfühler TRQWP2",
      "severity":3,
      "manually_fixed":false,
      "message":" Erdwärmepumpe, Temperaturfühler TRQWP2 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP2.TRQX_manual",
      "unix_timestamp":"2022-06-17T16:42:13.187Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.TRQX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Erdwärmepumpe, Temperaturfühler TRQWP2",
      "severity":2,
      "manually_fixed":false,
      "message":" Erdwärmepumpe, Temperaturfühler TRQWP2 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP2.TRQX_error",
      "unix_timestamp":"2022-06-17T16:42:13.174Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.TVQX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Erdwärmepumpe, Temperaturfühler TVQWP2",
      "severity":3,
      "manually_fixed":false,
      "message":" Erdwärmepumpe, Temperaturfühler TVQWP2 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP2.TVQX_manual",
      "unix_timestamp":"2022-06-17T16:42:13.161Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.TVQX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Erdwärmepumpe, Temperaturfühler TVQWP2",
      "severity":2,
      "manually_fixed":false,
      "message":" Erdwärmepumpe, Temperaturfühler TVQWP2 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP2.TVQX_error",
      "unix_timestamp":"2022-06-17T16:42:13.149Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.TRVX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Erdwärmepumpe, Temperaturfühler TRSWP2",
      "severity":3,
      "manually_fixed":false,
      "message":" Erdwärmepumpe, Temperaturfühler TRSWP2 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP2.TRVX_manual",
      "unix_timestamp":"2022-06-17T16:42:13.125Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.TVVX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Erdwärmepumpe, Temperaturfühler TVSWP2",
      "severity":3,
      "manually_fixed":false,
      "message":" Erdwärmepumpe, Temperaturfühler TVSWP2 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP2.TVVX_manual",
      "unix_timestamp":"2022-06-17T16:42:13.113Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.TVVX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Erdwärmepumpe, Temperaturfühler TVSWP2",
      "severity":2,
      "manually_fixed":false,
      "message":" Erdwärmepumpe, Temperaturfühler TVSWP2 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP2.TVVX_error",
      "unix_timestamp":"2022-06-17T16:42:13.100Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.electricity_meter_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Stromzähler EZ WP1",
      "severity":3,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Stromzähler EZ WP1 | Die manuelle Vorgabe der elektrischen Leistung wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.electricity_meter_manual",
      "unix_timestamp":"2022-06-17T16:42:13.084Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.TRVX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Erdwärmepumpe, Temperaturfühler TRSWP2",
      "severity":2,
      "manually_fixed":false,
      "message":" Erdwärmepumpe, Temperaturfühler TRSWP2 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP2.TRVX_error",
      "unix_timestamp":"2022-06-17T16:42:13.066Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.TRHGX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Temperaturfühler TRHGWP1",
      "severity":3,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Temperaturfühler TRHGWP1 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.TRHGX_manual",
      "unix_timestamp":"2022-06-17T16:42:13.047Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.TVHGX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Temperaturfühler TVHGWP1",
      "severity":3,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Temperaturfühler TVHGWP1 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.TVHGX_manual",
      "unix_timestamp":"2022-06-17T16:42:13.032Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.TVHGX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Temperaturfühler TVHGWP1",
      "severity":2,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Temperaturfühler TVHGWP1 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.TVHGX_error",
      "unix_timestamp":"2022-06-17T16:42:12.998Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.volume_flow_hot_gas_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Volumenstromzähler VZ HGWP1",
      "severity":3,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Volumenstromzähler VZ HGWP1 | Die manuelle Vorgabe des Volumenstroms wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.volume_flow_hot_gas_manual",
      "unix_timestamp":"2022-06-17T16:42:12.985Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.TRHGX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Temperaturfühler TRHGWP1",
      "severity":2,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Temperaturfühler TRHGWP1 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.TRHGX_error",
      "unix_timestamp":"2022-06-17T16:42:12.971Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.TRQX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Temperaturfühler TRQWP1",
      "severity":3,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Temperaturfühler TRQWP1 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.TRQX_manual",
      "unix_timestamp":"2022-06-17T16:42:12.941Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.TRQX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Temperaturfühler TRQWP1",
      "severity":2,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Temperaturfühler TRQWP1 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.TRQX_error",
      "unix_timestamp":"2022-06-17T16:42:12.928Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.heat_pump_manual_x",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Abluftwärmepumpe WP1",
      "severity":3,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Abluftwärmepumpe WP1 | Der manuelle Betrieb der Wärmepumpe (Freigabe) wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.heat_pump_manual_x",
      "unix_timestamp":"2022-06-17T16:42:12.907Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.heat_pump_no_response",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Abluftwärmepumpe WP1",
      "severity":2,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Abluftwärmepumpe WP1 | Es wurde keine Betriebsmeldung registriert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.heat_pump_no_response",
      "unix_timestamp":"2022-06-17T16:42:12.896Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.volume_flow_heating_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Volumenstromzähler VZ SWP1",
      "severity":3,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Volumenstromzähler VZ SWP1 | Die manuelle Vorgabe des Volumenstroms wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.volume_flow_heating_manual",
      "unix_timestamp":"2022-06-17T16:42:12.883Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.heat_pump_malfunction",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Abluftwärmepumpe WP1",
      "severity":2,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Abluftwärmepumpe WP1 | Es liegt eine Störung vor.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.heat_pump_malfunction",
      "unix_timestamp":"2022-06-17T16:42:12.870Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.TRVX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Temperaturfühler TRSWP1",
      "severity":3,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Temperaturfühler TRSWP1 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.TRVX_manual",
      "unix_timestamp":"2022-06-17T16:42:12.853Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.TRVX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Temperaturfühler TRSWP1",
      "severity":2,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Temperaturfühler TRSWP1 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.TRVX_error",
      "unix_timestamp":"2022-06-17T16:42:12.821Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.TVVX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Temperaturfühler TVSWP1",
      "severity":2,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Temperaturfühler TVSWP1 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.TVVX_error",
      "unix_timestamp":"2022-06-17T16:42:12.806Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.TVQX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Temperaturfühler TVQWP1",
      "severity":2,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Temperaturfühler TVQWP1 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.TVQX_error",
      "unix_timestamp":"2022-06-17T16:42:12.793Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.TVVX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Temperaturfühler TVSWP1",
      "severity":3,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Temperaturfühler TVSWP1 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.TVVX_manual",
      "unix_timestamp":"2022-06-17T16:42:12.779Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KE.volume_flow_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Gaskessel, Voumenstrom VZ K",
      "severity":3,
      "manually_fixed":false,
      "message":" Gaskessel, Voumenstrom VZ K | Die manuelle Vorgabe des Volumenstroms wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KE.volume_flow_manual",
      "unix_timestamp":"2022-06-17T16:42:12.762Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KE.boiler_manual_y",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Gaskessel, Gaskessel SK",
      "severity":3,
      "manually_fixed":false,
      "message":" Gaskessel, Gaskessel SK | Der manuelle Betrieb des Gaskessels (Ausgangsspannung) wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KE.boiler_manual_y",
      "unix_timestamp":"2022-06-17T16:42:12.726Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KE.boiler_malfunction",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Gaskessel, Gaskessel SK",
      "severity":2,
      "manually_fixed":false,
      "message":" Gaskessel, Gaskessel SK | Es liegt eine Störung vor.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KE.boiler_malfunction",
      "unix_timestamp":"2022-06-17T16:42:12.698Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK2.valve_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 2, Regelventil RV HK2",
      "severity":3,
      "manually_fixed":false,
      "message":" Heizkreis 2, Regelventil RV HK2 | Der manuelle Betrieb wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK2.valve_manual",
      "unix_timestamp":"2022-06-17T16:42:12.675Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KE.TRX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Gaskessel, Temperaturfühler TRK",
      "severity":2,
      "manually_fixed":false,
      "message":" Gaskessel, Temperaturfühler TRK | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KE.TRX_manual",
      "unix_timestamp":"2022-06-17T16:42:12.650Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KE.TVX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Gaskessel, Temperaturfühler TVK",
      "severity":3,
      "manually_fixed":false,
      "message":" Gaskessel, Temperaturfühler TVK | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KE.TVX_manual",
      "unix_timestamp":"2022-06-17T16:42:12.638Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KE.TVX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Gaskessel, Temperaturfühler TVK",
      "severity":2,
      "manually_fixed":false,
      "message":" Gaskessel, Temperaturfühler TVK | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KE.TVX_error",
      "unix_timestamp":"2022-06-17T16:42:12.625Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK2.volume_flow_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 2, Voumenstrom VZ HK2",
      "severity":3,
      "manually_fixed":false,
      "message":" Heizkreis 2, Voumenstrom VZ HK2 | Die manuelle Vorgabe des Volumenstroms wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK2.volume_flow_manual",
      "unix_timestamp":"2022-06-17T16:42:12.611Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_KE.TRX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Gaskessel, Temperaturfühler TRK",
      "severity":3,
      "manually_fixed":false,
      "message":" Gaskessel, Temperaturfühler TRK | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_KE.TRX_error",
      "unix_timestamp":"2022-06-17T16:42:12.595Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.volume_flow_heating_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Erdwärmepumpe, Volumenstromzähler VZ SWP2",
      "severity":3,
      "manually_fixed":false,
      "message":" Erdwärmepumpe, Volumenstromzähler VZ SWP2 | Die manuelle Vorgabe des Volumenstroms wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP2.volume_flow_heating_manual",
      "unix_timestamp":"2022-06-17T16:42:12.568Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP2.heat_pump_manual_x",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Erdwärmepumpe, Abluftwärmepumpe WP2",
      "severity":3,
      "manually_fixed":false,
      "message":" Erdwärmepumpe, Abluftwärmepumpe WP2 | Der manuelle Betrieb der Wärmepumpe (Freigabe) wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP2.heat_pump_manual_x",
      "unix_timestamp":"2022-06-17T16:42:12.554Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK1.valve_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 1, Regelventil RV HK1",
      "severity":3,
      "manually_fixed":false,
      "message":" Heizkreis 1, Regelventil RV HK1 | Der manuelle Betrieb wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK1.valve_manual",
      "unix_timestamp":"2022-06-17T16:42:12.521Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_WP1.TVQX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Abluftwärmepumpe, Temperaturfühler TVQWP1",
      "severity":3,
      "manually_fixed":false,
      "message":" Abluftwärmepumpe, Temperaturfühler TVQWP1 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_WP1.TVQX_manual",
      "unix_timestamp":"2022-06-17T16:42:12.505Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK1.TRX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 1, Temperaturfühler TRHK1",
      "severity":3,
      "manually_fixed":false,
      "message":" Heizkreis 1, Temperaturfühler TRHK1 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK1.TRX_manual",
      "unix_timestamp":"2022-06-17T16:42:12.478Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK1.TRX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 1, Temperaturfühler TRHK1",
      "severity":2,
      "manually_fixed":false,
      "message":" Heizkreis 1, Temperaturfühler TRHK1 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK1.TRX_error",
      "unix_timestamp":"2022-06-17T16:42:12.465Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK1.TVX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 1, Temperaturfühler TVHK1",
      "severity":3,
      "manually_fixed":false,
      "message":" Heizkreis 1, Temperaturfühler TVHK1 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK1.TVX_manual",
      "unix_timestamp":"2022-06-17T16:42:12.451Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK1.TVX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 1, Temperaturfühler TVHK1",
      "severity":2,
      "manually_fixed":false,
      "message":" Heizkreis 1, Temperaturfühler TVHK1 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK1.TVX_error",
      "unix_timestamp":"2022-06-17T16:42:12.438Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK2.TRX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 2, Temperaturfühler TRHK2",
      "severity":3,
      "manually_fixed":false,
      "message":" Heizkreis 2, Temperaturfühler TRHK2 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK2.TRX_manual",
      "unix_timestamp":"2022-06-17T16:42:12.419Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK2.TRX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 2, Temperaturfühler TRHK2",
      "severity":2,
      "manually_fixed":false,
      "message":" Heizkreis 2, Temperaturfühler TRHK2 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK2.TRX_error",
      "unix_timestamp":"2022-06-17T16:42:12.406Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK2.TVX_error",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 2, Temperaturfühler TVHK2",
      "severity":2,
      "manually_fixed":false,
      "message":" Heizkreis 2, Temperaturfühler TVHK2 | Der Temperaturfühler ist defekt oder nicht angeschlossen.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK2.TVX_error",
      "unix_timestamp":"2022-06-17T16:42:12.391Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK2.pump_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 2, Pumpe PU HK2",
      "severity":3,
      "manually_fixed":false,
      "message":" Heizkreis 2, Pumpe PU HK2 | Der manuelle Betrieb wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK2.pump_manual",
      "unix_timestamp":"2022-06-17T16:42:12.377Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK2.pump_no_response",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 2, Pumpe PU HK2",
      "severity":2,
      "manually_fixed":false,
      "message":" Heizkreis 2, Pumpe PU HK2 | Es wurde keine Betriebsmeldung der Pumpe registriert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK2.pump_no_response",
      "unix_timestamp":"2022-06-17T16:42:12.343Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK2.TVX_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 2, Temperaturfühler TVHK2",
      "severity":3,
      "manually_fixed":false,
      "message":" Heizkreis 2, Temperaturfühler TVHK2 | Die manuelle Vorgabe des Temperaturwerts wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK2.TVX_manual",
      "unix_timestamp":"2022-06-17T16:42:12.329Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK1.pump_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 1, Pumpe PU HK1",
      "severity":3,
      "manually_fixed":false,
      "message":" Heizkreis 1, Pumpe PU HK1 | Der manuelle Betrieb wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK1.pump_manual",
      "unix_timestamp":"2022-06-17T16:42:12.304Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK1.volume_flow_manual",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 1, Voumenstrom VZ HK1",
      "severity":3,
      "manually_fixed":false,
      "message":" Heizkreis 1, Voumenstrom VZ HK1 | Die manuelle Vorgabe des Volumenstroms wurde aktiviert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK1.volume_flow_manual",
      "unix_timestamp":"2022-06-17T16:42:12.292Z",
      "resolved":true,
      "read":false,
      "relevant":false
   },
   {
      "alarm_id":"ns=6;s=AlarmsConditions|CC_HK1.pump_no_response",
      "location":{
         "building":"Mendelstrasse 5"
      },
      "device":"Heizkreis 1, Pumpe PU HK1",
      "severity":2,
      "manually_fixed":false,
      "message":" Heizkreis 1, Pumpe PU HK1 | Es wurde keine Betriebsmeldung der Pumpe registriert.",
      "node_id":"ns=6;s=AlarmsConditions|CC_HK1.pump_no_response",
      "unix_timestamp":"2022-06-17T16:42:12.280Z",
      "resolved":true,
      "read":false,
      "relevant":false
   }
]

module.exports = tt;