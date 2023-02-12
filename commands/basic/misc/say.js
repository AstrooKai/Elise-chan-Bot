module.exports = {
  name: "say",
  code: `$channelSendMessage[$mentionedChannels[1];$messageSlice[1;$argsCount]]
$clear[1;$authorID]
$onlyForIDs[356791504318234625;{newEmbed:{description:You're not Rintarou <@$authorID>!}{color:$getVar[red]}}]`
}