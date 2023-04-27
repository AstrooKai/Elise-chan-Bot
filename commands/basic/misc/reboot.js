module.exports = {
  name: "reboot",
  aliases: ['restart'],
  code: `$reboot[index.js]

$author[1;System Reboot;https#COLON#//eca.astrookai.repl.co/media/system.png]
$description[1;The bot is now rebooting!]
$color[1;Green]

$onlyForIDs[$getVar[ownerID];{newEmbed:{author:ERR-01 Unauthorized:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:Due to the critical function of this command in the bot's system, this command has been restricted to the developer only for the security of the bot and the server it oversees.}{color:Red}}]`
}