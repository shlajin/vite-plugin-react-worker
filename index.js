const clientWorkerPlugin = require("./src/clientWorkerPlugin");
const reactWorkerPlugin = require("./src/reactWorkerPlugin");
module.exports = () => [clientWorkerPlugin(), reactWorkerPlugin()];
