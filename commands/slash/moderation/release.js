module.exports = {
  name: "release",
  prototype: "slash",
  type: "interaction",
  code: `$channelSendMessage[$getVar[logChannel];{newEmbed:{title:Arrest Log}{field:Staff:<@$interactionData[author.id]> ($interactionData[author.id])}{field:User Arrested:<@$findMember[$slashOption[user];false]> ($findMember[$slashOption[user];false])}{field:Time & Date:<t:$truncate[$divide[$dateStamp;1000]]:F>}{field:Place of Occurrence:<#$interactionData[channel.id]> ($interactionData[channel.id])}{color:$getVar[default]}{timestamp}}]

$interactionReply[;{newEmbed:{title:RELEASED!}{description:***$userTag[$findMember[$message[1];false]]*** *has been granted mercy by the Port Mafia.*}{color:#bd7a21}};;;all;false]

$takeRole[$guildID;$findMember[$slashOption[user];false];933655133332602880]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$slashOption[user];false]]];{newEmbed:{author:Heirachy:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err05]}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$onlyIf[$isBot[$findMember[$slashOption[user];false]]==false;{newEmbed:{author:User is Bot:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err03]}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$onlyIf[$findMember[$slashOption[user];false]!=$authorID;{newEmbed:{author:User is Author:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err04]}{coor:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$onlyIf[$memberExists[$findMember[$slashOption[user];false];$guildID]==true;{newEmbed:{author:User Invalid:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err00]}{color:Red}]
$argsCheck[>0;{newEmbed:{author:Bad Request:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err02]}{field:Usage:$jsonRequest[https#COLON#//eca.astrookai.repl.co/commands/arrest;Usage]:yes}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:Unauthorized:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err01]}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]`
}