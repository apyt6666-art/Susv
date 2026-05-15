require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const {
  joinVoiceChannel,
  VoiceConnectionStatus
} = require("@discordjs/voice");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`${client.user.tag} شغال`);

  const guild = client.guilds.cache.get(process.env.GUILD_ID);

  function joinVC() {
    joinVoiceChannel({
      channelId: process.env.CHANNEL_ID,
      guildId: process.env.GUILD_ID,
      adapterCreator: guild.voiceAdapterCreator,
      selfDeaf: true,
      selfMute: false
    });
  }

  joinVC();
});

client.login(process.env.TOKEN);
