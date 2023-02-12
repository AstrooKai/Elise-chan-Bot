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
**API:** $jsonRequest[http://co.daki.cc:4188/uptime;uptime]]
$color[1;$getVar[green]]`
}