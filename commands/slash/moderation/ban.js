module.exports = {
  name: "ban",
  prototype: "slash",
  type: "interaction",
  code: `$channelSendMessage[$getVar[logChannel];{newEmbed:{title:Arrest Log}{field:Staff:<@$interactionData[author.id]> ($interactionData[author.id])}{field:User Arrested:<@$findMember[$slashOption[user];false]> ($findMember[$slashOption[user];false])}{field:Reason:$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;No reason provided.];false;$slashOption[reason]]}{field:Time & Date:<t:$truncate[$divide[$dateStamp;1000]]:F>}{field:Place of Occurrence:<#$interactionData[channel.id]> ($interactionData[channel.id])}{color:$getVar[default]}{timestamp}}]

$interactionReply[;{newEmbed:{title:BANNED!}{description:***$userTag[$findMember[$findMember[$slashOption[user];false]]****, your ability has been nullified.*}{image:http\://co.daki.cc\:4188/media/ban.gif}{color:#bd7a21}};;;all;false]

$ban[$guildID;$findMember[$slashOption[user];;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;No reason provided.];false;$slashOption[reason]]]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$slashOption[user];false]]];{newEmbed:{author:Heirachy:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err05]}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$onlyIf[$isBot[$findMember[$slashOption[user];false]]==false;{newEmbed:{author:User is Bot:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err03]}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$onlyIf[$findMember[$slashOption[user];false]!=$authorID;{newEmbed:{author:User is Author:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err04]}{coor:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$onlyIf[$memberExists[$findMember[$slashOption[user];false];$guildID]==true;{newEmbed:{author:User Invalid:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err00]}{color:Red}]
$argsCheck[>0;{newEmbed:{author:Bad Request:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err02]}{field:Usage:$jsonRequest[http#COLON#//par01.pylexnodes.net#COLON#30113/commands/arrest;Usage]:yes}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:Unauthorized:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err01]}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]`
}