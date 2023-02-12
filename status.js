module.exports = (client) => {
  client.status({
    text: "Bar Lupin",
    type: "WATCHING",
    time: 5
  })

  client.status({
    text: "with Mori",
    type: "PLAYING",
    time: 5
  })

  console.log('Status loaded')
}