module.exports = {
  name: "ban",
  aliases:['ningenshikkaku'],
  code: `$channelSendMessage[LOG_CHANNEL1_ID;{title:Ban Log}{description:
**$userTag** banned **$userTag[$findMember[$splitText[1];no]]**!

> **Moderator**
$userTag
> **User Banned**
$userTag[$findMember[$splitText[1]]] ($findMember[$splitText[1];no])
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

$channelSendMessage[922407637411328010;{title:Ban Log}{description:
**$userTag** banned **$userTag[$findMember[$splitText[1];no]]**!

> **Moderator**
$userTag
> **User Banned**
$userTag[$findMember[$splitText[1]]] ($findMember[$splitText[1];no])
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
$sendDM[$mentioned[1];{title:Notification}{description:You are banned from **Bar Lupin**. server for
$if[$checkContains[$message;!r]==true]

$splitText[2]
$textSplit[$message;!r]
$else
\` No Reason \`
$endif}{color:$getVar[default]}{timestamp}]
$else
$log[A user cannot be DM'ed. - Ban Command]
$endif

$title[BANNED!]
$description[**$userTag[$findMember[$splitText[1]]]**, your ability has been nullified.]
$image[https://eca.kyle9.repl.co/media/ban.gif]
$color[$getVar[default]]
$addTimestamp
$ban[$mentioned[1];$replaceText[$textSplit[2]; ;No Reason]]
$textSplit[$message;!r]
$deletecommand

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{description:You can't ban someone who is higher than you!}{color:$getVar[red]}]
$onlyIf[$isBot[$mentioned[1]]!=true;{description:You can't ban a bot!}{color:$getVar[default]}]
$onlyIf[$mentioned[1]!=$authorID;{description:You can't ban yourself!}{color:$getVar[red]}]
$onlyIf[$mentioned[1]!=;{description:Please mention the user you want to ban!}{color:$getVar[default]}]
$argsCheck[1;{title:Usage}{description:\`?ban <@user> !r <reason>\`}{footer:Reason is optional}{color:$getVar[red]}]
$onlyPerms[ban;{description:You can't use this command!}{color:$getVar[red]}]`
}
