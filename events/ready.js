module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        client.user.setPresence({ activities: [{ type: "COMPETING", name: 'YOUR BUTTT!' }], status: 'dnd' });
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};