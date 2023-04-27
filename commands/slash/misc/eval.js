module.exports = {
  name: "eval",
  prototype: "slash",
  type: "interaction",
  $if: "old",
  code: `$if[$slashOption[type]==aoi]
$interactionReply[\`\`\`js
$eval[$slashOption[code];true;true;true;true]
\`\`\`]
$elseif[$slashOption[type]==djs]
$interactionReply[\`\`\`js
Executed: $djsEval[$slashOption[code];true]
\`\`\`]
$endelseif
$endif
$onlyForIDs[$getVar[ownerID];{newEmbed:{author:ERR-01 Unauthorized:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:Due to the critical function of this command in the bot's system, this command has been restricted to the developer only for the security of the bot and the server it oversees.}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]`
}