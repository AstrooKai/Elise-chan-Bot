module.exports = [{
  channel: "933384124289417236",
  name: "captcha",
  type: "join",
  code: `$channelSendMessage[933384124289417236;<@$authorID>{newEmbed:{author:Verification:https://eca.astrookai.repl.co/media/verify-shield.png}{description:Welcome to **Bar Lupin**! Please solve the captcha below to verify that you are not a bot, this is to prevent unwanted accounts that may cause issues in the community.\n\nTo verify, simply find the six character code in the image below and use the \`>verify\` command. You can refer to the usage and example below for guidance. You only have 10 minutes to complete this. Failing to complete results to auto-kick.\n\n**Usage**\n\`\`\`\n>verify <code>\n\`\`\`\n**Example**\n\`\`\`\n>verify ABCDEF\n\`\`\`}{image:$getobjectProperty[image]}{color:$getVar[default]}{timestamp}};no]
$djsEval[const d = new Date(); let year = d.getFullYear(); let month = d.getMonth(); let day = d.getDate(); let hour = d.getHours(); let minutes = d.getMinutes(); let seconds = d.getSeconds(); let ms = d.getMilliseconds(); console.log('[CAPTCHA] ' + year + '-' + month + '-' + day + ' T' + hour + ':' + minutes + ':' + seconds + "." + ms + 'Z' + ' |  Code: $getUserVar[userCaptchaCode], User: $userTag[$authorID] ($authorID), Message: 10 minutes timer started')]
$djsEval[const d = new Date(); let year = d.getFullYear(); let month = d.getMonth(); let day = d.getDate(); let hour = d.getHours(); let minutes = d.getMinutes(); let seconds = d.getSeconds(); let ms = d.getMilliseconds(); console.log('[CAPTCHA] ' + year + '-' + month + '-' + day + ' T' + hour + ':' + minutes + ':' + seconds + "." + ms + 'Z' + ' |  Code: $getUserVar[userCaptchaCode], User: $userTag[$authorID] ($authorID), Message: User joined the server')]
$setUserVar[userCaptchaCode;$getObjectProperty[text];$authorID;$guildID]
$setUserVar[isAuthorVerified;false]
$createObject[$jsonRequest[https://eca.astrookai.repl.co/captcha;;{newEmbed:{title:Uh-oh!}{description:It seems that my API is down and I can't request your captcha challenge! Are you a real human? If so, ask for our executives to manually verify you! This error is still being figured by the developer and currently has no solution, sorry for the inconvenience! :Cry_Chuuya:}{color:$getVar[red]}}]]`
}, {
  channel: "922407203363753984",
  name: "captcha.awaitKick",
  type: "join",
  code: `$loop[1;{};captcha.awaitKick]`
}, {
  name: "captcha.awaitKick",
  type: "awaited",
  code: `$djsEval[const d = new Date(); let year = d.getFullYear(); let month = d.getMonth(); let day = d.getDate(); let hour = d.getHours(); let minutes = d.getMinutes(); let seconds = d.getSeconds(); let ms = d.getMilliseconds(); console.log('[CAPTCHA] ' + year + '-' + month + '-' + day + ' T' + hour + ':' + minutes + ':' + seconds + "." + ms + 'Z' + ' |  Code: $getUserVar[userCaptchaCode], User: $userTag[$authorID] ($authorID), Message: User is kicked')]
$kick[$authorID;$guildID;Failed to complete captcha within the 10 minutes limit.]
$onlyIf[$getUserVar[isAuthorVerified]==false;{execute:captcha.authorVerified}]
$onlyIf[$memberExists[userID;$guildID]==true;{execute:captcha.userLeft}]
$wait[10m]`
}, {
  name: "captcha.userLeft",
  type: "awaited",
  code: `$djsEval[const d = new Date(); let year = d.getFullYear(); let month = d.getMonth(); let day = d.getDate(); let hour = d.getHours(); let minutes = d.getMinutes(); let seconds = d.getSeconds(); let ms = d.getMilliseconds(); console.log('[CAPTCHA] ' + year + '-' + month + '-' + day + ' T' + hour + ':' + minutes + ':' + seconds + "." + ms + 'Z' + ' |  Code: $getUserVar[userCaptchaCode], User: $userTag[$authorID] ($authorID), Message: User left the server.')]`
}, {
  name: "captcha.authorVerified",
  type: "awaited",
  code: `$djsEval[const d = new Date(); let year = d.getFullYear(); let month = d.getMonth(); let day = d.getDate(); let hour = d.getHours(); let minutes = d.getMinutes(); let seconds = d.getSeconds(); let ms = d.getMilliseconds(); console.log('[CAPTCHA] ' + year + '-' + month + '-' + day + ' T' + hour + ':' + minutes + ':' + seconds + "." + ms + 'Z' + ' |  Code: $getUserVar[userCaptchaCode], User: $userTag[$authorID] ($authorID), Message: User is not kicked')]`
}, {
  name: "verify",
  code: `$sendDM[{newEmbed:{title:Welcome to Bar Lupin!}{description:You are now verified! Please proceed to <#924493483295801394> and read them carefully, don't forget to react to the :beer: there. You can also get some hobby and gender roles on <#924517564841861120> & <#924493720399794206>, have fun in our community!}{color:$getVar[default]}};$authorID]
$giveRole[$guildID;$authorID;$getVar[verifyRole]]
$djsEval[const d = new Date(); let year = d.getFullYear(); let month = d.getMonth(); let day = d.getDate(); let hour = d.getHours(); let minutes = d.getMinutes(); let seconds = d.getSeconds(); let ms = d.getMilliseconds(); console.log('[CAPTCHA] ' + year + '-' + month + '-' + day + ' T' + hour + ':' + minutes + ':' + seconds + "." + ms + 'Z' + ' |  Code: $getUserVar[userCaptchaCode], User: $userTag[$authorID] ($authorID), Message: User verified')]
$addCmdReactions[✅]
$setUserVar[isAuthorVerified;true;$authorID]
$onlyIf[$toUppercase[$message[1]]==$getUserVar[userCaptchaCode];{newEmbed:{description:Incorrect captcha code, please try again!}{color:$getVar[red]}}]
$cooldown[3s;{newEmbed:{author:ERR-06 Cooldown:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err06] %time%!}{color:$getVar[red]}}]
$onlyIf[$getUserVar[isAuthorVerified]==false;{newEmbed:{description:You are already verified!}{color:$getVar[red]}}]
$djsEval[const d = new Date(); let year = d.getFullYear(); let month = d.getMonth(); let day = d.getDate(); let hour = d.getHours(); let minutes = d.getMinutes(); let seconds = d.getSeconds(); let ms = d.getMilliseconds(); console.log('[CAPTCHA] ' + year + '-' + month + '-' + day + ' T' + hour + ':' + minutes + ':' + seconds + "." + ms + 'Z' + ' |  Code: $getUserVar[userCaptchaCode], User: $userTag[$authorID] ($authorID), Message: Verify command used')]`
}]