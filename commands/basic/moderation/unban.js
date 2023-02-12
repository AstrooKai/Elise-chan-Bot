module.exports = {
  name: "unban",
  aliases: ["thoushaltnotdie"],
  code: `$channelSendMessage[$getVar[logChannel];{newEmbed:{title:Unban Log}{field:Staff:<@$authorID> ($authorID)}{field:User Unbanned:<@$message[1]> ($message[1])}{field:Reason:$if[$checkContains[$splitText[2];!r]==true;$splitText[2];No Reason Specified]}{field:Time & Date:<t:$truncate[$divide[$dateStamp;1000]]:F>}{field:Place of Occurrence:<#$channelID> ($channelID)}{color:$getVar[default]}{timestamp}}]
$title[1;UNBANNED]
$description[1;*Yosano has decided to keep you alive. Consider yourself (un)lucky,* ***$userTag[$message[1]]***.]
$image[1;http://co.daki.cc:4188/media/unban.gif]
$color[1;$getVar[default]]
$unban[$message[1];$if[$checkContains[$splitText[2];!r]==true;$splitText[2];No Reason Specified]]
$clear[1;$authorID]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{newEmbed:{author:ERR-05 Heirachy:http://co.daki.cc:4188/media/err.png}{description:$getVar[err05]}{color:$getVar[red]}}]
$onlyIf[$isBot[$findMember[$message[1];no]]==false;{newEmbed:{author:ERR-03 User is Bot:http://co.daki.cc:4188/media/err.png}{description:$getVar[err03]}{color:$getVar[red]}}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{newEmbed:{author:ERR-04 User is Author:http://co.daki.cc:4188/media/err.png}{description:$getVar[err04]}{coor:$getVar[red]}}]
$onlyIf[$userExists[$findMember[$message[1];no];$guildID]!=;{newEmbed:{author:ERR-00 User Invalid:http://co.daki.cc:4188/media/err.png}{description:$getVar[err00]}{color:$getVar[red]}]
$argsCheck[>0;{newEmbed:{author:ERR-02 Bad Request:http://co.daki.cc:4188/media/err.png}{description:$getVar[err02]}{field:Usage:$jsonRequest[http://co.daki.cc:4188/commands/unban;Usage]:yes}{color:$getVar[red]}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:http://co.daki.cc:4188/media/err.png}{description:$getVar[err01]}{color:$getVar[red]}}]`
}