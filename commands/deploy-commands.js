module.exports = {
  name: "deploy",
  code: `
$createApplicationCommand[$guildID;addmeme;add meme to the bot's API;true;slash;[{"name": "name", "description": "name of the meme", "required": true, "type": 3},{"name": "url", "description": "URL of the meme", "required": true, "type": 3}]]
AddMeme command deployed

$createApplicationCommand[$guildID;addgif;add GIF to the bot's API;true;slash;[{"name": "name", "description": "name of the GIF", "required": true, "type": 3},{"name": "url", "description": "URL of the GIF", "required": true, "type": 3}]]
AddGIF command deployed

$createApplicationCommand[$guildID;unban;unban a user from the server;true;slash;[{"name": "user", "description": "user ID to unban", "required": true, "type": 3},{"name": "reason", "description": "reason of unbanning", "required": false, "type": 3}]]Unban command deployed

$createApplicationCommand[$guildID;release;release a member from jail;true;slash;[{"name": "user", "description": "member to release", "required": true, "type": 6}]]Release command deployed

$createApplicationCommand[$guildID;kick;kick a member;true;slash;[{"name": "user", "description": "member to kick", "required": true, "type": 6},{"name": "reason", "description": "reason of kicking", "required": false, "type": 3}]]Kick command deployed

$createApplicationCommand[$guildID;verify;get verify to access the server;true;slash;[{"name": "code", "description": "code found in the captcha", "required": true, "type": 3}]]Verify command deployed

$createApplicationCommand[$guildID;ban;ban a member;true;slash;[{"name": "user", "description": "member to ban", "required": true, "type": 6},{"name": "reason", "description": "reason of banning", "required": false, "type": 3}]]Ban command deployed

$createApplicationCommand[$guildID;arrest;put a member to jail;true;slash;[{"name": "user", "description": "member to arrest", "required": true, "type": 6}]]Arrest command deployed`
}