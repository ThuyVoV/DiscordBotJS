const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);


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
        console.log(animal)
        await interaction.reply(animal)
        // let haha = await fetch("https://api.thecatapi.com/v1/images/search")
        // console.log(haha.json() )
	},
};