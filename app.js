const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require('./src/config.json');
client.music = require("discord.js-musicbot-addon");
client.music.start(client, {
    youtubeKey: cfg.api,
    anyoneCanSkip: true,
    ownerOverMember: true,
    inlineEmbeds: true,
    musicPresence: true,
    clearPresence: true,
    defVolume: cfg.defaultvolume,
    botPrefix: cfg.prefix,
    djRole: cfg.musicrole,
    botAdmins: cfg.admins,
    embedColor: cfg.colour,
    ownerID: cfg.ownerid,
    cooldown: {
      enabled: false,
      timer: 1000,
      exclude: ["volume","queue","pause","resume","np"]
    }
  });
  

  client.login(cfg.credentials);