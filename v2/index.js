const aoijs = require('aoi.js'); // Imports aoi.js

// Sets up the 'client' that will be used by the bot
const client = new aoijs.AoiClient({
  token: 'OTQ3ODY0NTExODk1OTY5ODEy.GhwuSF.6nZRhii2xEmIp7PeXLs8nbWNKZM_HUvgfgF7g0',
  prefix: '>',
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
});

// Callback that monitors every messages sent, required for the bot to communicate
client.onMessage();
client.onJoin();

// Loads command files from the 'commands' folder
const loader = new aoijs.LoadCommands(client)
loader.load(client.cmd,"./commands/")

client.readyCommand({
  channel: "",
  code: `$log[Ready on $userTag[$clientID]]`
});

client.functionManager.createCustomFunction({
name : '$percent',
params : ['number','percent'],
type : 'aoi.js',
code : `$math[({percent}/100)*{number}]`
})

// Important variables
client.variables({
  authorizedOne: "920264976663457792",
  authorizedTwo: "920265063087104000",
  botVersion: "2.0.0",
  captchaChannel: "933384124289417236",
  default: "#bd7a21",
  green: "#00fa9a",
  logChannel: "922407637411328010",
  no: "❌",
  ownerID: "714086889878978582",
  red: "#dc143c",
  userCaptchaCode: "",
  userinf: 0,
  isAuthorVerified: "false",
  verifyRole: "924527753913585674"
});

// Error message variables
client.variables({
  err00: "The user you provided in \`TARGET_USER\` parameter is invalid or cannot be found!",
  err01: "You are not authorized to use this command!",
  err02: "Please include atleast one arg/parameter! Please refer to the correct usage below.",
  err03: "The user you specified is a bot! You can't use this command against a bot!",
  err04: "You can't use this command against yourself!",
  err05: "The user you specified is higher than you! You can't use this command against them!",
  err06: "Command in cooldown, please wait for",
  err07: "An error occured during commnication with the API!"
});

// Sets up the bot's status, shows in the bot's in-app profile
client.status({
  text: "RIP Elise-chan 1.0",
  type: "PLAYING",
  time: 12
});