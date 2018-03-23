const discordjs = require('discord.js');
const client = new discordjs.Client();
const config = require('./config.json');

client.login(config.token);

client.on('message', function(msg){
  if(msg.content === config.prefix + 'ping') {
    msg.reply('pong');
  }
});
