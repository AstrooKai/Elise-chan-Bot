module.exports = {
  name: "system",
  aliases: ['sys','botsystem','botsys'],
  code: `$title[1;Bot Information]
$addField[1;Uptime;$uptime;true]
$addField[1;RAM Usage;$ram  MB / 1000 MB;true]
$addField[1;CPU Usage;$replaceText[$cpu %; ;] / 150%;true]
$addField[1;CPU;$djsEval[require('os').cpus() [0].model;true];true]
$addField[1;Operating System;$toLocaleUppercase[$djsEval[require('os').platform();true]];true]
$addField[1;Environment;NodeJS ($nodeVersion);true]
$addField[1;Creation Date;Sun, 19 Dec 2021 13:27:09 UTC

__**System Information**__;false]
$addField[1;Discord ID;$client[id];false]
$addField[1;Version;$getVar[botVersion];true]
$addField[1;Name;Elise-chan;true]
$description[1;__**Basic Information**__]
$color[1;#00ffff]`
}