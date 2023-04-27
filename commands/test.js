module.exports = {
  name: "riddle",
  prototype: "slash",
  type: "interaction",
  code: `$interactionReply[;{newEmbed:{title:Here is your riddle!}{field:Riddle:$getObjectProperty[riddle]}{field:Answer:> $getObjectProperty[answer](Tap black strip above)}{color:Random}{footer:variable[BotName]:$useravatar[$clientID]}{thumbnail:$guildicon}{timestamp}}]
  $createObject[$jsonRequest[https://apiv2.spapi.ga/misc/riddles]]`
}