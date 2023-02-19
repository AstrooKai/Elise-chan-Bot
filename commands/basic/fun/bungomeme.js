module.exports = {
  name: "bungomeme",
  aliases: ['bungomemes'],
  code: `$title[$getObjectProperty[name]]
$image[$getObjectProperty[link]]
$color[$getVar[default]]
$createObject[$jsonRequest[http#COLON#//82.223.64.239#COLON#27621/bungomemes]]

$if[$hasRole[$guildID;$authorID;$getVar[authorizedOne]]==true;]
$if[$hasRole[$guildID;$authorID;$getVar[authorizedTwo]]==true;$cooldown[1m;{newEmbed:{author:ERR-07 Cooldown:https://eca.astrookai.repl.co/media/err.png}{description:Chill for %time%! You're not Rintarou!}{color:Red}}];]
$if[$hasAnyRole[$guildID;$authorID;$getVar[authorizedOne];$getVar[authorizedTwo]]==false;$cooldown[2m;{newEmbed:{author:ERR-07 Cooldown:https://eca.astrookai.repl.co/media/err.png}{description:Hmmph! Let me rest before I fetch anothr one! %time% for you!}{color:Red}}];]`
}