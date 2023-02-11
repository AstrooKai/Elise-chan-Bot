module.exports = {
    name: "ban",
    aliases: ["ningenshikkaku"],
    code: `$channelSendMessage[$getVar[logChannel];{newEmbed:{title:Ban Log}{field:Staff:<@$authorID> ($authorID)}{field:User Banned:<@$$findMember[$message[1];no]> ($findMember[$message[1];no])}{field:Reason:$if[$checkContains[$splitText[2];!r]==true;$splitText[2];No Reason Specified]}{field:Time & Date:$if[$charCount[$hour]==1;0$hour;$hour]:$minute:$second UTC $toLocaleUppercase[$month] $date $year}{field:Place of Occurrence:<#$channelID> ($channelID)}{color:$getVar[default]}{timestamp}}]
  
$title[1;BANNED]
$description[1;***$userTag[$findMember[$message[1];no]]****, your ability has been nullified.*]
$image[1;https://eca.astrookai.repl.co/media/ban.gif]
$addTimestamp
$color[$getVar[default]]
  
$ban[$guildID;$findMember[$message[1];no];7;$if[$checkContains[$splitText[2];!r]==true;$splitText[2];No Reason Specified]]
$textSplit[$message[1];!r]
$clear[1;$authorID]
  
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{newEmbed:{author:ERR-05 Heirachy:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err05]}{color:$getVar[red]}}]
$onlyIf[$isBot[$findMember[$message[1];no]]==false;{newEmbed:{author:ERR-03 User is Bot:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err03]}{color:$getVar[red]}}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{newEmbed:{author:ERR-04 User is Author:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err04]}{coor:$getVar[red]}}]
$onlyIf[$memberExists[$findMember[$message[1];no];$guildID]==true;{newEmbed:{author:ERR-00 User Invalid:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err00]}{color:$getVar[red]}]
$argsCheck[>0;{newEmbed:{author:ERR-02 Bad Request:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err02]}{field:Usage:$jsonRequest[https://eca.astrookai.repl.co/commands/ban;Usage]:yes}{color:$getVar[red]}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err01]}{color:$getVar[red]}}]`
}