module.exports = {
  name: "test",
  type: "channelCreate",
  channel: "808211045650268161", 
  code: `$title[Channel Update:]
$description[**Channel Created**]
$addFields[1;Name:$newChannel[name]:yes;ID:$newChannel[id]:yes;Type:$newChannel[type]:yes;Topic:$if[$newChannel[topic]==;\`none\`;$newChannel[topic]]:yes;Slowmode:$newChannel[slowmode]:yes;NSFW:$newChannel[nsfw]:yes]`
}