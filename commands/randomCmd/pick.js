const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pick')
		.setDescription('pick choices')
        .addStringOption( option => 
            option.setName('category')
                .setDescription('The gif category')
                .setRequired(true)
                .addChoice('Cat', 'cat')
                .addChoice('Dog', 'dog')
                .addChoice('Pig', 'pig')
            ),

	async execute(interaction) {
        const chose = interaction.options.getString('category')
        // const message = await interaction.reply('You can react with Unicode emojis!', { fetchReply: true })
        await interaction.reply(`You chose: ${chose}!`);
        await wait(1000)
        await interaction.editReply(`:${chose}:`)
        const message = await interaction.fetchReply()

        
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

        try{
            if (chose === 'dog'){
                message.react("🐶")
                const aa = message.reactions.cache.get("886004309429469254")
                console.log(aa.name)
                await message.reactions.removeAll()
            }
            else if (chose === 'cat'){
                message.react("🐱")
                console.log("in cat")
                const something = message.reactions.cache.first(2)
                // const something = await message.reactions.cache.find(emojis => emojis.id === "attackedpanda")
                console.log(something)
                //await message.reactions.cache.get('886004309429469254').remove()
            }
            else if (chose==="pig"){
                message.react("🐷")
            }
        }
        catch (error) {
            //console.log("failed to remove reaction")
            console.log("hmph", error)
        }
	},
};