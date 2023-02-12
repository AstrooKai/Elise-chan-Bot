const aoijs = require('aoi.js'); //import aoi.js
const config = require('./config.json'); //import config file
const { setup } = require('aoi.parser'); //import aoi.parser
setup(aoijs.Util); //setup parsers

//configure client
const client = new aoijs.AoiClient({
  token: config.token, //client token
  prefix: config.prefix, //client prefix
  intents: config.intents, //client intents
  events: {functionError: true} //allows for errors to be handled and logged
});

//command loader
const loader = new aoijs.LoadCommands(client);
loader.load(client.cmd, './commands');

require('./events.js')(client); //client events
require('./variables.js')(client); //variables
require('./status.js')(client); //client status
require('./customFuncs.js')(client); //custom functions