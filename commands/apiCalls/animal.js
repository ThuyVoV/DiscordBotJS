const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('animal')
		.setDescription('send animal pics')
        .addStringOption( option => 
            option.setName('category')
                .setDescription('The animal category')
                .setRequired(true)
                .addChoice('Cat', 'cat')
                .addChoice('Dog', 'dog')
            ),

	async execute(interaction) {
        let animal = await interaction.options.getString("category") 
        //console.log(animal)
        //await interaction.reply(animal)
        try{
            if (animal === 'cat'){
                let pic = await axios.get("https://api.thecatapi.com/v1/images/search")
                console.log(pic.data[0].url)
                await interaction.reply(pic.data[0].url)
            }
            else if ( animal === 'dog'){
                let pic = await axios.get("https://dog.ceo/api/breeds/image/random")
                console.log(pic.data.message)
                await interaction.reply(pic.data.message)
            }
        }
        catch{
            await interaction.reply("Something went wrong")
        }
	},
};