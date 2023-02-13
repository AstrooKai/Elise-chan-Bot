const aoijs = require('aoi.js'); //import aoi.js
const { setup } = require('aoi.parser'); //import aoi.parser
setup(aoijs.Util); //setup parser

//configure client
const client = new aoijs.AoiClient({
  token: process.env.TOKEN, //client token
  prefix: process.env.PREFIX, //client prefix
  intents: ['MessageContent','GuildMessages','Guilds','GuildPresences'], //client intents
  events: ['onMessage','onFunctionError','onInteractionCreate'], //client events
  aoiWarning: false //disable unnecessary outdated package warning log
});

//load commands from 'commands' folder
const loader = new aoijs.LoadCommands(client);
loader.load(client.cmd, './commands');

client.readyCommand({
  code: `$log[Logged in on: $userTag[$clientID]]`
});

require('./variables.js')(client); //variables
require('./status.js')(client); //client status
require('./customFuncs.js')(client); //custom functions