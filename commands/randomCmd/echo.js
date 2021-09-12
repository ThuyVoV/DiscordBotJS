const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with Pong!')
        .addStringOption( option =>
            option.setName('input')
            .setDescription('The input to echo back')
			.setRequired(true)
		),

	async execute(interaction) {
		await interaction.reply(`you said: ${interaction.options.getString("input")}`);
		const channel = interaction.client.channels.cache.get("742104586315104347")
		channel.send(interaction.options.getString("input"))
	},
};