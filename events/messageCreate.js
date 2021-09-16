const {heart} = require("../onMessageCreate/oinkMessage")

module.exports = {
	name: 'messageCreate',
	execute(message) {
        heart(message)
        // const text = await message.fetch()
        // console.log(text.content)
        // await text.react("❤")
	},
};