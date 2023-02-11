module.exports = {
  name: "system",
  aliases: ['sys','botsystem','botsys'],
  code: `$title[Bot Information]
$addField[Uptime;$uptime;yes]
$addField[RAM Usage;$ram  MB / 1000 MB;yes]
$addField[CPU Usage;$replaceText[$cpu %; ;] / 150%;yes]
$addField[CPU;$djsEval[require('os').cpus() [0].model;yes];yes]
$addField[Operating System;$replaceText[$djsEval[require('os').platform();yes];linux;Linux];yes]
$addField[Engine;NodeJS ($nodeVersion);yes]
$addField[Creation Date;Sun, 19 Dec 2021 13:27:09 UTC

__**System Information**__;np]
$addField[Discord ID;$client[id];no]
$addField[Version;1.0.0;yes]
$addField[Name;Elise-chan;yes]
$description[__**Basic Information**__]
$color[#00ffff]`
}
