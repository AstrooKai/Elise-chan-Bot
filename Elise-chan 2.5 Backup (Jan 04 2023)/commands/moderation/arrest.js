module.exports = {
  name: "arrest",
  aliases: ["rashomon"],
  code: `$channelSendMessage[$getVar[logChannel];{newEmbed:{title:Arrest Log}{field:Staff:<@$authorID> ($authorID)}{field:User Arrested:<@$findMember[$message[1];no]> ($findMember[$message[1];no])}{field:Time & Date:$if[$charCount[$hour]==1;0$hour;$hour]:$minute:$second UTC $toLocaleUppercase[$month] $date $year}{field:Place of Occurrence:<#$channelID> ($channelID)}{color:$getVar[default]}{timestamp}}]

$title[1;ARRESTED!]
$description[1;***$userTag[$findMember[$message[1];no]]*** *broke a leg. Oops.*]
$image[1;https://eca.astrookai.repl.co/media/arrest.gif]
$color[1;$getVar[default]]

$giveRole[$guildID;$findMember[$message[1];no];933655133332602880]
$clear[1;$authorID]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{newEmbed:{author:ERR-05 Heirachy:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err05]}{color:$getVar[red]}}]
$onlyIf[$isBot[$findMember[$message[1];no]]==false;{newEmbed:{author:ERR-03 User is Bot:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err03]}{color:$getVar[red]}}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{newEmbed:{author:ERR-04 User is Author:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err04]}{coor:$getVar[red]}}]
$onlyIf[$memberExists[$findMember[$message[1];no];$guildID]==true;{newEmbed:{author:ERR-00 User Invalid:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err00]}{color:$getVar[red]}]
$argsCheck[>0;{newEmbed:{author:ERR-02 Bad Request:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err02]}{field:Usage:$jsonRequest[https://eca.astrookai.repl.co/commands/arrest;Usage]:yes}{color:$getVar[red]}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err01]}{color:$getVar[red]}}]`
}