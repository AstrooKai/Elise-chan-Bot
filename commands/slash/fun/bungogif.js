module.exports = {
  name: "bungogif",
  prototype: "slash",
  type: "interaction",
  $if: "old",
  code: `$if[$hasRoles[$guildID;$authorID;$getVar[authorizedOne]]==true]
$interactionReply[;{newEmbed:{title:$getObjectProperty[name]}{image:$getObjectProperty[link]}{color:$getVar[default]}}]
$elseif[$hasRoles[$guildID;$authorID;$getVar[authorizedTwo]]==true]
$interactionReply[;{newEmbed:{title:$getObjectProperty[name]}{image:$getObjectProperty[link]}{color:$getVar[default]}}]
$cooldown[1m;{newEmbed:{description:Chill for %time%! You're not Rintarou!}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$endelseif
$else
$interactionReply[;{newEmbed:{title:$getObjectProperty[name]}{image:$getObjectProperty[link]}{color:$getVar[default]}}]
$cooldown[2m;{newEmbed:{description:Hmmph! Let me rest before I fetch another one! %time% for you!}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$endif
$createObject[$jsonRequest[https://eca.astrookai.repl.cobungogifs]]`
}