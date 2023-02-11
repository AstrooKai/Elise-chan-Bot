module.exports = {
  name: "addmeme",
  code: `$djsEval[const axios = require('axios')
const { MessageEmbed } = require('discord.js')
const { codeBlock } = require('@discordjs/builders')

axios.post('https://eca.kyle9.repl.co/bungomemes', {link:"$splitText[1]", name:"$splitText[2]"})
.then((res) => {
let stat = 'HTTP ' + res.status + ' ' + res.statusText
const embed = new MessageEmbed().setTitle('Data added to the API!')
.setDescription(codeBlock('{"link":"$splitText[1]", "name":"$splitText[2]"}'))
.setFooter(stat)
.setTimestamp()
.setColor('$getVar[green]')
message.channel.send({ embed })
}, (err) => {
message.channel.send(err)
})]

$textSplit[$message; - ]
$cooldown[5s;{title:API COOLDOWN}{description:Please wait for a few seconds before sending another request to the api, this is to prevent overload and increase of delay on the API.}{color:$getVar[red]}]
$onlyIf[$isValidImageLink[$message[1];.png]==false;{title:HTTP 400}{description:Request declined. URL must end with \`.png\` or \`.jpg\`!}{color:$getVar[red]}]
$onlyForRoles[920265063087104000;920264976663457792;{description:You can't use this command!}{color:$getVar[red]}]`
}
