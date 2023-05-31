/*
@Developer: 🔥⃤•AK_ØPᵈᵉᵛ✓#6326
Name: Poketwo-Autocatcher
Version: V1
Description: bot to help users with catching pokemons
@Supported: poketwo/pokemon
STAR THIS REPO FOR IT TO WORK
*/

const Discord = require('discord.js-self');
const client = new Discord.Client()
const express = require('express');
const { ocrSpace } = require('ocr-space-api-wrapper');

const config = require('./config.json')

//------------------------- KEEP-ALIVE--------------------------------//

const app = express();
if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");
app.get("/", (req, res) => {
  res.status(200).send({ success: "true" });
});
app.listen(process.env.PORT || 3000);

//--------------------------------------------------------------//

//-------------------------READY HANDLER+SPAMMER-----------------------//

client.on('ready', () => {
  console.log(`${client.user.username} is ready, Made by 🔥⃤•AK_ØPᵈᵉᵛ✓#6326`) 
  
  const channel = client.channels.cache.get(config.spamChannelID) 
  const interval = setInterval(function() {
    channel.send("SPAMMing! (Made by 🔥⃤•AK_ØPᵈᵉᵛ✓#6326) ")
  }, 1000);

})
//------------------------------------------------------------//


//-------------------------Anti-Crash-------------------------//

process.on("unhandledRejection", (reason, p) => {
  console.log(" [antiCrash] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(" [antiCrash] :: Uncaught Exception/Catch");
  console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
  console.log(" [antiCrash] :: Multiple Resolves");
  console.log(type, promise, reason);
});

//------------------------------------------------------------//

//-------------------------SAY COMMAND-----------------------//
client.on('message', message => {
  if (message.content.startsWith("$say")) {
    let say = message.content.split(" ").slice(1).join(" ")
    message.channel.send(say)
  }
})

//------------------------------------------------------------//

//----------------------------AUTOCATCHER--------------------------------------//

client.on('message', message => {
  const Pokebots = ["874910942490677270"]; //pokename
  if(Pokebots.includes(message.author.id)) {
    message.embeds.forEach((e) => {
      if (e.image) {
        if (e.image.url.includes("prediction.png")) {
          let url = e.image.url;
          async function main() {
            try {
              const res1 = await ocrSpace(url, { apiKey: `${config.ocrSpaceApiKey}`});
              const name1 = res1.ParsedResults[0].ParsedText.split('\r')[0];
              const name = name1.replace(/Q/g, 'R'); console.log(res1.ParsedResults[0].ParsedText.split('\r')) message.channel.send(`<@716390085896962058> c ${name}`).then(a => { }).catch(error => {
                console.error(error);
                const channel = client.channels.cache.get(config.errorChannelID) 
                channel.send(error)
              })
              console.log("[" + message.guild.name + "/#" + message.channel.name + "] " + name) 
              const channel5 = client.channels.cache.get(config.logChannelID) 
              channel5.send("[" + message.guild.name + "/#" + message.channel.name + "] " + "**__" + name + "__**"  + " made by 🔥⃤•AK_ØPᵈᵉᵛ✓#6326").then(b => { }).catch(error => {
                console.error(error);
                const channel = client.channels.cache.get(config.errorChannelID)
                channel.send(error)
              })
            } catch (error) {
              console.error(error);
              const channel = client.channels.cache.get(config.errorChannelID)
              channel.send(error)
            } }
          main()
        } }
    })
  }
})
client.login(config.TOKEN) 
