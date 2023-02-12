module.exports = {
  name: "addgif",
  prototype: "slash",
  type: "interaction",
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

$interactionReply[;{newEmbed:{title:}}]

$onlyIf[$stringEndsWith[$slashOption[url];.gif]==true;{newEmbed:{author:API Error:http://co.daki.cc:4188/media/err.png}{description:The request has been declined, the image URL must end with \`.gif\`!}{color:$getVar[red]}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:http://co.daki.cc:4188/media/err.png}{description:$getVar[err01]}{color:$getVar[red]}}]`
}