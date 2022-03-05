module.exports = {
  name: "bungomemes",
  aliases: ['bungomeme'],
  code: `$title[$getObjectProperty[name]]
$image[$getObjectProperty[link]]
$color[$getVar[default]]
$createObject[$jsonRequest[https://eca.kyle9.repl.co/bungomemes;]]

$if[$hasRole[$authorID;920264976663457792]==true]
$elseIf[$hasRole[$authorID;920265063087104000]==true]
$cooldown[1m;{description:Chill for 90 seconds! You're not Rintarou!}{color:$getVar[red]}]
$endelseif
$elseIf[$hasRole[$authorID;920265063087104000]==false]
$cooldown[2m;{description:Hmmph! Let me rest before I fetch another one! 120 seconds for you!}{color:$getVar[red]}]
$endelseIf
$endif`
}
