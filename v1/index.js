const aoijs = require("aoi.js") // Imports aoi.js packge

// Bot configuration
const bot = new aoijs.Bot({
  token: 'TOKEN', // Discord Bot Token
  prefix: "?" // Discord Bot Prefix
})

// Allows commands to be executed
bot.onMessage();

// Loads all commands from 'commands' folder
bot.loadCommands(`./commands/`)

// Bot ready event
bot.readyCommand({
  channel: "",
  code: `$log[Elise-chan is ready!]`
});

// Bot variables
bot.variables({
  default: "#bd7a21", // Default color for embed messages
  green: "#00ff7f", // Green color for embed messages
  red: "#dc143c" // Red color for embed error messages
})

// Bot status
bot.status({
  text: "Bar Lupin",
  type: "WATCHING",
  time: 12
})
