module.exports = {
    async heart(message) {

        if (message.content.toLowerCase() === "oink"){
            await message.react("🐷")
        }

        //const emote = 
        const emote = message.reactions.cache.first(2)
        //console.log(emote.name)
	},
}