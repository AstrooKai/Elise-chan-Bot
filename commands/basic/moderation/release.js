module.exports = {
  name: "release",
  aliases: ["unrashomon"],
  code: `$channelSendMessage[$getVar[logChannel];{newEmbed:{title:Arrest Log}{field:Staff:<@$authorID> ($authorID)}{field:User Released:<@$findMember[$message[1];no]> ($findMember[$message[1];no])}{field:Time & Date:<t:$truncate[$divide[$dateStamp;1000]]:F>}{field:Place of Occurrence:<#$channelID> ($channelID)}{color:$getVar[default]}{timestamp}}]
$title[1;RELEASED]
$description[1;***$userTag[$findMember[$message[1];no]]*** *has been granted mercy by the Port Mafia.*]
$color[1;$getVar[default]]
$takeRole[$guildID;$findMember[$message[1];no];933655133332602880]
$clear[1;$authorID]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{newEmbed:{author:ERR-05 Heirachy:http://co.daki.cc:4188/media/err.png}{description:$getVar[err05]}{color:$getVar[red]}}]
$onlyIf[$isBot[$findMember[$message[1];no]]==false;{newEmbed:{author:ERR-03 User is Bot:http://co.daki.cc:4188/media/err.png}{description:$getVar[err03]}{color:$getVar[red]}}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{newEmbed:{author:ERR-04 User is Author:http://co.daki.cc:4188/media/err.png}{description:$getVar[err04]}{coor:$getVar[red]}}]
$onlyIf[$memberExists[$findMember[$message[1];no];$guildID]==true;{newEmbed:{author:ERR-00 User Invalid:http://co.daki.cc:4188/media/err.png}{description:$getVar[err00]}{color:$getVar[red]}]
$argsCheck[>0;{newEmbed:{author:ERR-02 Bad Request:http://co.daki.cc:4188/media/err.png}{description:$getVar[err02]}{field:Usage:$jsonRequest[http://co.daki.cc:4188/commands/release;Usage]:yes}{color:$getVar[red]}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:http://co.daki.cc:4188/media/err.png}{description:$getVar[err01]}{color:$getVar[red]}}]`
}