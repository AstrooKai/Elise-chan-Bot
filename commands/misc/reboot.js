module.exports = [{
  name: "reboot",
  aliases: ['restart'],
  code: `$image[https://eca.kyle9.repl.co/media/loading.gif]
$title[Rebooting...]
$onlyForIDs[$ownerID;{description:This command is restricted to the dev only!}{color:$getVar[red]}]`
}, {
   name: "reboot",
   aliases: ['restart'],
   code: `$reboot[index.js]
$onlyForIDs[$ownerID;]
$wait[1s]`
}]
