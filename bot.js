const { Client, GatewayIntentBits, Partials } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.once('ready', () => {
  console.log(`🤖 Bot logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.includes('Захиалга бүртгэгдлээ')) {
    try {
      await message.react('✅');
      console.log('✅ Reacted to message');
    } catch (err) {
      console.error('❌ Failed to react:', err);
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
