module.exports = {
  name: "kick",
  prototype: "slash",
  type: "interaction",
  code: `$channelSendMessage[$getVar[logChannel];{newEmbed:{title:Arrest Log}{field:Staff:<@$interactionData[author.id]> ($interactionData[author.id])}{field:User Arrested:<@$findMember[$slashOption[user];no]> ($findMember[$slashOption[user];no])}{field:Reason:$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;No reason provided.];false;$slashOption[reason]]}{field:Time & Date:<t:$truncate[$divide[$dateStamp;1000]]:F>}{field:Place of Occurrence:<#$interactionData[channel.id]> ($interactionData[channel.id])}{color:$getVar[default]}{timestamp}}]

$interactionReply[;{newEmbed:{title:KICKED!}{description:***$userTag[$findMember[$slashOption[user];no]]*** *has experienced the power of Falling Camellia.*}{image:http\://co.daki.cc\:4188/media/kick.gif}{color:#bd7a21}};;;all;no]

$kick[$findMember[$slashOption[user];no];$guildID;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;No reason provided.];false;$slashOption[reason]]]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$slashOption[user];no]]];{newEmbed:{author:Heirachy:http#COLON#//co.daki.cc#COLON#4188/media/err.png}{description:$getVar[err05]}{color:Red}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyIf[$isBot[$findMember[$slashOption[user];no]]==false;{newEmbed:{author:User is Bot:http#COLON#//co.daki.cc#COLON#4188/media/err.png}{description:$getVar[err03]}{color:Red}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyIf[$findMember[$slashOption[user];no]!=$authorID;{newEmbed:{author:User is Author:http#COLON#//co.daki.cc#COLON#4188/media/err.png}{description:$getVar[err04]}{coor:Red}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyIf[$memberExists[$findMember[$slashOption[user];no];$guildID]==true;{newEmbed:{author:User Invalid:http#COLON#//co.daki.cc#COLON#4188/media/err.png}{description:$getVar[err00]}{color:Red}]
$argsCheck[>0;{newEmbed:{author:Bad Request:http#COLON#//co.daki.cc#COLON#4188/media/err.png}{description:$getVar[err02]}{field:Usage:$jsonRequest[http#COLON#//co.daki.cc#COLON#4188/commands/arrest;Usage]:yes}{color:Red}}{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:Unauthorized:http#COLON#//co.daki.cc#COLON#4188/media/err.png}{description:$getVar[err01]}{color:Red}}{options:{ephemeral}}{extraOptions:{interaction}}]`
}