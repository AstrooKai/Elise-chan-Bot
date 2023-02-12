module.exports = {
  name: "addgif",
  code: `$djsEval[const axios = require('axios')
const { MessageEmbed } = require('discord.js')
const { codeBlock } = require('@discordjs/builders')

axios.post('http://co.daki.cc:4188/bungogifs', {link:"$splitText[1]", name:"$splitText[2]"})
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
$globalCooldown[10s;{newEmbed:{author:ECooldown:http://co.daki.cc:4188/media/err.png}{description:Command under cooldown! Please wait for %time%!}}]
$onlyIf[$stringEndsWith[$message[1];.gif]==true;{newEmbed:{author:API Error:http://co.daki.cc:4188/media/err.png}{description:The request has been declined, the image URL must end with \`.gif\`!}{color:$getVar[red]}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:http://co.daki.cc:4188/media/err.png}{description:$getVar[err01]}{color:$getVar[red]}}]`
}