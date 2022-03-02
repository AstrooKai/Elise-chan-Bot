module.exports = {
  name: "kick",
  aliases: ['fallingcamellia'],
  code: `$channelSendMessage[924580942281068554;{title:Kick Log}{description:
**$userTag** kicked **$userTag[$findMember[$mentioned[1];no]]**!
> **Moderator**
$userTag
> **User Banned**
$userTag[$mentioned[1]] ($mentioned[1])
> **Time of Occurence**
$day[yes] $month $day $year - $hour:$minute:$second UTC
> **Channel Where Command Is Executed**
$channelName ($channelID)
> **Reason**$if[$checkContains[$message;!r]==true]

$splitText[2]
$textSplit[$message;!r]
$else
\` No Reason \`
$endif}{color:$getVar[default]}{timestamp}]
$channelSendMessage[922407637411328010;{title:Kick Log}{description:
**$userTag** kicked **$userTag[$findMember[$mentioned[1];no]]**!

> **Moderator**
$userTag
> **User Banned**
$userTag[$mentioned[1]] ($mentioned[1])
> **Time of Occurence**
$day[yes] $month $day $year - $hour:$minute:$second UTC
> **Channel Where Command Is Executed**
$channelName ($channelID)
> **Reason**$if[$checkContains[$message;!r]==true]

$splitText[2]
$textSplit[$message;!r]
$else
\` No Reason \`
$endif}{color:$getVar[default]}{timestamp}]

$if[$isUserDMEnabled[$mentioned[1]]==true]
$sendDM[$mentioned[1];{title:Notofication}{description:You are banned from **Bar Lupin**. server for
$if[$checkContains[$message;!r]==true]

$splitText[2]
$textSplit[$message;!r]
$else
\` No Reason \`
$endif}{color:$getVar[default]}{timestamp}]
$else
$log[A user cannot be DM'ed. - Ban Command]
$endif

$title[KICKED!]
$description[$userTag[$mentioned[1]] has experienced the power of *Falling Camellia*.]
$image[https://eca.kyle9.repl.co/cdn/media/kick.gif]
$color[$getVar[default]]
$addTimestamp
$kick[$mentioned[1];$replaceText[$textSplit[2]; ;No Reason]]
$textSplit[$message;!r]
$deletecommand

$$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{description:You can't kick someone who is higher than you!}{color:$getVar[red]}]
$onlyIf[$isBot[$mentioned[1]]!=true;{description:You can't kick a bot!}{color:$getVar[default]}]
$onlyIf[$mentioned[1]!=$authorID;{description:You can't kick yourself!}{color:$getVar[red]}]
$onlyIf[$mentioned[1]!=;{description:Please mention the user you want to kick!}{color:$getVar[default]}]
$argsCheck[1;{title:Usage}{description:\`?kick <@user> !r <reason>\`}{footer:Reason is optional}{color:$getVar[red]}]
$onlyPerms[kick;{description:You can't use this command!}{color:$getVar[red]}]`
}
