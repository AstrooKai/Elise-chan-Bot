module.exports = {
  name: "unban",
  aliases: ["thoushaltnotdie"],
  code: `$channelSendMessage[$getVar[logChannel];{newEmbed:{title:Unban Log}{field:Staff:<@$authorID> ($authorID)}{field:User Unbanned:<@$message[1]> ($message[1])}{field:Reason:$if[$checkContains[$splitText[2];!r]==true;$splitText[2];No Reason Specified]}{field:Time & Date:<t:$truncate[$divide[$dateStamp;1000]]:F>}{field:Place of Occurrence:<#$channelID> ($channelID)}{color:$getVar[default]}{timestamp}}]
$title[1;UNBANNED]
$description[1;*Yosano has decided to keep you alive. Consider yourself (un)lucky,* ***$userTag[$message[1]]***.]
$image[1;http#COLON#//par01.pylexnodes.net#COLON#30113/media/unban.gif]
$color[1;$getVar[default]]
$unban[$message[1];$if[$checkContains[$splitText[2];!r]==true;$splitText[2];No Reason Specified]]
$clear[1;$authorID]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];false]]];{newEmbed:{author:ERR-05 Heirachy:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err05]}{color:Red}}]
$onlyIf[$isBot[$findMember[$message[1];false]]==false;{newEmbed:{author:ERR-03 User is Bot:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err03]}{color:Red}}]
$onlyIf[$findMember[$message[1];false]!=$authorID;{newEmbed:{author:ERR-04 User is Author:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err04]}{coor:Red}}]
$onlyIf[$userExists[$findMember[$message[1];false];$guildID]!=;{newEmbed:{author:ERR-00 User Invalid:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err00]}{color:Red}]
$argsCheck[>0;{newEmbed:{author:ERR-02 Bad Request:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err02]}{field:Usage:$jsonRequest[http#COLON#//par01.pylexnodes.net#COLON#30113/commands/unban;Usage]:yes}{color:Red}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err01]}{color:Red}}]`
}