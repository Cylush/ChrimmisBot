const Discord = require('discord.js');
const client = new Discord.Client();
//const token = require("./config.json")

client.once('ready', () => {
    console.log('Ready!');
});




client.on('message', message => {
    if (message.content === '!chrimmis') {

        var countDate = new Date("December 25, 2020").getTime();
        var now = new Date().getTime(); //current time

        var distance = countDate - now;
        // time calculations for days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var output = days + " days, " + hours + " hours, " + minutes + " minutes, " + "and " + seconds + " seconds " + "to Chrimmis!";
        // reply with countdown to Chrimmis
        message.channel.send(output);
    }
});

client.login(process.env.TOKEN);

