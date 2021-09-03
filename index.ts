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

    // test guild
    const guildId = '504540136055242765'
    const guild = client.guilds.cache.get(guildId)
    let commands 

    if (guild){
        commands = guild.commands
    }
    else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'reply pong'
    })

    commands?.create({
        name: 'add',
        description: "add two nums",
        options: [
            {
                name: 'num1',
                description: "num1",
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'num2',
                description: "num2",
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    })
})

// ping pong
client.on('messageCreate', (message) => {
    if (message.content === 'bam'){
        message.channel.send(`${message.channel.valueOf()}`)
    }   

})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()){
        return
    }

    const {commandName, options} = interaction

    if ( commandName === 'ping'){
        interaction.reply({
            content: "ping",
            ephemeral: false
        })
    }
    else if ( commandName === 'add'){
        const num1 = options.getNumber('num1')!
        const num2 = options.getNumber('num2')!

        interaction.reply({
            content: `${num1+num2}`
        })
    }
})

client.login(process.env.TOKEN)