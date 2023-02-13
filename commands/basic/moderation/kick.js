module.exports = {
  name: "kick",
  aliases: ["fallingcamellia"],
  code: `$channelSendMessage[$getVar[logChannel];{newEmbed:{title:Kick Log}{field:Staff:<@$authorID> ($authorID)}{field:User Kicked:<@$$findMember[$message[1];false]> ($findMember[$message[1];false])}{field:Reason:$if[$checkContains[$splitText[2];!r]==true;$splitText[2];No Reason Specified]}{field:Time & Date:<t:$truncate[$divide[$dateStamp;1000]]:F>}{field:Place of Occurrence:<#$channelID> ($channelID)}{color:$getVar[default]}{timestamp}}]
$title[1;KICKED!]
$description[1;***$userTag[$findMember[$message[1];false]]*** *has experienced the power of Falling Camellia.*]
$image[1;http://co.daki.cc:4188/cdn/media/kick.gif]
$color[1;$getVar[default]]
$kick[$findMember[$message[1];false];$guildID;$if[$checkContains[$splitText[2];!r]==true;$splitText[2];No Reason Specified]]
$splitText[$message;!r ]
$clear[1;$authorID]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];false]]];{newEmbed:{author:ERR-05 Heirachy:http://co.daki.cc:4188/media/err.png}{description:$getVar[err05]}{color:$getVar[red]}}]
$onlyIf[$isBot[$findMember[$message[1];false]]==false;{newEmbed:{author:ERR-03 User is Bot:http://co.daki.cc:4188/media/err.png}{description:$getVar[err03]}{color:$getVar[red]}}]
$onlyIf[$findMember[$message[1];false]!=$authorID;{newEmbed:{author:ERR-04 User is Author:http://co.daki.cc:4188/media/err.png}{description:$getVar[err04]}{coor:$getVar[red]}}]
$onlyIf[$memberExists[$findMember[$message[1];false];$guildID]==true;{newEmbed:{author:ERR-00 User Invalid:http://co.daki.cc:4188/media/err.png}{description:$getVar[err00]}{color:$getVar[red]}]
$argsCheck[>0;{newEmbed:{author:ERR-02 Bad Request:http://co.daki.cc:4188/media/err.png}{description:$getVar[err02]}{field:Usage:$jsonRequest[http://co.daki.cc:4188/commands/kick;Usage]:yes}{color:$getVar[red]}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:http://co.daki.cc:4188/media/err.png}{description:$getVar[err01]}{color:$getVar[red]}}]`
}