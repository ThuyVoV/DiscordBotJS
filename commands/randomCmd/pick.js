const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pick')
        .setDescription('pick choices')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The gif category')
                .setRequired(true)
                .addChoice('Cat', 'cat')
                .addChoice('Dog', 'dog')
                .addChoice('Pig', 'pig')
        ),

    async execute(interaction) {
        try {
            const chose = interaction.options.getString('category')
            // const message = await interaction.reply('You can react with Unicode emojis!', { fetchReply: true })
            await interaction.reply(`You chose: ${chose}!`);
            await wait(1000)
            await interaction.editReply(`:${chose}:`)
            let message = await interaction.fetchReply()

            const emojiName = "attackedpanda"
            const emote = interaction.client.emojis.cache.find(emojis => emojis.name === emojiName)
            //const emote = message.guild.emojis.cache.get("886004309429469254")
            Promise.all([
                message.react(emote),
                //message.react("🐷"),
                // message.react("🐱"),
                // message.react("🐶"),
            ])

            // for (const x of interaction.client.emojis.cache){
            //     console.log("hi", x.name)
            // }

            //interaction.client.emojis.cache.each(x => console.log("hi", x.name, x.id))

            //try{
            //message = await interaction.fetchReply()
            if (chose === 'dog') {
                //message = await interaction.fetchReply()
                await message.react("🐶")
                //message = await interaction.fetchReply()
                const aa = await message.reactions.cache.first(4)
                await message.channel.send(`${message.reactions.cache.size}`)
                await console.log(`${message.reactions.cache.size}`)
                console.log("haha", aa)
                await message.reactions.removeAll()
            }
            else if (chose === 'cat') {
                await message.react("🐱")
                console.log("in cat")
                console.log("THIS IS THE MESSAGE CONTENT 2:", message.content)
                let something = message.reactions.cache.first(2)
                // const something = await message.reactions.cache.find(emojis => emojis.id === "attackedpanda")
                console.log("thi sis something", something)
                //await message.reactions.cache.get('886004309429469254').remove()

                // let ok = await interaction.fetchReply()
                // console.log(ok.content)
                // something = ok.reactions.cache.first(2)
                // console.log("thi sis something2", something)
            }
            else if (chose === "pig") {
                message.react("🐷")
            }
        }
        catch (error) {
            //console.log("failed to remove reaction")
            console.log("hmph", error)
        }
    },
};