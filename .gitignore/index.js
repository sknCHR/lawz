const Discord = require("discord.js");

var PREFIX = "!";
var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Teste");
    console.log("Bot is ready");
});
bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0].toLowerCase()) {
        case "invite"
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name : "Link"
                    value: "testee"
                    inline: false
                }],
                footer: {
                    footer: "test",
                },
            }
        });
        break; 
    }
});

bot.login("NTAxODU1NzczNDI5NTk2MTYw.DuxTmw.RFkUMByv3RCZllwhDjb-6XQ-1oI")
