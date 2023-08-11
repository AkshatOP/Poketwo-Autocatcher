/*
@Developer: 🔥⃤•AK_ØPᵈᵉᵛ✓#6326
Name: Poketwo-Autocatcher
Version: V1.2
Description: bot to help users with catching pokemons
@Supported: poketwo/pokemon
STAR THIS REPO FOR IT TO WORK
*/

const Discord = require('discord.js-self');
const client = new Discord.Client()
const express = require('express');
const { solveHint, checkRarity } = require("pokehint")
const { ocrSpace } = require('ocr-space-api-wrapper');

const config = require('./config.json')
const json = require('./namefix.json');
const allowedChannels = []; // Add your allowed channel IDs to this array or leave it like [] if you want to it to catch from all channels
let isSleeping = false;


//------------------------- KEEP-ALIVE--------------------------------//

const app = express();
if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");
app.get("/", (req, res) => {
  res.status(200).send({ success: "true" });
});
app.listen(process.env.PORT || 3000);

//--------------------------------------------------------------//

//-------------------------SOME EXTRA FUNCTIONS----------------------------//


function findOutput(input) {
  if (json.hasOwnProperty(input)) {
    return json[input];
  } else {
    return input;
  }
}
//--------------------------------------------------------------------------//

//-------------------------READY HANDLER+SPAMMER-----------------------//

client.on('ready', () => {
  console.log(`${client.user.username} is ready, Made by 🔥⃤•AK_ØPᵈᵉᵛ✓#6326 / akshatop`) 
  
  const channel = client.channels.cache.get(config.spamChannelID) 
  
 function getRandomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function spam() {
  channel.send("SPAMMing! (Made by 🔥⃤•AK_ØPᵈᵉᵛ✓#6326) ")
  const randomInterval = getRandomInterval(1500, 5000); // Random interval for spam between 1 second and 5 seconds
  setTimeout(spam, randomInterval);
}
spam(); 
})
//------------------------------------------------------------//


//-------------------------Anti-Crash-------------------------//

process.on("unhandledRejection", (reason, p) => {
  if(reason =="Error: Unable to identify that pokemon."){
  } else { 
    console.log(" [antiCrash] :: Unhandled Rejection/Catch");
    console.log(reason,p);
    
   }
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

//----------------------------AUTOCATCHER--------------------------------------//

client.on('message', message => {
  if(message.content === "$captcha_completed" && message.author.id === config.OwnerID) {
    isSleeping = false;
    message.channel.send("Autocatcher Started!")
  }

  if(!isSleeping){

    if (message.content.includes("Please tell us") && message.author.id === "716390085896962058"){
        isSleeping = true;
        message.channel.send("Autocatcher Stopped , Captcha Detected! Use $captcha_completed once the captcha is solved");
        setTimeout(async function () {
            isSleeping = false
          }, 18000000)//5 hours



  } else if (message.content.startsWith("$say") && message.author.id == config.OwnerID) {

    let say = message.content.split(" ").slice(1).join(" ")
    message.channel.send(say)


  } else {


const Pokebots = ["696161886734909481","874910942490677270"]; //sierra ,pokename
   if (allowedChannels.length > 0 && !allowedChannels.includes(message.channel.id)) {
    return; 
 }
  if(Pokebots.includes(message.author.id)) {
     let preferredURL = null; 
    message.embeds.forEach((e) => {
      if (e.image) {
        const imageURL = e.image.url;
        if (imageURL.includes("prediction.png")) {
          preferredURL = imageURL; 
        } else if (imageURL.includes("embed.png") && !preferredURL) {
          preferredURL = imageURL; 
        }
      }
    });

    if (preferredURL) {
      let url = preferredURL;
 
          async function main() {
            try {
              const res1 = await ocrSpace(url, { apiKey: `${config.ocrSpaceApiKey}`, OCREngine: 2});
              const name1 = res1.ParsedResults[0].ParsedText.split('\r')[0];
              const name5 = name1.replace(/Q/g, 'R');
              const name = findOutput(name5);
              const delay = Math.floor(Math.random() * 6 + 5) * 1000;//interval from 5-10seconds
              console.log("A Pokemon Spawned, Catching in " + (delay/1000) + "seconds")
              setTimeout(() => {
              message.channel.send(`<@716390085896962058> c ${name}`)
              
                .then(a => { }).catch(error => {
                console.error(error);
                const channel = client.channels.cache.get(config.errorChannelID) 
                channel.send(error)
              })
              const filter = (msg) => msg.author.id === "716390085896962058";
              const collector = new Discord.MessageCollector(message.channel, filter, { max: 1, time: 13000 }); // Collect only one message in 10 seconds
              
              collector.on('collect', async (collected) => {
                
                
                if(collected.content.includes("Congratulations")){
		
		  function capitalizeFirstLetter(str) {
 			 return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
		  }
                  const name2 = capitalizeFirstLetter(name)
                  const rareity = await checkRarity(`${name2}`)
                  const logchannel = client.channels.cache.get(config.logChannelID) 
                  logchannel.send("[" + collected.guild.name + "/#" + collected.channel.name + "] " + "**__" + name2 + "__** " + "Rarity "+ rareity + " made by 🔥⃤•AK_ØPᵈᵉᵛ✓#6326").then(b => { }).catch(error => {
                      
                    console.error(error);
                    const channel = client.channels.cache.get(config.errorChannelID)
                    channel.send(error)
                  })

		collector.stop();


                } else if(collected.content == "That is the wrong pokémon!"){




                  message.channel.send(`<@716390085896962058> h`)

                  const filter = (msg) => msg.author.id === "716390085896962058";
                  const collector = new Discord.MessageCollector(message.channel, filter, { max: 1, time: 13000 }); // Collect only one message in 10 seconds

                  collector.on('collect', async (collected)=>{
                    
                    if(collected.content.includes("The pokémon is")){
                    const pokemon = await solveHint(collected)
                    console.log(`Catching ${pokemon}`)
                    await message.channel.send(`<@716390085896962058> c ${pokemon}`)
                    console.log("[" + collected.guild.name + "/#" + collected.channel.name + "] " + pokemon)
                    const rarity = await checkRarity(`${pokemon}`)
                    const channel5 = client.channels.cache.get(config.logChannelID) 
                    channel5.send("[" + collected.guild.name + "/#" + collected.channel.name + "] " + "**__" + pokemon + "__** " + "Rarity "+ rarity + " made by 🔥⃤•AK_ØPᵈᵉᵛ✓#6326").then(b => { }).catch(error => {
                      
                      console.error(error);
                      const channel = client.channels.cache.get(config.errorChannelID)
                      channel.send(error)
                    })
                    }
                  })

                }
              

               
              });
          
              
                }, delay);


            } catch (error) {
              console.error(error);
              const channel = client.channels.cache.get(config.errorChannelID)
              channel.send(error)
            } }
          main()
        } 
    
  }
}
  }
})
client.login(config.TOKEN) //use process.env.token if you are using it in repl.it
