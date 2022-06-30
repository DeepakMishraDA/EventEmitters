const NodeChache = require('node-cache');
const axios = require('axios');
const util = require('util');


const ourChache = new NodeChache({stdTTL: 10});
 
function dataFetch (url, res) {
    axios.get(url).then(data=>{
        //const datum = JSON.parse(data);
        console.log(data.data);
    })
}
dataFetch("https://jsonplaceholder.typicode.com/photos")
module.exports = dataFetch;