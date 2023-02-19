module.exports = {
  name: "bungogif",
  aliases: ['bungogifs'],
  $if: "v4",
  code: `$if[$hasRole[$guildID;$authorID;$getVar[authorizedOne]]==true]
$title[$getObjectProperty[name]]
$image[$getObjectProperty[link]]
$color[$getVar[default]]
$createObject[$jsonRequest[http#COLON#//82.223.64.239#COLON#27621/bungogifs]]
$elseIf[$hasRole[$guildID;$authorID;$getVar[authorizedTwo]]==true]
$title[$getObjectProperty[name]]
$image[$getObjectProperty[link]]
$color[$getVar[default]]
$createObject[$jsonRequest[http#COLON#//82.223.64.239#COLON#27621/bungogifs]]
$cooldown[1m;{newEmbed:{author:ERR-07 Cooldown:https://eca.astrookai.repl.co/media/err.png}{description:Chill for %time%! You're not Rintarou!}{color:Red}}]
$endelseIf
$else
$title[$getObjectProperty[name]]
$image[$getObjectProperty[link]]
$color[$getVar[default]]
$createObject[$jsonRequest[http#COLON#//82.223.64.239#COLON#27621/bungogifs]]
$cooldown[2m;{newEmbed:{author:ERR-07 Cooldown:https://eca.astrookai.repl.co/media/err.png}{description:Hmmph! Let me rest before I fetch another one! %time% for you!}{color:Red}}]
$endIf`
}