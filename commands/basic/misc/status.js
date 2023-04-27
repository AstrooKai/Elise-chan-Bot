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
**API:** $jsonRequest[https://eca.astrookai.repl.co/uptime;uptime]]
$color[1;Green]`
}