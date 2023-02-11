module.exports = {
  name: "unban",
  aliases: ['thoushaltnotdie'],
  code: `$channelSendMessage[LOG_CHANNEL1_ID;{title:Unban Log}{description:
**$userTag** unbanned **$userTag[$message[1]]**!

> **Moderator**
$userTag
> **User Unbanned**
$userTag[$message[1]] ($message[1])
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
$channelSendMessage[922407637411328010;{title:Unban Log}{description:
**$userTag** unbanned **$userTag[$message[1]]**!

> **Moderator**
$userTag
> **User Unbanned**
$userTag[$message[1]] ($message[1])
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
$sendDM[$mentioned[1];{title:Notification}{description:You are now unbanned from **Bar Lupin**. server for
$if[$checkContains[$message;!r]==true]

$splitText[2]
$textSplit[$message;!r]
$else
\` No Reason \`
$endif}{color:$getVar[default]}{timestamp}]
$else
$log[A user cannot be DM'ed. - Ban Command]
$endif

$title[UNBANNED!]
$description[Yosano has decided to keep you alive. Consider yourself (un)lucky, **$userTag[$message[1]]**.]
$image[https://eca.kyle9.repl.co/media/unban.gif]
$color[$getVar[default]]
$addTimestamp
$unban[$message[1];$replaceText[$textSplit[2]; ;No Reason]]
$textSplit[$message;!r]
$deletecommand

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{description:You can't unban someone who is higher than you!}{color:$getVar[red]}]
$onlyIf[$isBot[$mentioned[1]]!=true;{description:You can't unban a bot!}{color:$getVar[default]}]
$onlyIf[$mentioned[1]!=$authorID;{description:You can't unban yourself!}{color:$getVar[red]}]
$onlyIf[$mentioned[1]!=;{description:Please mention the user you want to unban!}{color:$getVar[default]}]
$argsCheck[1;{title:Usage}{description:\`?unban <@user> !r <reason>\`}{footer:Reason is optional}{color:$getVar[red]}]
$onlyPerms[ban;{description:You can't use this command!}{color:$getVar[red]}]`
}
