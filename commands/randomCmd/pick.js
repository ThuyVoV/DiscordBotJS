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
                .addChoice('Funny', 'gif_funny')
                .addChoice('Meme', 'gif_meme')
                .addChoice('Movie', 'gif_movie')
            ),

	async execute(interaction) {
        // const message = await interaction.reply('You can react with Unicode emojis!', { fetchReply: true })
        await interaction.reply('You can react with Unicode emojis!');
        const message = await interaction.fetchReply()
        message.react("🐷")

        //message.react('😄') 
	},
};