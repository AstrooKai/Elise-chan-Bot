module.exports = {
  name: "addgif",
  code: `$addGIF[$splitText[1];$splitText[2]]
$textSplit[$message; - ]
$globalCooldown[10s;{newEmbed:{author:ECooldown:http#COLON#//82.223.64.239#COLON#27621/media/err.png}{description:Command under cooldown! Please wait for %time%!}}]
$onlyIf[$stringEndsWith[$message[1];.gif]==true;{newEmbed:{author:API Error:http#COLON#//82.223.64.239#COLON#27621/media/err.png}{description:The request has been declined, the image URL must end with \`.gif\`!}{color:Red}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:http#COLON#//82.223.64.239#COLON#27621/media/err.png}{description:$getVar[err01]}{color:Red}}]`
}