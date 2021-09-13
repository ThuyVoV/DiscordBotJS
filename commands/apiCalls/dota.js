const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')
const { dotaToken } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dota')
		.setDescription('Replies with Pong!')
        .addStringOption( option =>
            option.setName('input')
            .setDescription('The input to echo back')
			.setRequired(true)
		),

	async execute(interaction) {
        try{
            const word = interaction.options.getString('input') 
            const dota = await axios({
                method: 'get',
                url: `https://api.pandascore.co/dota2/abilities/${word}`,
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${dotaToken}`
                  }

            });
            await interaction.reply(`${dota.data.image_url} ${dota.data.name}`)
        }
        catch(error){
            console.log("ehehrehr!!!!!")
            console.log(error.log)
        }
		
	},
};