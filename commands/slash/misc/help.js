module.exports = [{
  name: "add-select-menu",
  code: `
$title[Help | Command List]
$description[]
$addField[Misc;\`eval\`, \`help\`, \`qotd\`, \`reboot\`, \`say\`, \`status\`, \`system\`, \`updateCommands\`, \`whois\`]
$addField[Fun;\`addgif\`, \`addmeme\`, \`bungogif\`, \`bungomeme\`]
$addField[Moderation;\`arrest\`, \`ban\`, \`verify\`, \`kick\`, \`release\`, \`unban\`]
$color[$getVar[default]]
$addSelectMenu[1;commandMenu;Select Command;1;1;false;arrest:Moderation:arrestCommand:false;ban:Moderation:banCommand:false]
`
}, {
  name: "commandMenu",
  type: "interaction", // clarifying that this command is an Interaction
  prototype: "selectMenu",
  code: `
$interactionUpdate[;{newEmbed:{title:Help | Command List}{description:}{field:Name:$commandInfo[arrest;name]:yes}{field:Category:$commandInfo[arrest;category]:yes}{field:Description:$commandInfo[arrest;description]}{field:Authorized Users:$commandInfo[arrest;authorizedUsers]}{field:Basic Usage:\`\`\`$commandInfo[arrest;basicUsage]\`\`\`}{field:Slash Usage:\`\`\`$commandInfo[arrest;slashUsage]\`\`\`}{field:Example:\`\`\`$commandInfo[arrest;example]\`\`\`}};{actionRow:{selectMenu:commandMenu:Command Menu:1:1:false:{selectMenuOptions:arrest:1:Moderation:true}{selectMenuOptions:ban:2:Moderation:false}}}]
$onlyIf[$interactionData[values[0]]==arrestCommand;]`
}, {
  name: "commandMenu",
  type: "interaction", // clarifying that this command is an Interaction
  prototype: "selectMenu",
  code: `
   $interactionUpdate[Bye! :(]
   $onlyIf[$interactionData[values[0]]==banCommand;]`
}]