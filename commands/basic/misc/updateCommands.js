module.exports = {
  name: "updateCommands",
  aliases: ['update', 'u'],
  code: `$editIn[500ms;{newEmbed:{title:Commands Reloaded!}{description:$get[after] commands reloaded, $get[new] new commands.}{color:$getVar[default]}}]
$let[new;$math[$get[after]-$get[before]]]
$let[after;$commandsCount]
$log[COMMANDS RELOADED!]
$updateCommands
$log[RELOADING COMMANDS...]
$let[before;$commandsCount]
$title[1;Updating Commands...]
$image[1;http://par01.pylexnodes.net:30113/media/loading.gif]
$color[1;$getVar[default]]`
}