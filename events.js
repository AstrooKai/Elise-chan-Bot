module.exports = (client) => {
  client.onMessage();
  client.onInteractionCreate();

  console.log('Events loaded')
}