module.exports = {
  name: "$helpContent",
  params: ['page'],
  type: "djs",
  code: async d => {
    const data = d.util.aoiFunc(d);
    const [page] = data.inside.splits;
    let cmdName, category, description, authorizedUsers, basicUsage, slashUsage, example, content = "";
    let result = '';

    if (page == 1) {
      content = "> **Moderation**\nPage 2 | `arrest`\nPage 3 | `ban`\nPage 4 | `verify`\nPage 5 | `kick`\nPage 6 | `release`\nPage 7 | `unban`\n> **Fun**\nPage 8 | `addgif`\nPage 9 | `addmeme`\nPage 10 | `bungogif`\nPage 11 | `bungomeme`\n> **Misc**\nPage 12 | `eval`\nPage 13 | `help`\nPage 14 | `qotd`\nPage 15 | `reboot`\nPage 16 | `say`\nPage 17 | `status`\nPage 19 | `system`\nPage 20 | `updateCommands`\nPage 21 | `whois`"
    }

    if (page == 2) {
      cmdName, category, description, authorizedUsers, basicUsage, slashUsage, example = 'Arrest', 'Moderation', 'arrests a user and puts away to jail', '@Authorized', '?arrest @USER', '/arrest <user>', '?arrest @JohnDoe#1234';
      
      result = `{field:Name:${cmdName}:yes}{field:Category:${category}:yes}{field:Description:${description}}{field:Authorized Users:${authorizedUsers}}{field:Basic Usage:\`\`\`${basicUsage}\`\`\`}{field:Slash Usage:\`\`\`${slashUsage}\`\`\`}{field:Example:\`\`\`${example}\`\`\`}`
    }

    if (page == 3) {
      content = ""
    }

    if (page == 4) {
      content = ""
    }

    if (page == 5) {
      content = ""
    }

    if (page == 6) {
      content = ""
    }

    if (page == 7) {
      content = ""
    }

    data.result = result;
    return {
      code: d.util.setCode(data)
    }
  }
}