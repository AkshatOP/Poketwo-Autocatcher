
  
  # Poketwo-AUTOCATCHER
A second generation **free** and open-source Pokétwo autocatcher, created with the goal of preventing people from wasting their money on buying autocatchers online.

😄😇 **Star this Repo if you find it useful**

---

### Youtube Tutorial
https://www.youtube.com/watch?v=Qqog9HaNU8Y&t=3s

---


### Features
The bot has the following features:
- ⚙️ Easy Setup (simply run a script and enter the correct information, no 'coding' needed)
- ⬆️ Auto-levelling (Level up all your duel Pokémon to level 100 **overnight** by just selecting them!)
- 📜 Log all the pokemons it catch in your desired channel!
- 💲 **Completely free** and open-source (you can see the code as it is currently)
- 💕 **Trustworthy**; this autocatcher is **completely** open-source (meaning you can see the latest code)
- 📜 Support for all Pokémon in poketwo
- 🏎️ Super fast; the autocatcher can even handle Incense!
- 🔍 Pokétwo-Resistant - the autocatcher is undetectable due to it's method of catching
- 🔊 Say command `$say <text>` to trade pokemons/manipulate bot

### Requirements
Please note that this autocatcher requires NODEJS installed on your system or in any other platform you are trying to run it onto

## Invite Poke Name Bot to make the autocatcher run . [Invite Link](https://discord.com/oauth2/authorize?client_id=874910942490677270&permissions=412317379648&scope=applications.commands%20bot)
## Alternatively You can invite Sierra too![Invite link](https://discord.com/oauth2/authorize?client_id=696161886734909481&permissions=8&scope=bot%20applications.commands)(but i prefer only use pokename only)

#### <b>Running the bot</b>
To start up the bot for the first time, STAR THIS REPO then clone the repo by this link to your local machine or replit (wherever you wish) [click here](https://github.com/AkshatOP/Poketwo-Autocatcher.git) 
Once you have done that hit `npm install discord.js-self express ocr-space-api-wrapper` in console.

## **Specific Channel Support**
If you want to run the bot so that it catches only in specific channels then Head over to LINE 17 of #index.js and fill the array with channel IDs of those channel you want to catch in.
*Leave it like [ ] if you don't want this feature* 

After That enter in the following fields in **Config.json**:

##### <b>TOKEN</b>:
Paste in your discord account's user token. You can find instructions on this [here](https://www.youtube.com/watch?v=3W9tAEsK7RM)
*CAUTION*
If you are using repl.it and don't want your token to be leaked. Follow this [tutorial](https://www.youtube.com/watch?v=BKlv__1OoGc) to secure your token and apply that fix in line 130 of index.js. 

##### <b>spamChannelID</b>:
This will allow the bot to use your preferred channel to spam as well as catch Pokétwo spawns. Make sure you paste this carefully, as If you set it to the wrong channel it will spam and catch there.

##### <b>logChannelID</b>:
This will allow the bot to use your preferred channel to log the pokemons caught in a desired channel of yours.

##### <b>errorChannelID</b>:
This will allow the bot to use your preferred channel to log the errors of code in a desired channel of yours.

##### <b>ocrSpaceApiKey</b>:
This is the MOST IMPORTANT part. You have to create an ocrSpace account and put it's API key. Click [here](https://ocr.space/ocrapi/freekey) to get free API-KEY

After you've entered that in, the autocatcher should start successfully. (if not, check if you have entered in the right fields)

> Remember to cd into your autocatcher folder as well. If you need any help with something, feel free to open a Github Issue.

> ALL Done you can now start your bot by typing `node index.js` in the console 

### Auto-levelling
To enable auto-levelling, just select the pokemon in that autocatcher ID and let it auto-level

# ERRORS
This bot uses Free API for predicting pokemon names so it sometimes gives in accurate results like
Instead of "@poketwo catch Magikarp"  it writes "@poketwo catch Macikarp" 

To fix this I have made a `namefix.json` where you can change the incorrect names with the correct ones

**For example**
Go to namefix.json and edit it as stated
```js
{
    "APPUN": "APPLIN",
    "MACIKARP": "MAGIKARP",
    "put wrong name here with uppercase": "put Correct name here",//edit here and keep all characters UPPERCASE
    "NIDORAN (F)": "NIDORAN" 
  }
```
like if it's saying Dragapult as Dracapult and rockruff as Rocktuff
add these line here like this 

```js
{
    "APPUN": "APPLIN",
    "MACIKARP": "MAGIKARP",
    "ROCKTUFF": "ROCKRUFF",//edit here but in upperCase characters 
    "DRACAPULT": "DRAGAPULT",//edit here but in upperCase characters 
    "NIDORAN (F)": "NIDORAN"
   
  }

```
If you want to contribute to the community Please post the json you made after a few weeks of use of this bot here or DM me that json in Discord 🙂 


---

## **DISCLAIMER**

Please note that self botting is against Discord's Terms of Service and being discovered using a self bot may result in your account being banned. To avoid this, keep knowledge of your self bot to a minimum and use a throwaway account. I am not responsible for any accounts lost due to the self bot. I also recommend checking the self bot channel's messages occasionally to see if Pokétwo has sent a captcha. **If it has, it would be a good idea to solve it.**

---

## Support Server 
[Click here to join support server](https://discord.gg/FJD29BV8Np)

---

## Acknowledgements
### Creators
* 🔥⃤•AK_ØPᵈᵉᵛ✓#6326 [Click to DM](https://discordapp.com/users/503928755341885450)

### Contributors
* 🔥⃤•AK_ØPᵈᵉᵛ✓#6326 
* bullyhunter (thanks for help in namefix.json)

---
