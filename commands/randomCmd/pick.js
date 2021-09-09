const { SlashCommandBuilder } = require('@discordjs/builders');

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
		await interaction.reply(`${interaction.options.getString("category")} hehe`)
        
	},
};