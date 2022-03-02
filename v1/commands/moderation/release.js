module.exports = {
  name: "release",
  aliases: ['unrashomon'],
  code: `$channelSendMessage[924580942281068554;{title:Release Log}{description:**$userTag** released **$userTag[$mentioned[1]]**

> **Moderator**
$userTag ($authorID)
> **User Released**
$userTag[$mentioned[1]] ($mentioned[1])
> **Time of Ocurence**
$day[yes] $month $day $year - $hour:$minute:$second UTC
> **Channel Where Command Is Executed**
$channelName ($channelID)}{color:$getVar[default]}{timestamp}]
$channelSendMessage[922407637411328010;{title:Release Log}{description:**$userTag** arrested **$userTag[$mentioned[1]]**

> **Moderator**
$userTag ($authorID)
> **User Released**
$userTag[$mentioned[1]] ($mentioned[1])
> **Time of Ocurence**
$day[yes] $month $day $year - $hour:$minute:$second UTC
> **Channel Where Command Is Executed**
$channelName ($channelID)}{color:$getVar[default]}{timestamp}]

$if[$isUserDMEnabled[$mentioned[1]]==true]
$sendDM[$mentioned[1];{title:Notofication}{description:You are now released on **Bar Lupin**. You access to the rest of the server are now restored.}{color:$getVar[default]}{timestamp}]
$else
$log[A user cannot be DM'ed. - Arrest Command]
$endif

$title[RELEASED!]
$description[**$userTag[$mentioned[1]]** has been granted mercy by the Port Mafia.]
$color[$getVar[default]]
$takeRole[$mentioned[1];933655133332602880]
$deletecommand

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{description:You can't release someone who is higher than you!}{color:$getVar[red]}]
$onlyIf[$isBot[$mentioned[1]]!=true;{description:You can't release a bot!}{color:$getVar[default]}]
$onlyIf[$mentioned[1]!=$authorID;{description:You can't release yourself!}{color:$getVar[red]}]
$onlyIf[$mentioned[1]!=;{description:Please mention the user you want to release!}{color:$getVar[default]}]
$argsCheck[1;{title:Usage}{description:\`?release <@user>\`}{color:$getVar[red]}]
$onlyForRoles[920265063087104000;920264976663457792;922403776059559947;{description:You can't use this command!}{color:$getVar[red]}]`
}
