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
		await interaction.reply(`${interaction.options.getString("category")}`)
        await wait(1000)
        const sayThis = interaction.fetchReply()
        await interaction.editReply("im mad!!")
        await wait(1000)
        await interaction.fetchReply().then( reply => interaction.editReply(`jk im not mad ${sayThis.getString}`))
        .catch(console.error);
        
	},
};