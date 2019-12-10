const Discord = require("discord.js");
const client = new Discord.Client();
const { RichEmbed } = require("discord.js");

client.on('ready', message => {
  console.log('I am ready');
});



client.on('message', message => {        // 'client.on('message')' commands are triggered when the
  if (message.content === 'ping') {      // specified message is read in a text channel that the bot is in.
    message.reply('pong');
  } else if(message.isMemberMentioned(client.user)) {
                    message.channel.send('HEY I AM A BOT WHOSE PREFIX IS "!"')
                    }
}); 
client.on("message", message => {
  if (message.content === "!botinfo") {
    let embed = new Discord.RichEmbed()
      .setTitle("BOT INFORMATION") //set title of embed
      .setColor("#ff2052") //color of embed
      .setDescription("This bot is made by IGCY, so this is a tester")
      .setImage(message.author.avatarURL) //description of embed
      .addField("BOT VERSION", "CURRENT BOT IS OF VERSION 1.0.1")
      .addField("OUR OFFICIAL WEBSITE", "[VISIT THE WEB](https://igcbot.blogspot.com)",true)
      .addField(
        "SUPPORT US ON YT",
        "[CLICK HERE](https://youtube.com/c/DARKPHANTOM)",
        true
      )
      .addField(
        "JOIN OUR DISCORD",
        "[CLICK HERE](https://discord.gg/psEpeHF)",
        true
      )
      .setThumbnail(`${message.author.avatarURL}`)
      .setFooter(
        `Command req by ${message.author.username}`,
        `${message.author.avatarURL}`
      );
    message.channel.send(embed);
  }
});

client.login("YOUR-BOT-TOKEN-HERE");
