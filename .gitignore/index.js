const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("Teste");
    console.log("Bot is ready");
});

bot.login("NTAxODU1NzczNDI5NTk2MTYw.DuxTmw.RFkUMByv3RCZllwhDjb-6XQ-1oI")
