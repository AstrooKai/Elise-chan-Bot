module.exports = {
  name: "arrest",
  category: "Moderation",
  description: "puts a member to jail",
  authorizedUsers: "<@920264976663457792>, <@920265063087104000>",
  basicUsage: "?arrest @USER",
  slashUsage: "/arrest <user>",
  example: "?arrest @Wumpus#0001\n/arrest @Wumpus#0001",
  aliases: ["rashomon"],
  code: `$channelSendMessage[$getVar[logChannel];{newEmbed:{title:Arrest Log}{field:Staff:<@$authorID> ($authorID)}{field:User Arrested:<@$findMember[$message[1];false]> ($findMember[$message[1];false])}{field:Time & Date:<t:$truncate[$divide[$dateStamp;1000]]:F>}{field:Place of Occurrence:<#$channelID> ($channelID)}{color:$getVar[default]}{timestamp}}]
$title[1;ARRESTED!]
$description[1;***$userTag[$findMember[$message[1];false]]*** *broke a leg. Oops.*]
$image[1;https#COLON#//eca.astrookai.repl.co/media/arrest.gif]
$color[1;$getVar[default]]
$giveRole[$guildID;$findMember[$message[1];false];933655133332602880]
$clear[1;$authorID]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];false]]];{newEmbed:{author:ERR-05 Heirachy:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err05]}{color:Red}}]
$onlyIf[$isBot[$findMember[$message[1];false]]==false;{newEmbed:{author:ERR-03 User is Bot:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err03]}{color:Red}}]
$onlyIf[$findMember[$message[1];false]!=$authorID;{newEmbed:{author:ERR-04 User is Author:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err04]}{coor:Red}}]
$onlyIf[$memberExists[$findMember[$message[1];false];$guildID]==true;{newEmbed:{author:ERR-00 User Invalid:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err00]}{color:Red}]
$argsCheck[>0;{newEmbed:{author:ERR-02 Bad Request:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err02]}{field:Usage:$jsonRequest[https#COLON#//eca.astrookai.repl.co/commands/arrest;Usage]:yes}{color:Red}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err01]}{color:Red}}]`
}