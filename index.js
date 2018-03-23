const discordjs = require('discord.js');
const client = new discordjs.Client();
const config = require('./config.json');

client.login(config.token);

client.on('message', function(msg){
  if(msg.content[0] != config.prefix){return}
  var reqCmd = msg.content.slice(1);
  if(reqCmd.toString() === 'ping'){
    msg.channel.send('pong');
  }
});
