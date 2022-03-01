module.exports = {
  name: "arrest",
  aliases: ['rashomon'],
  code: `$channelSendMessage[924580942281068554;{title:Arrest Log}{description:**$userTag** arrested **$userTag[$mentioned[1]]**

> **Moderator**
$userTag ($authorID)
> **User Arrested**
$userTag[$mentioned[1]] ($mentioned[1])
> **Time of Ocurence**
$day[yes] $month $day $year - $hour:$minute:$second UTC
> **Channel Where Command Is Executed**
$channelName ($channelID)}{color:$getVar[default]}{timestamp}]
$channelSendMessage[922407637411328010;{title:Arrest Log}{description:**$userTag** arrested **$userTag[$mentioned[1]]**

> **Moderator**
$userTag ($authorID)
> **User Arrested**
$userTag[$mentioned[1]] ($mentioned[1])
> **Time of Ocurence**
$day[yes] $month $day $year - $hour:$minute:$second UTC
> **Channel Where Command Is Executed**
$channelName ($channelID)}{color:$getVar[default]}{timestamp}]

$if[$isUserDMEnabled[$mentioned[1]]==true]
$sendDM[$mentioned[1];{title:Notofication}{description:You were arrested at **Bar Lupin**. You will temporarily lose access to the rest of the server.}{color:$getVar[default]}{timestamp}]
$else
$log[A user cannot be DM'ed. - Arrest Command]
$endif

$title[ARRESTED!]
$description[**$userTag[$mentioned[1]]** broke a leg. Oops.]
$image[https://eca.kyle9.repl.co/media/arrest.gif]
$color[$getVar[default]]
$giveRole[$mentioned[1];933655133332602880]
$deletecommand

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{description:You can't arrest someone who is higher than you!}{color:$getVar[red]}]
$onlyIf[$isBot[$mentioned[1]]!=true;{description:You can't arrest a bot!}{color:$getVar[default]}]
$onlyIf[$mentioned[1]!=$authorID;{description:You can't arrest yourself!}{color:$getVar[red]}]
$onlyIf[$mentioned[1]!=;{description:Please mention the user you want to arrest!}{color:$getVar[default]}]
$argsCheck[1;{title:Usage}{description:\`?arrest <@user>\`}{color:$getVar[red]}]
$onlyForRoles[920265063087104000;920264976663457792;922403776059559947;{description:You can't use this command!}{color:$getVar[red]}]`
}
