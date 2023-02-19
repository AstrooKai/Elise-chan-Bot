const { EmbedBuilder, codeBlock } = require("discord.js");

module.exports = (client) => {
  client.functionManager.createFunction({
    name: "$ISO",
    type: "djs",
    code: async d => {
      const { code } = d.util.aoiFunc(d);

      return {
        code: d.util.setCode({ function: d.func, code, result: new Date().toISOString() })
      }
    }
  });

  client.functionManager.createFunction({
    name: "$addGIF",
    params: ['name', 'url'],
    type: "djs",
    code: async d => {
      const data = d.util.aoiFunc(d);
      const [name, url] = data.inside.splits;
      const axios = require('axios');

      axios.post('http://82.223.64.239:27621/bungogifs', {
        name: name,
        url: url
      })
        .then((res) => {
          const successEmbed = new EmbedBuilder()
            .setTitle(`HTTP ${res.status} ${res.statusText}`)
            .setDescription('GIF successfully added to API database.')
            .setFields(
              { name: 'Request Data', value: codeBlock('json', JSON.stringify(res.data)) }
            )
            .setColor('#00FF7F')
            .setTimestamp()
            .setFooter({ text: 'ECA-GIF' });

          const channel = d.client.channels.cache.get(d.channel?.id);
          channel.send({ embeds: [successEmbed] });
        })
        .catch((err) => {
          console.error(err);

          const errorEmbed = new EmbedBuilder()
            .setTitle('Error Occured')
            .setDescription(codeBlock('js', `An error occured while making a request to the server: ${err.message}`))
            .setColor('#ED4245')
            .setTimestamp()
            .setFooter({ text: 'ECA-GIF' });

          const channel = d.client.channels.cache.get(d.channel?.id);
          channel.send({ embeds: [errorEmbed] });
        });

      return {
        code: d.util.setCode(data)
      }
    }
  });

  client.functionManager.createFunction({
    name: "$addMeme",
    params: ['name', 'url'],
    type: "djs",
    code: async d => {
      const data = d.util.aoiFunc(d);
      const [name, url] = data.inside.splits;
      const axios = require('axios');

      axios.post('http://82.223.64.239:27621/bungomemes', {
        name: name,
        url: url
      })
        .then((res) => {
          const successEmbed = new EmbedBuilder()
            .setTitle(`HTTP ${res.status} ${res.statusText}`)
            .setDescription('Meme successfully added to API database.')
            .setFields(
              { name: 'Request Data', value: codeBlock('json', JSON.stringify(res.data)) }
            )
            .setColor('#00FF7F')
            .setTimestamp()
            .setFooter({ text: 'ECA-Meme' });

          const channel = d.client.channels.cache.get(d.channel?.id);
          channel.send({ embeds: [successEmbed] });
        })
        .catch((err) => {
          console.error(err);

          const errorEmbed = new EmbedBuilder()
            .setTitle('Error Occured')
            .setDescription(codeBlock('js', `An error occured while making a request to the server: ${err.message}`))
            .setColor('#ED4245')
            .setTimestamp()
            .setFooter({ text: 'ECA-Meme' });

          const channel = d.client.channels.cache.get(d.channel?.id);
          channel.send({ embeds: [errorEmbed] });
        });

      return {
        code: d.util.setCode(data)
      }
    }
  });
}