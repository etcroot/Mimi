# Mimi
Music Bot built with [discord.js-musicbot-addon](https://github.com/DarkoPendragon/discord.js-musicbot-addon) for people to use on their servers as a private bot, 
or people who wants to get into bot creating.

## Features
* ▶️ **Play** - 
Queue a song/playlist by URL or name.
* ❌ **Remove** - 
Remove a song from the queue by position in the queue.
* 📃 **Help** - 
Help for commands.
* ⏭ **Skip** - 
Skip a song or songs with `skip [number]`
* 🔇 **Leave** - 
Leaves the voice channel.
* 🔎 **Search** - 
Searches for up to 10 videos from YouTube.
* ⏸ **Pause** - 
Pauses playing music.
* ▶️ **Resume** - 
Resumes a paused queue.
* 🔊 **Volume** - 
Changes the volume output of the bot.
* 📑 **Queue** - 
View the current queue.
* 🔁 **Loop** - 
Sets the loop state for the queue.
* ✖️ **Clear** - 
Clears the entire queue.
* 🎵 **np** - 
Shows the now playing text.

## Running the bot
First of make sure you have [Node.js](https://nodejs.org/en/) installed on your machine.

Then edit config file located in /src/config.json
```
{
    "credentials": "BOT TOKEN https://discordapp.com/developers/applications/",
    "prefix": "BOT PREFIX",
    "api": "YOUTUBE API KEY https://console.developers.google.com/",
    "ownerid": "YOUR USER ID",
    "colour": "HEX COLOUR, NO #",
    "musicrole": "ROLE WHICH ANYONE CAN USE EVERY MUSIC COMMAND",
    "admins": ["ADMIN ID'S CAN BE SEPARATED BY", "COMMAS"],
    "defaultvolume": "DEFAULT PLAYBACK VOLUME"
}
```
After than run the following in this order:
```
install.bat - will install all the dependencies for you.
start.bat - make sure you run this after installing dependencies & edited the config.json, this will start the bot.
```
If for some reason you're having trouble installing dependencies, do the following below in terminal in the bot directory.
```
npm i discord.js
npm i node-opus
npm i discord.js-musicbot-addon
npm i ffmpeg-binaries
```
