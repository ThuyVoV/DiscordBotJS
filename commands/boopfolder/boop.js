const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boop')
		.setDescription('Replies with beep!'),
	async execute(interaction) {
		await interaction.reply('beep beep boop');
	},
};