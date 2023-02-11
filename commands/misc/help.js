module.exports = {
    name: "help",
    code: `$if[$checkContains[$message[1];addgif;addmeme;arrest;ban;bungogifs;bungomemes;eval;help;kick;reboot;release;status;system;unban]==true]
$title[Help | $getObjectProperty[name]]
$description[**Description**
$getObjectProperty[description]
**Aliases**
\`$getObjectProperty[aliases]\`
**Usage**
\`\`\`
$getObjectProperty[usage]
\`\`\`
**Authorized**
$getObjectProperty[authorized]]
$footer[$getObjectProperty[note]]
$color[$getVar[default]]
$createObject[$jsonRequest[https://eca.kyle9.repl.co/commands/$message[1]]]
$else
$title[Help - Commans List]
$description[**Moderation**
\`arrest, ban, kick, release, unban\`
**Fun**
\`addgif, addmeme, bungogifs, bungomemes\`
**Misc**
\`eval, help, reboot, status, system\`]
$color[$getVar[default]]
$endif`
}
