module.exports = {
  name: "deploy",
  code: `
$sendMessage[\`/eval\` deployed]
$createApplicationCommand[$guildID;eval;evaluate a JavaScript code;true;slash;[{
  "name": "code",
  "description": "the code to be evaluated",
  "required": true,
  "type": 3
},{
  "name": "type",
  "description": "type of the code, whether aoi or djs",
  "required": true,
  "type": 3,
  "choices": [{
    "name" : "aoi.js",
    "value" : "aoi"
  },{
    "name" : "Discord.JS",
    "value" : "djs"
  }]
}]]

$sendMessage[\`/bungomeme\` deployed]
$createApplicationCommand[$guildID;bungomeme;send a meme for you to laugh;true;slash]

$sendMessage[\`/bungogif\` deployed]
$createApplicationCommand[$guildID;bungogif;send a GIF for you to laugh;true;slash]

$sendMessage[\`/addmeme\` deployed]
$createApplicationCommand[$guildID;addmeme;add meme to the bot's API;true;slash;[{"name": "name", "description": "name of the meme", "required": true, "type": 3},{"name": "url", "description": "URL of the meme", "required": true, "type": 3}]]

$sendMessage[\`/addgif\` deployed]
$createApplicationCommand[$guildID;addgif;add GIF to the bot's API;true;slash;[{"name": "name", "description": "name of the GIF", "required": true, "type": 3},{"name": "url", "description": "URL of the GIF", "required": true, "type": 3}]]

$sendMessage[\`/unban\` deployed]
$createApplicationCommand[$guildID;unban;unban a user from the server;true;slash;[{"name": "user", "description": "user ID to unban", "required": true, "type": 3},{"name": "reason", "description": "reason of unbanning", "required": false, "type": 3}]]

$sendMessage[\`/release\` deployed]
$createApplicationCommand[$guildID;release;release a member from jail;true;slash;[{"name": "user", "description": "member to release", "required": true, "type": 6}]]

$sendMessage[\`/kick\` deployed]
$createApplicationCommand[$guildID;kick;kick a member;true;slash;[{"name": "user", "description": "member to kick", "required": true, "type": 6},{"name": "reason", "description": "reason of kicking", "required": false, "type": 3}]]

$sendMessage[\`/verify\` deployed]
$createApplicationCommand[$guildID;verify;get verify to access the server;true;slash;[{"name": "code", "description": "code found in the captcha", "required": true, "type": 3}]]

$sendMessage[\`/ban\` deployed]
$createApplicationCommand[$guildID;ban;ban a member;true;slash;[{"name": "user", "description": "member to ban", "required": true, "type": 6},{"name": "reason", "description": "reason of banning", "required": false, "type": 3}]]

$sendMessage[\`/arrest\` deployed]
$createApplicationCommand[$guildID;arrest;put a member to jail;true;slash;[{"name": "user", "description": "member to arrest", "required": true, "type": 6}]]`
}