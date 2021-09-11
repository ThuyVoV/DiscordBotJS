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
        console.log(chose, typeof chose)
        
        const emojiName = "attackedpanda"
        const emote = interaction.client.emojis.cache.find(emojis => emojis.name === emojiName)
        //const emote = message.guild.emojis.cache.get("886004309429469254")
        message.react(emote)
        // message.react("🐷") 
        // message.react("🐱")
        // message.react("🐶")
        console.log(emote.name) 
	},
};