module.exports = {
  name: "verify",
  prototype: "slash",
  type: "interaction",
  code: `$giveRole[$guildID;$authorID;$getVar[verifyRole]]

$log[{time: "$iso", captcha: "$getUserVar[userCaptchaCode]", user: $authorID, message: "user verified."}]

$interactionReply[;{newEmbed:{title:Welcome to Bar Lupin!}{description:**$userTag[$interactionData[author.id]]** you're now verified! Please proceed now to read and accept our <#924493483295801394>, before grabbing yourself some <#924517564841861120>, <#924493720399794206> and <#1001491980460765216>. Drop an <#948899156058075136> while you're at it, we hope you enjoy the server!}{color:$getVar[default]}};components?;;everyone;true]

$addCmdReactions[✅]

$setUserVar[isAuthorVerified;true;$authorID]

$onlyIf[$toUppercase[$slashOption[code]]==$getUserVar[userCaptchaCode];{newEmbed:{description:Incorrect captcha code, please try again!}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$cooldown[3s;{newEmbed:{author:ERR-06 Cooldown:https#COLON#//eca.astrookai.repl.co/media/err.png}{description:$getVar[err06] %time%!}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$onlyIf[$getUserVar[isAuthorVerified]==false;{newEmbed:{description:You are already verified!}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$log[{time: "$iso", captcha: "$getUserVar[userCaptchaCode]", user: $authorID, message: "used verify command."}]`
}