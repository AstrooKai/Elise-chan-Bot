module.exports = {
  name: "help",
  code: `$author[1;Help | $getObjectProperty[CommandName];http#COLON#//par01.pylexnodes.net#COLON#30113/media/info.png]
$addField[1;Example;\`\`\`$getObjectProperty[UsageExample]\`\`\`;false]
$addField[1;Usage;\`\`\`$getObjectProperty[Usage]\`\`\`;false]
$addField[1;Authorized Personnels;$getObjectProperty[AuthorizedPersonnels[0]] $if[$getObjectProperty[AuthorizedPersonnels[1]]==undefined;;$getObjectProperty[AuthorizedPersonnels[1]]];false]
$addField[1;Description;$getObjectProperty[Description];false]
$addField[1;Aliases;$getObjectProperty[Aliases];false]
$addField[1;Category;$getObjectProperty[Category];true]
$addField[1;Command Name;$getObjectProperty[CommandName];true]
$color[#1e90ff]
$createObject[$jsonRequest[http://par01.pylexnodes.net:30113/commands/$message[1]]]
$onlyIf[$checkContains[$message[1];arrest;ban;kick;release;unban;addgif;addmeme;bungogif;bungomeme;eval;help;reboot;status;system;update]==true;{newEmbed:{author:Help | List:http#COLON#//par01.pylexnodes.net#COLON#30113/media/info.png}{field:Moderation:arrest, ban, kick, release, unban:no}{field:Fun:addgif, addmeme, bungogif, bungomeme:no}{field:Misc:eval, help, reboot, status, system, update:no}{color:#1e90ff}}]`
}