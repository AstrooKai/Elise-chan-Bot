module.exports = {
  name: "whois",
  aliases: ['user', 'userinfo', 'profile', 'i'],
  code: `
$addField[1;Server Booster?;$replaceText[$replaceText[$isBoosting[$mentioned[1]];false;No];true;Yes];yes]
$addField[1;A Bot?;$replaceText[$replaceText[$isBot[$mentioned[1]];false;No];true;Yes];yes]
$addField[1;Server Join Date;$formatDate[$memberJoinedDate[$mentioned[1];$guildID];LLLL] UTC
($parseDate[$memberJoinedDate[$mentioned[1];$guildID];time] ago)]
$addField[1;Account Creation Date;$formatDate[$creationDate[$mentioned[1];ms];LLLL] UTC
($parseDate[$creationDate[$authorID;ms];time] ago)]
$addField[1;User ID;$mentioned[1];no]
$addField[1;Server Nickname;$nickname[$mentioned[1]];yes]
$addField[1;User Tag;$userTag[$mentioned[1]];yes]
$title[1;User Information]
$thumbnail[1;$userAvatar]`
}