const NodeChache = require('node-cache');
const axios = require('axios');

const ourChache = new NodeChache({stdTTL: 10});
const dataUrl = "https://jsonplaceholder.typicode.com/photos";

