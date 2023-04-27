const aoijs = require('aoi.js'); //import aoi.js
require('dotenv').config();
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

const { LoadCustomFunctions } = require('./Funcs.js');
LoadCustomFunctions(client);

//load commands from 'commands' folder
const loader = new aoijs.LoadCommands(client);
loader.setColors(loader.themes.default);
loader.load(client.cmd, './commands');

client.readyCommand({
  code: `$log[Logged in: $userTag[$clientID]]`
});

client.variables(require('./variables/variables.js')); //normal variables

require('./status.js')(client); //client status