const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('urban')
		.setDescription('Replies with Pong!')
        .addStringOption( option =>
            option.setName('input')
            .setDescription('The input to echo back')
			.setRequired(true)
		),

	async execute(interaction) {
        try{
            const word = interaction.options.getString('input') 
            const word_def = await axios.get(`https://api.urbandictionary.com/v0/define?term=${word}`);
            console.log(word_def.data.list[0].definition)
            //console.log(word_def.list[0].definition)
            await interaction.reply(word_def.data.list[0].definition)
        }
        catch(error){
            console.log("ehehrehr!!!!!")
            console.log(error.log)
        }
		
	},
};