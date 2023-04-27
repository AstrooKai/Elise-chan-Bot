module.exports = {
  name: "addmeme",
  code: `$addMeme[$splitText[1];$splitText[2]]
$textSplit[$message; - ]
$globalCooldown[10s;{newEmbed:{author:ERR-06 Cooldown:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:Command under cooldown! Please wait for %time%!}}]
$onlyIf[$isValidImageLink[$message[1]]==true;{newEmbed:{author:ERR-07.400 API Error:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:The request has been declined, the image URL must be valid!}{color:Red}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:http#COLON#//par01.pylexnodes.net#COLON#30113/media/err.png}{description:$getVar[err01]}{color:Red}}]`
}