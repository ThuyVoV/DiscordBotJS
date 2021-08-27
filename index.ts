import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()


// create bot client
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

// when bot is ready
client.on('ready', () => {
    console.log("Bot is ready!!")
})

// ping pong
client.on('messageCreate', (message) => {
    if (message.content === 'ping'){
        message.reply({
            content: 'pong',
        })
    }
})

client.login(process.env.TOKEN)