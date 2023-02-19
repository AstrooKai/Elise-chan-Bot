module.exports = {
  name: "status",
  aliases: ['stat','ping','pong'],
  code: `$title[1;Bot Status]
$description[1;__**Ping**__
**Websocket:** $pingms
**Database:** $dbPingms
**Latency:** $messagePingms
**API:** N/A
__**Uptime**__
**Bot:** $uptime
**API:** $jsonRequest[http#COLON#//82.223.64.239#COLON#27621/uptime;uptime]]
$color[1;Green]`
}