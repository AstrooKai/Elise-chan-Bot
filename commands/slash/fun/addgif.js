module.exports = {
  name: "addgif",
  prototype: "slash",
  type: "interaction",
  code: `
$interactionReply[;{newEmbed:{title:HTTP 201 Created}{description:GIF successfully added to API database.}{field:Response Data:\`\`\`json
$httpRequest[https://eca.astrookai.repl.co/bungogifs;POST;{"name":"$slashOption[name]", "url":"$nonEscape[$slashOption[url]]"};;{newEmbed:{title:An error occured!}{description:An error occured upon sending your request to the API, please notify the developer.}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
\`\`\`}{color:Green}{footer:ECA-GIF}{timestamp}}]

$onlyIf[$stringEndsWith[$slashOption[url];.gif]==true;{newEmbed:{author:API Error:https://eca.astrookai.repl.co/media/err.png}{description:The request has been declined, the image URL must end with \`.gif\`!}{color:Red}}{options:{ephemeral: true}}{extraOptions:{interaction: true}}]
$onlyForRoles[$getVar[authorizedOne];$getVar[authorizedTwo];{newEmbed:{author:ERR-01 Unauthorized:https://eca.astrookai.repl.co/media/err.png}{description:$getVar[err01]}{color:Red}}]`
}