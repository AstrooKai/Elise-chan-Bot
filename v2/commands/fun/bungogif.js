module.exports = {
  name: "bungogif",
  aliases: ['bungogifs'],
  code: `$title[$getObjectProperty[name]]
$image[$getObjectProperty[link]]
$color[$getVar[default]]
$createObject[$jsonRequest[https://eca.astrookai.repl.co/bungogifs]]`
}