module.exports = {
  name: "status",
  aliases: ['stat','ping','pong'],
  code: `$title[Bot Status]
$description[__**Ping**__
**Websocket:** $pingms
**Latency:** $botPingms
**API:** N/A
__**Uptime**__
$uptime]
$color[$getVar[green]]
$cooldown[3s;{description:Cooldown!}{color:$getVar[red]}]`
}
